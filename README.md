# IsMapAngularLibApp

<p align="left">
  <a href="https://nodejs.org/en/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-%3E%3D%2020.9.0-green" alt="Node Version" />
  </a>
  <a href="https://angular.io/" target="_blank">
    <img src="https://img.shields.io/badge/Angular-v17.3-ff0000" alt="Angular Version" />
  </a>
  <a href="https://github.com/angular/angular-cli" target="_blank">
    <img src="https://img.shields.io/badge/Angular CLI-v17.3-red" alt="CLI Version" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-v5.4-3178c6" alt="TypeScript Version" />
  </a>
</p></br>

## Development Server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

## Installation and Usage

### Building the Library

To build the library, use the following command:

```sh
npm run package
```

This command executes the following steps:

1. ng build ng-packagr -p projects/is-map-angular/ng-package.json

2. npm pack – Creates a .tgz package from the build output located in dist/is-map-angular/.

### Installing the Library in Your Project

After building the library, you can install it in another Angular project using:

```sh
npm run install_isangular
```

This command executes:

```sh
npm install --no-save ../../../is-map-angular/dist/is-map-angular/is-map-angular-17.0.0.tgz
```

This will allow you to import and use it within your Angular application.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## License

This library is licensed under the **GNU Lesser General Public License v3 (LGPL-3.0)**, as published by the **Free Software Foundation**. You are free to use, modify, and redistribute this library under the terms of the LGPL-3.0 license, either version 3 of the License, or (at your option) any later version.

## Contact

INSER SA
🔗 **Website**: [www.inser.ch](https://www.inser.ch)
📍 **Address**: INSER SA, Chem. de Maillefer 36, 1052 Le Mont-sur-Lausanne, Vaud, Switzerland

## Contributing

Contributions are welcome! Please submit pull requests with:

- Clear descriptions
- Unit tests
- Documentation updates
