FROM node:alpine as deps
WORKDIR /usr/app
RUN npm install --global pm2
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile


FROM deps as builder
WORKDIR /usr/app
COPY ./ ./
ENV NODE_ENV=production
COPY --from=deps /usr/app/node_modules ./node_modules
RUN rm -rf build
RUN yarn build


FROM builder as runner
WORKDIR /usr/app
ENV NODE_ENV=production
COPY --from=builder /usr/app/build ./build
USER node
EXPOSE 3001
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]