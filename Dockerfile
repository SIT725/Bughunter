FROM node:alpine

# Sets the working directory
WORKDIR /app

# Copy and install the dependecies
COPY package*.json ./
RUN npm install

# Copy application files on the working directory
COPY . .

# Expose port
EXPOSE 3000

CMD ["npm", "start"]