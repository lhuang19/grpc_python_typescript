import express from 'express';
import cors from 'cors';

import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";

import { TestRequest, TestResponse } from "./proto/test_pb"
import { TestService } from "./proto/test_connect"

const client = createPromiseClient(
    TestService,
    createGrpcTransport({
        httpVersion: "2",
        baseUrl: "http://localhost:50051",
    })
);
const app = express();

app.use(express.json());
app.use(cors());


app.get('/hello', async (req, res) => res.json({ message: 'hello' }));



app.get('/rpc', async (req, res) => {
    const rpc_request = new TestRequest({ input: "hi" });
    const rpc_response = await client.test_rpc(rpc_request);

    res.json({ message: rpc_response.output });
});

const port = process.env.PORT || '8080';
app.listen(port, () => console.log('Listening on port ', port));
