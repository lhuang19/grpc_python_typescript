# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: test.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\ntest.proto\x12\x07generic\"\x1c\n\x0bTestRequest\x12\r\n\x05input\x18\x01 \x01(\t\"\x1e\n\x0cTestResponse\x12\x0e\n\x06output\x18\x01 \x01(\t2H\n\x0bTestService\x12\x39\n\x08test_rpc\x12\x14.generic.TestRequest\x1a\x15.generic.TestResponse\"\x00\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'test_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _globals['_TESTREQUEST']._serialized_start=23
  _globals['_TESTREQUEST']._serialized_end=51
  _globals['_TESTRESPONSE']._serialized_start=53
  _globals['_TESTRESPONSE']._serialized_end=83
  _globals['_TESTSERVICE']._serialized_start=85
  _globals['_TESTSERVICE']._serialized_end=157
# @@protoc_insertion_point(module_scope)
