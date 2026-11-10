# Etapa 1: Build da aplicação React/Vite com Node
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor Web Nginx ultra-rápido para entregar o site
FROM nginx:alpine
# Copia os arquivos da pasta 'dist' gerados pelo Vite para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]