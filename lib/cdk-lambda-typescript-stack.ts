import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkLambdaTypescriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define the Lambda function
    const myLambda = new lambda.Function(this, 'CmLambdaFunction1', {
      functionName: 'CmLambda1',
       runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')), // Path to your Lambda function code
      handler: 'handler.handler' // Name of the handler function
    });

   // Define the API Gateway
    const api = new apigateway.RestApi(this, 'CmCdkApi1', {
      restApiName: 'My API Service',
      description: 'This service serves a Lambda function.'
   });  

   // Define a resource and method to trigger the Lambda
   const lambdaIntegration = new apigateway.LambdaIntegration(myLambda)

   api.root.addMethod('GET',lambdaIntegration)
  }
}
