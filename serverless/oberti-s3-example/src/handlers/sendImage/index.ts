import { APIGatewayProxyResult } from "aws-lambda";
import { S3 } from 'aws-sdk';

export const handler = async (event): Promise<APIGatewayProxyResult> => {
    const { fileName, contentType } = JSON.parse(event.body);

    if (!fileName || !contentType) {
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
        Key: fileName,
        ContentType: contentType,
    };

    const result = await s3.getSignedUrlPromise('putObject',params);

    return ({
        headers: {
            'Content-type': 'application/json',
        },
        statusCode: 200,
        body: JSON.stringify({ msg: 'hola', result }),
    });
};