# CAW Scripts 🦜

`caw-scripts` is an attempt to bundle up everything in `crema-app-web` as a dependency to allow consumers to take easy advantage of updates as an npm package.

The exact method for setup is still a work in progress. Also, this first approach doesn't expose any additional dependencies to the consumer—e.g. react, react-dom, typescript—but we probably would. This is still an experiment. Feedback welcome!

## Local Development

### From caw-scripts directory

1. Build it: `npm start`
2. Pack it: `npm pack`
3. right-click and copy the absolute path to the `caw-scripts-0.1.0.tgz`

### From consumer directory

> Normally you could just link directories to test this out, but there seem to be limitations related to how this dependency will work. Maybe there's something that can be figured out.

1. Install it: `npm i PASTE_ABSOLUTE_PATH_TO_TGZ` 
2. From your project, run binary: `node node_modules/.bin/caw-scripts init`
3. Run `npm start` to confirm that the app works
4. You should be able to `npm run build | lint | test` as well