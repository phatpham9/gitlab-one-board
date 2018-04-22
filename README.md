# gitlab-one-board

One board for all GitLab's issues

[![Package Version](https://img.shields.io/github/package-json/v/phatpham9/gitlab-one-board.svg)]()
[![Travis](https://img.shields.io/travis/phatpham9/gitlab-one-board.svg)](https://travis-ci.org/phatpham9/gitlab-one-board)
[![David](https://img.shields.io/david/phatpham9/gitlab-one-board.svg)](https://github.com/phatpham9/gitlab-one-board)

## Usage

### Running on local

Make sure NodeJS >=9 and Yarn are installed on your machine

```bash
yarn install
yarn start
```

### Deploying to Heroku

Click the button below and enter your `GITLAB_DOMAIN` & `GITLAB_TOKEN` to deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Using Docker

Make sure Docker is installed on your machine run the following command:

```bash
docker pull phatpham9/gitlab-one-board
docker run -p 80:80 -e GITLAB_DOMAIN=[your-gitlab-domain] -e GITLAB_TOKEN=[your-gitlab-token] phatpham9/gitlab-one-board
```

## Author

- Chau Duong | [GitHub](https://github.com/chauduong1192)
- Khang Huynh | [GitHub](https://github.com/khanghuynh92)
- Phat Pham | [Website](https://onroads.xyz) | [GitHub](https://github.com/phatpham9)
