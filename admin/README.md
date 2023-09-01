# Production Server Template
## Featuring with Docker, Node, Express, MongoDB, Mongoose and NGINX

## License & Purpose

MIT License. You can fork and clone and take this apart without giving me any credit for anything.

## About

This configuration is a single page application mainly with the following technologies:

Back-end
- [Node.js](https://nodejs.org/en/) (Long-Term-Support Version) as the run-time environment to run JavaScript.
- [Express.js](https://expressjs.com/) as the server framework 
- [MongoDB](https://www.mongodb.com/) as the database layer
- [Mongoose](https://mongoosejs.com/) as the "ODM" / model layer
Front-end
- [React.js](https://reactjs.org/) as the client framework
- [Antd](https://ant.design/) as the UI library
- [Axios](https://axios-http.com/) as the promise based HTTP client
- [Webpack](https://webpack.js.org/) as the module bundler

Deploy
- [Docker](https://www.docker.com/) as the container service to isolate the environment.
- [NGINX](https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/) as a reverse proxy / content-caching layer

## How to Install & Run

You will need to first download and install [Docker] and [Docker-Compose]
# install docker
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    sudo usermod -aG docker ${USER}
    sudo reboot

# install docker-compose
    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose

# activate docker swarm
    [ip add <!-- get eth0 ip -->]
    docker swarm init --advertise-addr ${yourip}

# setup environment
add all required environment variables to .env file, add follow code to the bottom of .profile

    set -o allexport; source .env; set +o allexport;
    
# start running docker-compose for devlopment
    docker-compose -f docker-compose-dev.yml up -d --build
this option will start three containers:
    - MongoDB database container
    - Node.js app container
    - NGINX proxy container

# use docker swarm for production   
    docker stack deploy -c docker-compose-prod.yml myapp

this option will start six containers:
    - MongoDB database container
    - 4 Node.js app container
    - NGINX proxy container

## Client Structure

- webpack build react app
- ./client/index.html is the entrypoint 

## Server Structure

- express-generator created express app
- ./server/bin/www.js is the entrypoint 

## config

- NGINX proxy configuration

## mongoDB-file

- sample data and import script for mongoDB

# Troubleshooting
- any database issue need to be fixed, remember to delete docker volume (lesson of blood and tears)
