# Kasperry π

Build a production-ready home cluster with Raspberry PI.

All tutorial free of use :D


## Develop

```shell
npm install
npx run develop
```


## Build

```shell
npm install
npm run build
docker build -t kasperry .
docker run --rm -p 80:80 kasperry
```

Now, open your browser and check what's going on in your http://localhost!


## Deploy with Helm

```shell
# Is recommended to review values.yaml to set accordingly.
# kubectl & helm must be installed and configured.
helm upgrade --install --namespace=default kasperry ./helm
```

Example how to expose the service using Traefik -> IngressRoute.
```yaml
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: kasperry
  namespace: default
spec:
  entryPoints:
    - web # This should match with Traefik endpoint.
  routes:
    - match: "Host(`example.com`) || Host(`www.example.com`)" # DNS Server should be updated accorindgly
      kind: Rule
      services:
        - name: kasperry # use `kubectl get svc` to know the name of the service
          port: 80
```

Command to apply this yaml: `kubectl apply -f-`.

## Third party software

This project is build using Gatsby.
