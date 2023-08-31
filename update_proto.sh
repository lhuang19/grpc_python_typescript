#!/bin/bash

cd python
source $(poetry env info --path)/bin/activate
python -m grpc_tools.protoc -I../proto --python_out=. --pyi_out=. --grpc_python_out=. ../proto/test.proto
deactivate
cd ..

cd typescript
yarn run proto-gen-js
yarn run proto-gen-ts
cd ..
