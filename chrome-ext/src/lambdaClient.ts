// snippet-start:[cross-service.lambda-from-browser.JavaScript.lambdaClient]
import { LambdaClient } from "@aws-sdk/client-lambda";


const region = 'us-east-1';
const accessKey = 'AKIAU3GREWZDSTJSWSAX';
const secretKey = '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';

const lambdaClient = new LambdaClient({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretKey
    },
    region: region
});


export { lambdaClient };
// snippet-end:[cross-service.lambda-from-browser.JavaScript.lambdaClient]