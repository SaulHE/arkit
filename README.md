<p align="center">
  <img src="https://arkit.js.org/arkit.svg" alt="arkit" valign="top" /> <code>🇸🇪arkitektur</code>
</p>
<p align="center">
  <a href="https://www.npmjs.com/arkit"><img src="https://img.shields.io/npm/v/arkit.svg?label=%20&style=flat-square" alt="Arkit NPM package" /></a>
  <a href="https://www.npmjs.com/arkit"><img src="https://img.shields.io/npm/dw/arkit.svg?style=flat-square" alt="Download arkit" /></a>
  <a href="https://travis-ci.org/dyatko/arkit"><img src="https://img.shields.io/travis/dyatko/arkit.svg?style=flat-square" alt="Build status" /></a>
  <a href="https://codeclimate.com/github/dyatko/arkit/code"><img src="https://img.shields.io/codeclimate/coverage/dyatko/arkit.svg?style=flat-square" alt="Test coverage" /></a>
  <a href="https://codeclimate.com/github/dyatko/arkit/issues"><img src="https://img.shields.io/codeclimate/tech-debt/dyatko/arkit.svg?style=flat-square" alt="Technical debt" /></a>
  <img src="https://img.shields.io/npm/types/arkit.svg?style=flat-square" alt="Typescript definitions" />
</p>

# Visualises JavaScript, TypeScript and Flow codebases as meaningful and committable architecture diagrams

- Supports JavaScript, Node.js, TypeScript and Flow code
- Identifies, connects and groups configured architectural components
- Visualises all components or some segments of the architecture
- Exports codebase visualisation as SVG, PNG or Plant UML diagram
- Integrates into development flow, so your CI, VCS, README and PRs are happy

## Usage

```sh
# Run arkit straight away
npx arkit

# Or add it to your project as a dev dependency
npm install arkit --save-dev
yarn add arkit --dev
```

```sh
# Run arkit against your source folder and save result as SVG
npx arkit src/ -o arkit.svg

# You can also specify source files to start from and output format
npx arkit -f src/main.js -o puml

# And get some more with debugging and file exclusions
LEVEL=info npx arkit -o puml -e "node_modules/,test,dist,coverage"
```

If your project is huge and first diagrams look messy, it's better to generate them per feature, architectural layer, etc.

Once you satisfied with results, add arkit command to your build script, so it will keep your architecture diagrams up-to-date.

## Configuration

Arkit can be configured using basic CLI arguments or advanced JSON, JS module or package.json configuration.

#### Basic CLI arguments

```console
user@machine:~$ npx arkit --help
arkit [directory]

Options:
  -o, --output     Output type or file path to save
  -f, --first      File patterns to start with                          [string]
  -e, --exclude    File patterns to exclude
        [default: "test,tests,dist,coverage,**/*.test.*,**/*.spec.*,**/*.min.*"]
  -d, --directory  Working directory                              [default: "."]
  -h, --help       Show help                                           [boolean]
  -v, --version    Show version number                                 [boolean]
```

#### Advanced arkit.json with JSON schema

```json
{
  "$schema": "https://arkit.js.org/schema.json",
  "components": [
    {
      "type": "Component",
      "patterns": ["**/*.ts", "**/*.tsx"]
    },
    {
      "type": "Dependency",
      "patterns": ["node_modules/*"]
    }
  ],
  "excludePatterns": ["test/**", "tests/**", "**/*.test.*", "**/*.spec.*"],
  "output": [
    {
      "path": "arkit.svg",
      "groups": [
        {
          "components": ["Component"]
        },
        {
          "type": "Dependencies",
          "components": ["Dependency"]
        }
      ]
    }
  ]
}
```

**See more possible JSON configuration options in the examples below**

## Real-world examples

#### [Express.js](https://github.com/dyatko/arkit/tree/master/test/express) using `npx arkit`
![Express architecture diagram](https://arkit.js.org/test/express/express.svg)

#### [Arkit itself](https://github.com/dyatko/arkit/tree/master/src) using `npx arkit -o dist/arkit.png -f src/arkit.ts`
![Arkit architecture diagram](https://arkit.js.org/dist/arkit.png)

#### [ReactDOM](https://github.com/dyatko/arkit/tree/master/test/react-dom) using `npx arkit` and [JSON config](test/react-dom/arkit.json)
![ReactDOM architecture diagram](https://arkit.js.org/test/react-dom/arkit.svg)

## Contribution

The tool is under active development, so please feel free to contribute with suggestions and pull requests. Your feedback is priceless.

<h4 align="center">Fun stats, stargazers map</h4>

<p align="center">
    <img src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRISFoOgWs4rihpPl2aWnQsqpMprhJIZnq7hulWWqMXPNqWodMkOWs_kImI2BLGdKZcXuiYYlP1Jj5T/pubchart?oid=1029094759&format=image" alt="GitHub stargazer map" height="320" /><br />
    <a href="https://github.com/dyatko/arkit">Give a Github star</a> to get on the map.
</p>
