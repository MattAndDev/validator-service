# validator-service-poc

simple POC microservice to validate code on the fly

## Up and running

```bash
docker run -d -p 4242:4242 mattanddev/validator-service-poc
```

## Endpoints

`/code/validate/js`

Validates and transpiles provided `code`

Example request:

```
curl --location --request POST 'http://localhost:4242/code/validate/js' \
--header 'Content-Type: application/json' \
--data-raw '{
    "code": "() => { let test = 'world'\nconsole.log(`hello ${test}`)}"
}'
```

response:

```json
{
  "code": "\"use strict\";(function(){var test=world;console.log(\"hello \".concat(test));});",
  "error": false
}
```

## run locally

### requirements

node && npm

### commands

#### `npm start`

compiles and runs `./source` with node

#### `npm run dev`

compiles-watch `./source` in memory with [nodemon](https://www.npmjs.com/package/nodemon) and [ts-node](https://github.com/TypeStrong/ts-node)

#### `npm run test`

runs [jest](https://jestjs.io/) on `./source/**/*.test.ts`
