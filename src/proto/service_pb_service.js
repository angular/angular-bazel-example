// package: com.google.startupos.tools.localserver.service
// file: src/proto/service.proto

var src_proto_service_pb = require('../../src/proto/service_pb');
var grpc = require('grpc-web-client').grpc;

var AuthService = (function() {
  function AuthService() {}
  AuthService.serviceName = 'com.google.startupos.tools.localserver.service.AuthService';
  return AuthService;
}());

AuthService.postAuthData = {
  methodName: 'postAuthData',
  service: AuthService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_service_pb.AuthDataRequest,
  responseType: src_proto_service_pb.AuthDataResponse
};

exports.AuthService = AuthService;

function AuthServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthServiceClient.prototype.postAuthData = function postAuthData(
    requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(AuthService.postAuthData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function(response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(
              Object.assign(
                  new Error(response.statusMessage),
                  {code: response.status, metadata: response.trailers}),
              null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.AuthServiceClient = AuthServiceClient;
