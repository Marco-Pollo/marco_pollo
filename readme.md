<div align="center">
    <h1>MarcoPollo</h1>
    <p>MarcoPollo</p>
    <a href="https://github.com/TobitSoftware/chayns-toolkit">
        <img 
            alt="Managed with chayns-toolkit" 
            src="https://img.shields.io/badge/managed%20with-chayns--toolkit-%23000?style=for-the-badge"
        />
    </a>
</div>

## Get Started

To get started with working on the project first you have to install its dependencies:

```bash
npm install
# or
npm run install:all
```

Then you will have the following commands available:

`npm run dev` - This starts the project with a local server for development
on [`https://localhost:8080/`](http://localhost:8080/).

`npm run build` - This builds your project for production.

`npm run build:analyze` - Runs a build with the BundleAnalyzerPlugin to analyze the bundle size.

`npm run build:debug` - Builds a QA version of your project to `tappqa\www\tappqa.tobit.com\MarcoPollo\Web.Debug\`.

`npm run version:increment` - This increments the version of your project by 0.0.1 and commits the new version to your
current git branch.

`npm run lint` - Checks your project for errors and code quality.

`npm run format` - Automatically formats all the source code in your project.

---

This project is based on [`chayns-toolkit`](https://github.com/TobitSoftware/chayns-toolkit). If you encounter any
issues with the toolchain and the commands, please
[open an issue](https://github.com/TobitSoftware/chayns-toolkit/issues/new).

This project uses `chayns-helper`, a package of helpers. If you have any questions regarding a helper,
wish to report a bug or request a feature, please
[open an issue](https://github.com/chincoe/chayns-helper/issues/new). You can look up the source code and a
documentation **[here](https://github.com/chincoe/chayns-helper)**.

[1]: https://chayns.net
