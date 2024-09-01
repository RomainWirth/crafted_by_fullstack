# DEPLOYMENT

## CONNEXION TO SERVER

Connexion to server :
```sh
romain@feitopor.net
user: <user>
password: <ask_for_password>
```

### MANUAL APPLICATION DEPLOYMENT

Requirements : 
* Install Docker
* Configure VPS
* Configure DNS records
* Configure reverse proxy Traefik
* Have a fullstack application that runs correctly locally

#### Deployment on production server

Server structure :
```
home
| /traefik
| | docker-compose.yml
| /nginx
| | docker-compose.yml
| /app
| | docker-compose.yml

```
We will retrieve the Docker images from our repository on our server :
```sh
docker image pull romsteak74/crafted_by_frontend:latest
docker image pull romsteak74/crafted_by_api:latest
docker pull postgres
```

We will then create a `docker-compose.yml` file in /home :<br>
NB: for 'db', put the same credentials as locally
```yml
version: '3.9'

services:
    # database service name
    db:
        container_name: db_crafted_by
        # postgres docker image 
        image: postgres:latest
        # tells Docker to always restart this container in case of an unexpected shutdown
        restart: always
        # set shared memory limit when using docker-compose
        shm_size: 128mb
        # set the necessary environment variables for the PostgreSQL container. including database name, username and password
        environment:
            POSTGRES_DB: db_crafted_by
            POSTGRES_USER: romainw
            POSTGRES_PASSWORD: R0main89labs!
        # data persistence volumes
        volumes:
            - pg-data:/var/lib/postgresql/data
        networks:
            - common_network

    # backend service name
    backend: 
        container_name: backend_crafted_by
        # docker image to use. image on dockerhub
        image: <username>/crafted_by_api:latest
        # tells Docker to always restart this container in case of an unexpected shutdown
        restart: always
        # traefik reverse proxy
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

    # frontend service name
    frontend:
        container_name: frontend_crafted_by
        # docker image to use. image on dockerhub
        image: <username>/crafted_by_frontend:latest
        # tells Docker to always restart this container in case of an unexpected shutdown
        restart: always
        # traefik reverse proxy
        labels:
            - "traefik.enable=true"

            - "traefik.http.routers.frontend.rule=Host(`feitopor.net`)"
            - "traefik.http.routers.frontend.entrypoints=https"
            - "traefik.http.routers.frontend.tls.certresolver=tls"

            - "traefik.http.services.frontend.loadbalancer.server.port=80"
        environment:
            # environement variable to use for front-end
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

Once this step done : 
```bash
docker compose up -d
```

Then, login to backend container : 
```bash
sudo docker exec -it <id_du_conteneur> sh
```
and execute following commands to migrate and seed database : 
```bash
php artisan migrate

php artisan db:seed
```

You can check that everything is working correclty by going to the app urls : 
- `https://dashboard.feitopor.net` 
- `https://nginx.feitopor.net` 
- `https://feitopor.net` 
- `https://backend.feitopor.net/api` 
