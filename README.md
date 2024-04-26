# MISE EN PRODUCTION

## CONNEXION AU SERVEUR

Serveur de connexion :
```sh
romain@feitopor.net
user: <user>
password: <ask_for_password>
```

### DEPLOIEMENT MANUEL DE L'APPLICATION

Pré-requis : 
* Installer Docker
* Paramétrer le VPS
* Paramétrer les records DNS
* Paramétrer le reverse proxy Traefik
* Avoir une application fullstack qui tourne correctement en local

#### Déploiement sur le serveur de production

Structure du serveur :
```
home
| /traefik
| | docker-compose.yml
| /nginx
| | docker-compose.yml
| /app
| | docker-compose.yml

```
On va récupérer les images Docker depuis notre repository sur notre serveur :
```sh
docker image pull romsteak74/crafted_by_frontend:latest
docker image pull romsteak74/crafted_by_api:latest
docker pull postgres
```

On va ensuite créer un fichier `docker-compose.yml` dans `/home :<br>
N.B. : pour "db", bien mettre les même credentials qu'en local
```yml
version: '3.9'

services:
    # nom du service de la base de données
    db:
        container_name: db_crafted_by
        # image docker de postgres
        image: postgres:latest
        restart: always
        # set shared memory limit when using docker-compose
        shm_size: 128mb
        environment:
            POSTGRES_DB: db_crafted_by
            POSTGRES_USER: romainw
            POSTGRES_PASSWORD: R0main89labs!
        # volumes de persistance des données
        volumes:
            - pg-data:/var/lib/postgresql/data
        networks:
            - common_network

    # nom du service backend
    backend:
        container_name: backend_crafted_by
        image: <username>/crafted_by_api:latest
        restart: always
        labels:
            - "traefik.enable=true"

            - "traefik.http.routers.backend.rule=Host(`backend.feitopor.net`)"
            - "traefik.http.routers.backend.entrypoints=https"
            - "traefik.http.routers.backend.tls.certresolver=tls"

            - "traefik.http.services.backend.loadbalancer.server.port=80"
        depends_on:
            - db
        environment:
            DB_HOST: db
        networks:
            - common_network
            - traefik-public

    # nom du service frontend
    frontend:
        container_name: frontend_crafted_by
        image: <username>/crafted_by_frontend:latest
        restart: always
        labels:
            - "traefik.enable=true"

            - "traefik.http.routers.frontend.rule=Host(`feitopor.net`)"
            - "traefik.http.routers.frontend.entrypoints=https"
            - "traefik.http.routers.frontend.tls.certresolver=tls"

            - "traefik.http.services.frontend.loadbalancer.server.port=80"
        environment:
            - VITE_BASE_API_URL=https://backend.feitopor.net/api
        depends_on:
            - backend
        networks:
            - common_network
            - traefik-public

networks:
    common_network:
    traefik-public:
        external: true

volumes:
    pg-data: {}

```

Une fois cette étape réalisée : 
```bash
docker compose up -d
```

Ensuite, se logger dans le conteneur du backend : 
```bash
sudo docker exec -it <id_du_conteneur> sh
```
et exécuter les commandes pour migrer et seeder la bdd :
```bash
php artisan migrate

php artisan db:seed
```

On peut controller que tout fonctionne correctement en se rendant sur les url de l'app :
- `https://dashboard.feitopor.net` 
- `https://nginx.feitopor.net` 
- `https://feitopor.net` 
- `https://backend.feitopor.net/api` 
