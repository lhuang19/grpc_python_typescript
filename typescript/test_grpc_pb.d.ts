// package: generic
// file: test.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as test_pb from "./test_pb";

interface ITestServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    test_rpc: ITestServiceService_Itest_rpc;
}

interface ITestServiceService_Itest_rpc extends grpc.MethodDefinition<test_pb.TestRequest, test_pb.TestResponse> {
    path: "/generic.TestService/test_rpc";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<test_pb.TestRequest>;
    requestDeserialize: grpc.deserialize<test_pb.TestRequest>;
    responseSerialize: grpc.serialize<test_pb.TestResponse>;
    responseDeserialize: grpc.deserialize<test_pb.TestResponse>;
}

export const TestServiceService: ITestServiceService;

export interface ITestServiceServer extends grpc.UntypedServiceImplementation {
    test_rpc: grpc.handleUnaryCall<test_pb.TestRequest, test_pb.TestResponse>;
}

export interface ITestServiceClient {
    test_rpc(request: test_pb.TestRequest, callback: (error: grpc.ServiceError | null, response: test_pb.TestResponse) => void): grpc.ClientUnaryCall;
    test_rpc(request: test_pb.TestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.TestResponse) => void): grpc.ClientUnaryCall;
    test_rpc(request: test_pb.TestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.TestResponse) => void): grpc.ClientUnaryCall;
}

export class TestServiceClient extends grpc.Client implements ITestServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public test_rpc(request: test_pb.TestRequest, callback: (error: grpc.ServiceError | null, response: test_pb.TestResponse) => void): grpc.ClientUnaryCall;
    public test_rpc(request: test_pb.TestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: test_pb.TestResponse) => void): grpc.ClientUnaryCall;
    public test_rpc(request: test_pb.TestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: test_pb.TestResponse) => void): grpc.ClientUnaryCall;
}
