FROM node:latest
RUN mkdir -p /usr/src
WORKDIR /usr/src
RUN yarn add --save dockerfile_lint eslint prettier \
    typescript eslint-config-prettier eslint-plugin-prettier \
    eslint-plugin-vue @babel/core @babel/preset-env autoprefixer \
    jest babel-core babel-jest ts-jest ts-node @types/jest @types/node \
    @typescript-eslint/eslint-plugin @typescript-eslint/parser vue-eslint-parser \
    vue-tsc @types/webrtc @vue/cli-plugin-unit-jest @vue/test-utils @vue/vue3-jest
COPY . /usr/src