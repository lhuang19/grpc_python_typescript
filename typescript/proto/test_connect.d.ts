// @generated by protoc-gen-connect-es v0.13.0
// @generated from file proto/test.proto (package generic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { TestRequest, TestResponse } from "./test_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service generic.TestService
 */
export declare const TestService: {
  readonly typeName: "generic.TestService",
  readonly methods: {
    /**
     * @generated from rpc generic.TestService.test_rpc
     */
    readonly test_rpc: {
      readonly name: "test_rpc",
      readonly I: typeof TestRequest,
      readonly O: typeof TestResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

