FROM node:14.17
# add local user for security if necessary
# RUN groupadd -r nodejs \
#   && useradd -m -r -g nodejs nodejs

# USER nodejs

RUN mkdir -p /home/nodejs/server
COPY ./server /home/nodejs/server
WORKDIR /home/nodejs/server
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --production; \
    fi
CMD ["npm", "run", "start"]