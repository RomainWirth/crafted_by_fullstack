# Utilisez une image de Node.js comme base
FROM node:lts-alpine AS build-stage

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# installe les dépendances du projet
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Compilez l'application Vue.js
RUN npm run build

# Créez une nouvelle image légère pour servir l'application
FROM nginx:alpine

# Copier le fichier de configuration NGINX
COPY default.conf /etc/nginx/conf.d/default.conf

# Copiez les fichiers de l'application compilée depuis le premier conteneur dans le répertoire approprié de l'image NGINX
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Script pour remplacer les variables d'environnement
COPY ./substitute_env_var.sh /docker-entrypoint.d/substitute_env_var.sh
RUN chmod +x /docker-entrypoint.d/substitute_env_var.sh

# Exposez le port 80 pour que l'application soit accessible depuis l'extérieur du conteneur
EXPOSE 80

# Commande pour démarrer NGINX et servir l'application
CMD ["nginx", "-g", "daemon off;"]