FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install nodemon -g

RUN npm install express

# Agregar el directorio node_modules/.bin al PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install > install.log 2>&1

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

