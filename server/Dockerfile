FROM node:18-alpine

WORKDIR /var/www/html

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]