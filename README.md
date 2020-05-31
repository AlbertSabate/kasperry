# Kasperry π

Build your production ready home cluster with raspberry pi.

All tutorial free of use :D


## Develop

```
npm install
npx run develop
```


## Build

```
npm install
npm run build
docker build -t kasperry .
docker run --rm -p 80:80 kasperry
```

Now, open your browser and check what's going on in your http://localhost!

## Third party software

This project is build using Gatsby.
