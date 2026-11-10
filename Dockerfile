# --- Etapa 1: Build da aplicação ---
FROM node:22-alpine AS build
WORKDIR /app

# Copia os ficheiros de dependências
COPY package*.json ./
RUN npm install

# Copia todo o código-fonte do projeto
COPY . .

# Executa o build (que gera as pastas build/client e build/server)
RUN npm run build


# --- Etapa 2: Imagem final de Produção ---
FROM node:22-alpine
WORKDIR /app

# Copia apenas os ficheiros essenciais de dependências e package.json
COPY package*.json ./
RUN npm install --omit=dev

# Copia a pasta de build gerada na etapa anterior
COPY --from=build /app/build /app/build

# Configura as variáveis de ambiente para o servidor Node.js escutar na porta 80
EXPOSE 80
ENV PORT=80
ENV HOST=0.0.0.0

# Comando para iniciar o servidor SSR do React Router
CMD ["npm", "run", "start"]