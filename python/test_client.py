from concurrent import futures
import logging
import math
import time

import grpc
from proto import test_pb2, test_pb2_grpc


def run():
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    with grpc.insecure_channel("localhost:50051") as channel:
        stub = test_pb2_grpc.TestServiceStub(channel)
        resp = stub.test_rpc(test_pb2.TestRequest(input="hi"))
        print(resp)


if __name__ == "__main__":
    logging.basicConfig()
    run()
