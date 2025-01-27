# Build Stage
FROM node:20.5.1 as base
WORKDIR /app
  RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./

RUN pnpm install



COPY . .
RUN pnpm build

FROM node:20.5.1 AS release
WORKDIR /app
RUN npm i -g pnpm
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/public/. ./public/
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next
ENV NODE_ENV=production

EXPOSE 3000
CMD ["pnpm", "start"]
