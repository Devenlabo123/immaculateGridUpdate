// Import required AWS SDK clients and commands for Node.js.
import { InvokeCommand } from "@aws-sdk/client-lambda";
import { lambdaClient } from "./lambdaClient";

export const myFunction = async () => {
    console.log("Sending");
    const id = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
    const params = {
        FunctionName: "googleSheetUpdated",
        Payload: JSON.stringify({
            Item: {
                Id: id,
            },
            TableName: "lambda-for-browser",
        }),
    };
    try {
        console.log("Sending");
        const data = await lambdaClient.send(new InvokeCommand(params));
        alert("Success. Data added to table.");
        console.log("Success, payload", data);
    } catch (err) {
        alert("Oops an error occurred.");
        console.log("Error", err);
    }
};

// // Make the function available to the browser window.
// window.myFunction = myFunction;
