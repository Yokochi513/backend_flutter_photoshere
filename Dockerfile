FROM node:20-alpine

WORKDIR /app

# package.json だけ先にコピー
COPY package*.json ./

# devDepencies 含めてインストール
RUN npm ci

# ソースコードコピー
COPY . .

# ディレクトリ作成
RUN mkdir -p uploads

# 開発用ポート
EXPOSE 3000

# nodemon で起動
CMD ["npm", "run", "dev"]