# Use official Node 18 base image
FROM node:18.20.3-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN next build

# Expose the application port (default for Next.js is 3000)
EXPOSE 3000

# Run the Next.js production server
CMD ["next", "run", "start"]