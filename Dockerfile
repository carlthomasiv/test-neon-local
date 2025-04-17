# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Expose the port your Express server runs on
EXPOSE 4173

# Command to run the app
CMD ["npm", "run", "dev"]