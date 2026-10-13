# Build stage
FROM node:22-alpine AS build
WORKDIR /app

# Pin pnpm to the version that generated the lockfile
RUN corepack enable && corepack prepare pnpm@9.15.9 --activate

COPY package.json pnpm-lock.yaml ./
# Coolify may inject NODE_ENV=production at build time; devDependencies are still needed to build
RUN pnpm install --frozen-lockfile --prod=false

COPY . .

# PUBLIC_* variables are inlined by Astro at build time
ARG PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
RUN pnpm build

# Drop devDependencies before copying node_modules to the runtime stage
RUN pnpm prune --prod

# Runtime stage
FROM node:22-alpine
WORKDIR /app

ENV HOST=0.0.0.0 PORT=4321 NODE_ENV=production

COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 4321
CMD ["node", "dist/server/entry.mjs"]
