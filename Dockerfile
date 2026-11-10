# Etapa 1: Build da aplicação React/Vite com Node
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor Web Nginx ultra-rápido para entregar o site
FROM nginx:alpine
# Copia a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copia os ficheiros gerados pelo Vite para o Nginx
COPY --from=build /app/build/client /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]