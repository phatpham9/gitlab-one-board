FROM node:9-alpine

ADD client/ /app/client/
ADD server/ /app/server/
ADD package.json /app/package.json

WORKDIR /app

RUN ["yarn", "install"]
RUN ["yarn", "build"]

ENV HOST 0.0.0.0
ENV PORT 80

CMD ["yarn", "serve"]
