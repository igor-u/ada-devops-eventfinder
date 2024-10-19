# 1: baixar imagem base - foi escolhido o nginx em Alpine Linux, por ser leve
FROM nginx:1.26.2-alpine-slim

# 2: informar diretório de trabalho do container
WORKDIR /usr/share/nginx/html

# 3: criar variável de ambiente com o valor da porta do container que será exposta
ENV NGINX_PORT=80

# 4: copiar diretório de distribuição do host para o diretório de trabalho do container
COPY dist .

# 5: expor a porta do container configurada para a aplicação
EXPOSE ${NGINX_PORT}