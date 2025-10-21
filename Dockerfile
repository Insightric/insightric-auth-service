### Stage 1: Dependencies
FROM node:20-bullseye AS deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN corepack enable && yarn install --frozen-lockfile

### Stage 2: Builder
FROM node:20-bullseye AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN yarn build

### Stage 3: Production
FROM node:20-bullseye-slim AS prod
WORKDIR /usr/src/app

ENV NODE_ENV=production
COPY package.json yarn.lock ./
RUN corepack enable && yarn install --production --frozen-lockfile

# Copy built files
COPY --from=builder /usr/src/app/dist ./dist

# Copy necessary config and .env if needed
# COPY .env ./.env

EXPOSE 3000
CMD ["node", "dist/main"]
