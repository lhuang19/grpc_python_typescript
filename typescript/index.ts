import express from 'express';
import cors from 'cors';


import * as grpc from "@grpc/grpc-js";
import * as test_pb from "./test_pb"
import * as test_grpc_pb from "./test_grpc_pb"


var client = new test_grpc_pb.TestServiceClient('localhost:50051',
    grpc.credentials.createInsecure());

const app = express();

app.use(express.json());
app.use(cors());


app.get('/hello', async (req, res) => res.json({ message: 'hello' }));


// Somehow this doesnt work.
// TypeError: Cannot read properties of undefined (reading 'checkOptionalUnaryResponseArguments')

// function callRpc<T>(
//     rpc: (param: any, callback: (err: grpc.ServiceError | null, data: T) => void) => grpc.ClientUnaryCall,
//     param: any
// ): Promise<T> {
//     return new Promise<T>((resolve, reject) => {
//         rpc(param, (err: grpc.ServiceError | null, data: T) => {
//             if (err !== null) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }

app.get('/rpc1', async (req, res) => {
    var testRequest = new test_pb.TestRequest();
    testRequest.setInput("hi");
    client.test_rpc(testRequest,
        (err: grpc.ServiceError | null, data: test_pb.TestResponse) => {
            if (err !== null) {
                res.json({ error: err.toString() });
            } else {
                res.json({ message: data.getOutput() });
            }
        }

    )
});


app.get('/rpc2', async (req, res) => {
    var testRequest = new test_pb.TestRequest();
    testRequest.setInput("hi");
    let rpc_req = new Promise<test_pb.TestResponse>((resolve, reject) => {
        client.test_rpc(testRequest,
            (err: grpc.ServiceError | null, data: test_pb.TestResponse) => {
                if (err !== null) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }

        )
    });
    rpc_req.then(result => {
        console.log(result);
        res.json({ message: result.getOutput() });
    }).catch(err => {
        console.log(err)
    })

});


const port = process.env.PORT || '8080';
app.listen(port, () => console.log('Listening on port ', port));
