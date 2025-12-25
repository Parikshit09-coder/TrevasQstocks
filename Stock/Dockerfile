FROM node:20-alpine as first

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-alpine as second
RUN npm install -g serve

COPY --from=first /app/dist ./dist
EXPOSE 80
CMD ["serve","-s","dist","-l","80"]
