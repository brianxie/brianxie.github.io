## Initializing the repo

```
npm init
npm install next react react-dom
```

or

```
npx create-next-app
```

## Bootstrapping and upgrading

To populate a local copy of `node_modules/`:
```
npm install
```

To update (non-breaking) package dependencies:
```
npm update
```

To update package dependencies to their latest versions:
```
npm outdated
npm install [package-name]@latest
```

## Developing

```
npm run dev
```
and view on http://localhost:3000

## Exporting

Haha.

Switch to the `gh-pages` branch and bring in the source changes:
```
git checkout gh-pages
git checkout master -- .
```

Generate the static site contents:
```
npm run build
```
which are written to a new directory, `out/`.

Copy all of its contents to root, delete everything else except for `.nojekyll` (and `CNAME`, for custom domain), and push to `gh-pages`.
