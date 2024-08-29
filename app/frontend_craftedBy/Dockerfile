# Use a Node.js image as a base
FROM node:lts-alpine AS build-stage

# Set work directory into the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install project dependancies
RUN npm install

# Copy the rest of the app files into the container 
COPY . .

# Compile Vue.js app
RUN npm run build

# Create a new lightweight image to serve the app
FROM nginx:alpine

# Copy NGINX configuration file
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy the compiled app files from the first container to the appropriate directory of the NGINX image
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Script to replace environment variables
COPY ./substitute_env_var.sh /docker-entrypoint.d/substitute_env_var.sh
RUN chmod +x /docker-entrypoint.d/substitute_env_var.sh

# Expoose port 80 so the app can be access from outside the container
EXPOSE 80

# Command to start NGINX and serve the app
CMD ["nginx", "-g", "daemon off;"]
