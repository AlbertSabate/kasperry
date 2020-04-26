ARG GATSBY_ACTIVE_ENV=production
ARG TZ=Asia/Singapore

FROM ubuntu:focal AS build

ARG GATSBY_ACTIVE_ENV
ARG TZ

ENV DEBIAN_FRONTEND=noninteractive
ENV GATSBY_ACTIVE_ENV=$GATSBY_ACTIVE_ENV
ENV TZ=$TZ

RUN apt-get update
RUN apt-get install -y curl build-essential autoconf libvips libvips-dev libvips-tools glib2.0-dev

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

WORKDIR /app
ADD . ./
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build /app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80