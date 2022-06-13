# Crear una imagen basada en Node 16 
FROM node:16

# Crear un directorio donde se ubicara la aplicación
RUN mkdir -p /usr/src/app

# Cambiar directorio que en consecuencia ejecutara nuestros comandos en el nuevo directorio
WORKDIR /usr/src/app

# Copiar el package json donde se definen las dependencias
COPY package.json /usr/src/app

# Instalar dependencias
RUN npm install

# Copiar todo el codigo que se necesita para poder ejecutar la aplicación
COPY . /usr/src/app

ARG node_env=production
ENV NODE_ENV ${node_env}

# Exponer el puerto 3000
EXPOSE 3000

# Servir la aplicación --prod CMD ["npm","run","start"]
CMD ["npm","run","start"]
