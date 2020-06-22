FROM node:12
MAINTAINER mingyu knighp@gmail.com
 
RUN mkdir -p /app
WORKDIR /app
 
#서버 파일 복사
COPY package*.json  ./
 
RUN npm install

COPY . .

EXPOSE 80
 
ENV NODE_ENV=production
 
CMD ["node", "index.js"]
