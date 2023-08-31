// package: generic
// file: test.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TestRequest extends jspb.Message { 
    getInput(): string;
    setInput(value: string): TestRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TestRequest): TestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestRequest;
    static deserializeBinaryFromReader(message: TestRequest, reader: jspb.BinaryReader): TestRequest;
}

export namespace TestRequest {
    export type AsObject = {
        input: string,
    }
}

export class TestResponse extends jspb.Message { 
    getOutput(): string;
    setOutput(value: string): TestResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TestResponse): TestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestResponse;
    static deserializeBinaryFromReader(message: TestResponse, reader: jspb.BinaryReader): TestResponse;
}

export namespace TestResponse {
    export type AsObject = {
        output: string,
    }
}
