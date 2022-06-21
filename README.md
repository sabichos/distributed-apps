# distributed-apps
A demonstration of how to create and configure distributed javascript applications  

** pre requests **
- please use node.js@^16 and npm@^8
- install [pnpm](https://pnpm.io/installation)


The examples are:

## plain
This folder demonstrate how to build a shell <-> module website with plain javascript without distributing them  
run it by using
```
pnpm serve
```

and go to `http://localhost:4510`


## custom-elements-platform
This folder uses `angular@14` and `@angular/elements` to export modules as custom elements.  
see how *platform* app exports only `phone-number` element and how *module* uses it.  
see also how *shell* website uses `new-card` element from *module*.  
build *module* and *platform* projects with
```
pnpm build:web-component
```
now run *test* folder
```
pnpm start
```
and run shell project with
```
pnpm start
```
and go to angular default dev url `http://localhost:4200`


## webpack-platform
You can see how webpack is configured here by inspecting `webpack.config.js`. both *wrapper* and *module* set the remote module url on init.  
note how proxy to each of the remote exports APIs is being defined in `webpack.config.js` so underlined API requests could reach the dev server.  
run each project with
```
pnpm dev
```

## esm-platform
There is no need for special handling of files there, *shell* imports `new-card` directly from *module* project.  
note how 3rd party packages are being imported from special CDNs and incorporated into the code.   
run all projects at once from the root folder with
```
pnpm serve
```

## next-platfrom
Next.js allows fetching modules from CDNs, see how they are being configured in `next.config.js` and used in `pages/index.js`

## mf-examples
These examples were taken from [module-federation-examples repo](https://github.com/module-federation/module-federation-examples)  
- *dynamic-system-host* shows how to dynamically load and use modules
- *inject-redux* shows how to inject a remote module's reducer into the host store
