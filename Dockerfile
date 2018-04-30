FROM node:8.11.1

RUN mkdir /app

WORKDIR /app

COPY package.json tsconfig.json tslint.json /app/
COPY src /app/src/
COPY public /app/public/

RUN yarn
RUN yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html
VOLUME /usr/share/nginx/html
