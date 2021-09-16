FROM node:14.11.0

# RUN apk add dumb-init

ENV APP_ROOT /usr/src/app

ARG NODE_ENV production

WORKDIR ${APP_ROOT}
COPY --chown=node:node . .
ADD . ${APP_ROOT}

COPY package.json ${APP_ROOT}
COPY package-lock.json ${APP_ROOT}

RUN npm install

COPY . .

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 8080

EXPOSE $NUXT_PORT

RUN npm ci --only=production
USER node
RUN npm run build

CMD [ "npm", "run", "start" ]
