# DISCORD SIMPLIFIED DEMO

This project uses the following technologies :

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Vercel](https://vercel.com/) for deployment

## Functionalities

This is a simple webapp that mimic Discord application interface. It is able to :

- display servers and channels list
- let the user write and send messages on displayed channel
- access a specific channel from URL

There is no backend, datas are fetched from a local JSON file on startup.

## Live demo

You can test the webapp [here](https://discord.vthomas.fr/).

## How to test the app on a local computer

First, it is necessary to have [NodeJS](https://nodejs.org) installed.

Once this is done, clone this project and run the development server:

```bash
yarn install
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to start using it.

## License

Licensed under the MIT license.
