# Use official Node 18 base image
FROM node:18.20.3-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and yarn.lock (instead of package-lock.json)
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the application port (default for Next.js is 3000)
EXPOSE 3000

# Run the Next.js production server
CMD ["yarn", "start"]