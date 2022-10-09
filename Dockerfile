FROM node:16-alpine
WORKDIR /app
COPY . package*.json ./
RUN npm install -g npm@8.19.2
RUN npm install
COPY . .
EXPOSE 3000
RUN npx prisma generate
RUN npx prisma migrate deploy
CMD ["npm", "run", "start:dev"]