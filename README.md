[![TravisCIBadge](https://travis-ci.org/research-software-directory/admin.svg?branch=master)](https://travis-ci.org/research-software-directory/admin)
[![Docker badge](https://dockerbuildbadges.quelltext.eu/status.svg?organization=rsdnlesc&repository=admin)](https://hub.docker.com/r/rsdnlesc/admin/)
[![Greenkeeper badge](https://badges.greenkeeper.io/research-software-directory/admin.svg)](https://greenkeeper.io/)

The is the admin user interface for the Research Software Directory.
It can be used to add and update software items to the directory.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) using scripts package [@nlesc/react-scripts](https://github.com/NLeSC/create-react-app). Original documentation [here](https://github.com/NLeSC/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Dependencies

* Auth service e.g. [github-auth](https://github.com/research-software-directory/auth-github).
* Data api service like [rsd-backend](https://github.com/research-software-directory/backend).

# Installation

1.  Clone repository
2.  Use node version `^8.0`, eg using [nvm](#install-node-using-nvm)
3.  Install dependencies: `npm install`
4.  Run tests `npm run test`
5.  Start app in dev server: `npm start`

## Install node using NVM

See https://github.com/creationix/nvm#install-script

1.  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
2.  restart terminal
3.  run `nvm install 8`

## Settings

Run-time settings should be reachable through `[BASE_URL]/settings.json`, see e.g. `public/settings.json`.
This settings file should be overriden in production.

# Build

To build the app for production run:

```bash
npm run build
```

The app is build in the `build/` directory.

# Docker

Build with

```bash
docker build -t rsd/admin .
```

The Docker image should not be used directly and alone as the code expects the [backend server](https://github.com/research-software-directory/backend) to be running at `/api` and the [auth server](https://github.com/research-software-directory/auth-github) to be running at `/auth` which are not part of the image.
The image should be used as part of a Docker compose see https://github.com/research-software-directory/stack
