FROM node:11.13.0-alpine as build-stage
WORKDIR .
Copy . .

RUN npm install -g npm@latest
RUN npm install --silent --progress=false
RUN npm run build

FROM nginx:alpine
COPY --from=build-stage ./dist /usr/share/nginx/html
#COPY --from=build-stage ./index.html /usr/share/nginx/html/index.html
#COPY --from=build-stage ./js /usr/share/nginx/html/js
COPY --from=build-stage ./lightbox /usr/share/nginx/html/

