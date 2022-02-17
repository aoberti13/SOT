import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'oberti-sqs-example',
  frameworkVersion: '2',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    lambdaHashingVersion: '20201221',
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: ['sqs:SendMessage'],
            Resource: {
              'Fn::GetAtt': ['receiverQueueOberti', 'Arn']
            },
          },
        ],
      },
    },
  },
  // import the function via paths
  functions: {
    sender: {
      handler: 'src/lambdas/sender/index.handler',
      events: [
        {
          http: {
            method: 'post',
            path: 'sender'
          },
        },
      ],
    },
    receiver: {
      handler: 'src/lambdas/receiver/index.handler',
      events: [
        {
          sqs: {
            arn: {
              'Fn::GetAtt': ['receiverQueueOberti', 'Arn'],
            },
            batchSize: 10,
          },
        },
      ],
    },
  },
  resources: {
    Resources: {
      receiverQueueOberti: {
        Type: 'AWS::SQS::Queue',
        Properties: {
          QueueName: 'receiverQueueOberti'
        },
      },
    },
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
