# GraphQL Typescript (AWS Lambda)

This project was created to run GraphQL on a serverless framework using [AWS Lambda](https://aws.amazon.com/lambda/).

## Application Business logic

This app has a single GraphQL query (serverTime) which returns server time in long format.

## Project structure
| Folder Path | Description |
| ------------- | ------------- |
| dist/ | Build folder |
| src/type.ts | GraphQL type definition |
| src/resolver.ts | GraphQL resolver definition |
| src/schema.ts | GraphQL schema definition |
| src/index.ts | GraphQL config and Lambda function |
| package.json | Project dependencies |
| tsconfig.json | Production transpiling configuration |
| serverless.yml | Serveless configuration |

## To start server, follow these steps

### Step 1: Install NodeJS & NPM

[NodeJS & NPM](https://nodejs.org/en/download/)

### Step 2: Get project
Clone this repository and go to this project's root location

### Step 3: Add global dependencies

```bash
npm i -g serverless
```

### Step 4: Add local dependencies

```bash
npm i -D
```

### Step 5: Run in dev environment

```bash
npm run start:dev
```

### Step 6: Check API

```bash
Open browser and go to http://localhost:3000/playground
```

### Step 7: Configure AWS credentials

[Configuration guide](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Step 8: Build for production

```bash
npm run build
```

### Step 9: Deploy in AWS

```bash
npm run deploy
```

### Step 10: Check API in AWS

```bash
curl -X POST -H "Content-Type: application/json" -d "{ \"query\": \"{ serverTime }\" }" "GRAPHQL_FUNCTION_URL"
```