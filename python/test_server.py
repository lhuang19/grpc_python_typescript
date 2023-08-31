from concurrent import futures
import logging
import math
import time

import grpc
import test_pb2
import test_pb2_grpc


class TestServicer(test_pb2_grpc.TestServiceServicer):

    def test_rpc(self, request, context):
        print(request)
        print(request.input)
        return test_pb2.TestResponse(output=request.input + " bye")


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    test_pb2_grpc.add_TestServiceServicer_to_server(TestServicer(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    logging.basicConfig()
    serve()
