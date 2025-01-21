# Stage 1: Build the application
FROM node:16 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN yarn build

# Stage 2: Serve the application using nginx
FROM nginx:alpine

# Set the working directory in nginx
WORKDIR /usr/share/nginx/html

# Copy the built application files
COPY --from=builder /app/.next /usr/share/nginx/html/
COPY --from=builder /app/public /usr/share/nginx/html/public

# Expose the default nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
