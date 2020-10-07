FROM nginx:latest
WORKDIR /app
ADD nginx.conf /etc/nginx/conf.d/
COPY _static /app
EXPOSE 8080
