FROM node:16-alpine
# COPY . ./first-dockerizeProject
# WORKDIR ./first-dockerizeProject
WORKDIR ./first-dockerizeProject
COPY . .
RUN npm install
EXPOSE 4000
CMD [ "npm","run","dev" ]

