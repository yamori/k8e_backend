# K8E Collab Backend

All resources are defined in `index.js`, and json files (meant for public accessibility) are in `/public` (though they are not presented publicly directly, e.g. `express.static`).

`npm start`

Developed with:

```
k8e_bend]$ npm --version
8.11.0
k8e_bend]$ node --version
v16.15.1
```

## Production

Use `npm install --production` to minimize the build (exclude `devDependencies`).

## Health check

`/health`, returns `HTTP200` and minimal content