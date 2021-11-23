import { APIGatewayProxyResult } from "aws-lambda";
import { S3 } from 'aws-sdk';

export const handler = async (event): Promise<APIGatewayProxyResult> => {
    const { fileName } = event.queryStringParameters;
    if (!fileName) {
        return ({
            headers: {
                'Content-type': 'application/json',
            },
            statusCode: 400,
            body: JSON.stringify({ msg: 'missing filename' }),
        });
    };
    const s3 = new S3();
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName
    };
    const data = await s3.getObject(params).promise();

    return ({
        headers: {
            'Content-type': 'image/jpeg',
        },
        statusCode: 200,
        body: data.Body.toString('base64'),
        isBase64Encoded: true
    });
};