Cross distro UI prototype
==========================
This is attempt to create OWA capable to use Angular 1.5 components and stylesheets provided by OpenMRS distribution, and fallback gracefully to own components if they are no available. `distro` submodule simulates content provided by supposed distribution, `owa` submodule is client Angular application. You can delete `distro` OWA from your server and see how app look changes!

Screenshots:
###Crossdistro OWA with distro
![crossdistro-distro](crossdistro-distro.png?raw=true)
###Crossdistro OWA without distro, using fallback
![crossdistro-fallback](crossdistro-fallback.png?raw=true)

###How does it work?
[openmrs-contrib-uicommons](https://github.com/PawelGutkowski/openmrs-contrib-uicommons) loads `'openmrs-contrib-uicommons-customized'` Angular module if it is available. To override module, distribution bundle has to override submodule and component, eg:
```js
let distroModule = angular.module('openmrs-contrib-uicommons.header', []).component('openmrsHeader', distroHeaderComponent);
```
to override `<openmrs-header>` component. 

Only OWA's concern is to ensure that its scripts are injected in HTML's head, and add distro's custom components bundle to html's body:

```html
<!--last stylesheets have the highest precedence, effectively distribution can take over app styling -->
<link rel="stylesheet" type="text/css" href="/owa/uicommons-customized/uicommons.css"/>

<!--As with stylesheets, angular modules from distro bundle override app submodules-->
<script src="/owa/uicommons-customized/uicommons.js" type="text/javascript"></script>
```

##How to run
To run this module Java and Maven are required. Proposed workflow requires openmrs-sdk as well, but it can be worked around.
* Clone repo with `git clone https://github.com/PawelGutkowski/openmrs-module-crossdistro`
* Build this project with `mvn clean install`, it can take a while because npm packages are downloaded and OWAs are built
* Setup server instance: run `mvn openmrs-sdk:setup` from project's main directory and choose 1st option: `Crossdistro UI Development 1.0 from current directory`
* Run your server with `mvn openmrs-sdk:run`
* Go to `localhost:8080/openmrs/owa/crossdistro/index.html#/` to see cross distro app
