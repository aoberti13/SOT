import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'oberti-s3-example',
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
      S3_BUCKET_NAME: '${self:custom.miBucketName}'
    },
    lambdaHashingVersion: '20201221',
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: ['s3:GetObject', 's3:PutObject'],
        Resource: 'arn:aws:s3:::${self:custom.miBucketName}/*',
      },
    ],
  },
  // import the function via paths
  functions: {
    getImage: {
      handler: 'src/handlers/getImage/index.handler',
      events: [
        {
          httpApi: {
            path: '/',
            method: 'GET'
          },
        },
      ],
    },
    sendImage: {
      handler: 'src/handlers/sendImage/index.handler',
      events: [
        {
          httpApi: {
            path: '/',
            method: 'POST'
          },
        },
      ],
    },
  },
  package: { individually: true },
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
    miBucketName: 'oberti-sot-example1',
  },
  resources: {
    Resources: {
      S3ExampleBucket: {
        Type: 'AWS::S3::Bucket',
        Properties: {
          BucketName: '${self:custom.miBucketName}'
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
