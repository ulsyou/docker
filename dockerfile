FROM node:18.20.4-alpine

# Create app directory
RUN mkdir -p /usr/src/app

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]