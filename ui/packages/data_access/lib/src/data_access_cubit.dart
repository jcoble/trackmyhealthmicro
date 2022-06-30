import 'dart:html';

import 'package:equatable/equatable.dart';
import 'package:json_annotation/json_annotation.dart';
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';
import 'package:servicestack/servicestack.dart';
import './data_access_state.dart';
import 'data_access_cubit.dart';
import 'package:servicestack/web_client.dart' if (dart.library.io) 'package:servicestack/client.dart';
import 'package:equatable/equatable.dart';

String apiUrl = 'https://localhost:5001/api';
var client = ClientFactory.create(apiUrl);

// in case of io.dart, we need to use the web client (JsonWebClient)
// otherwise we use the native client (JsonServiceClient)

// we are keeping track of api status of the whole app to know what state it is in
// eg. if we are init, if we are loading, if we are successful, if we are error
// if there is an error(s) and assign to ApiState.errorState, we can display the error message

class ApiCubit extends Cubit<ApiState> {
  ApiCubit() : super(ApiState(errorState: ErrorState())) {
    // TODO: implement
    throw UnimplementedError();
  }

  Future<void> get(String url, {Map<String, String>? query}) async {
    emit(ApiState(status: ApiStatus.loading));
    try {
      var response = await client.get(url, query: query);
      emit(ApiState(
        status: ApiStatus.success,
        response: response,
      ));
    } catch (e) {
      emit(ApiState(
        status: ApiStatus.error,
        errorState: ErrorState(
          message: e.toString(),
          errorCode: e.code,
          fieldName: e.fieldName,
          errors: e.errors,
        ),
      ));
    }
  }

  Future<void> post(String url, {Map<String, String>? query, Map<String, String>? body}) async {
    emit(ApiState(status: ApiStatus.loading));
    try {
      var response = await WebClient.post(url, query: query, body: body);
      emit(ApiState(
        status: ApiStatus.success,
        response: response,
      ));
    } catch (e) {
      emit(ApiState(
        status: ApiStatus.error,
        errorState: ErrorState(
          message: e.toString(),
          errorCode: e.code,
          fieldName: e.fieldName,
          errors: e.errors,
        ),
      ));
    }
  }
}





  // AuthenticateResponse response = await client.get(Authenticate());
  // if (response.sessionId != null) {
  //   print(response.sessionId);
  // }else {
  //   print('no sessionId');
  // }



//data_access_stateimport "swrv/dist/types";
// import useSWRV from "swrv"
// import { Ref } from "vue"
//
// import {
// appendQueryString,
// createErrorStatus,
// combinePaths,
// nameOf,
// IReturn,
// ApiResult,
// ApiRequest,
// IReturnVoid,
// MetadataTypes,
// EmptyResponse,
// ResponseError,
// ResponseStatus,
// JsonServiceClient,
// } from "@servicestack/client"





)
