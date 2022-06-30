import 'dart:convert';

import 'package:authentication_repository/authentication_repository.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_login/app.dart';
import 'package:flutter_login/types/dtos.dart'; // Add ServiceStack Reference DTOs
import 'package:servicestack/servicestack.dart';
import 'package:servicestack/web_client.dart' if (dart.library.io) 'package:servicestack/client.dart';
import 'package:user_repository/user_repository.dart';

IServiceClient? client;
AuthenticateResponse? auth;

Future<void> main() async {
  client = ClientFactory.createWith(ClientOptions(baseUrl: 'https://localhost:5001', ignoreCert: kDebugMode));
  runApp(App(
    authenticationRepository: AuthenticationRepository(),
    userRepository: UserRepository(),
  ));
  auth = (json != null ? AuthenticateResponse.fromJson(jsonDecode(json)) : null);
  ClientConfig.initClient = (client) {
    if (auth != null) {
      client.bearerToken = auth!.bearerToken;
      client.refreshToken = auth!.refreshToken;
    }
  };
}
