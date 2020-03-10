from node:alpine

# Dependencies
ADD package*.json ./
RUN npm install

# Code
ADD . .

# Reduce privilege and run
USER 1000
CMD node index.js
