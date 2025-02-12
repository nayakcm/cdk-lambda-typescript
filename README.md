# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template


# AWS CDK Lambda with API Gateway

This project demonstrates how to create an AWS Lambda function triggered by an API Gateway using the AWS Cloud Development Kit (CDK) with TypeScript.

## Prerequisites

- Node.js (https://nodejs.org/)
- AWS CLI (https://aws.amazon.com/cli/)
- AWS CDK (https://aws.amazon.com/cdk/)

## Project Setup

### Step 1: Initialize CDK Project

```bash
cdk init app --language typescript

npm install @aws-cdk/aws-lambda @aws-cdk/aws-apigateway

```

create a lambda folder in root  and inside it create a handler.js file:

example code 

```bash
// lambda/handler.js
exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello from Lambda!',
      }),
    };
  };

  ```

  update the lib/cdk-lambda-typescript-stack.ts to define the Lambda function, API Gateway, and necessary permissions.

  Finally, deploy the CDK stack to your AWS environment.

  ```bash

# Synthesize the CloudFormation template
cdk synth

# Deploy the stack
cdk deploy

```

Once deployed, you will see the API Gateway endpoint URL in the terminal. It should look something like:

```bash
Outputs:
CdkLambdaTypescriptStack.MyApiUrl = https://<api-id>.execute-api.<region>.amazonaws.com/

verify the url using curl 

curl https://<api-id>.execute-api.<region>.amazonaws.com/

```