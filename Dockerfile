# Etapa de construcción
FROM node:22.11.0 as build-stage

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json para instalar dependencias
# COPY package.json ./
# COPY package-lock.json ./

# Copiar package.json y package-lock.json
COPY package.json package-lock.json ./

# Instalar dependencias de manera consistente
RUN npm ci

# Instalar dependencias
RUN npm install
RUN npm install ohash@1.1.4
RUN npm install lodash

# Copiar el código fuente
COPY . .

# Construir la aplicación (SSR)
RUN npm run build

# Etapa de producción
FROM node:22.11.0 as production-stage

# Establecer el directorio de trabajo en producción
WORKDIR /app

# Copiar solo los archivos necesarios desde la etapa de build
COPY --from=build-stage /app/.output .output
COPY --from=build-stage /app/node_modules node_modules
COPY --from=build-stage /app/package*.json ./

# Exponer el puerto 3000 (por defecto en Nuxt SSR)
EXPOSE 3000

# Comando para iniciar la aplicación en SSR
CMD ["node", ".output/server/index.mjs"]
