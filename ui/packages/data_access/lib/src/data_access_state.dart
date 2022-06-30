import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:json_annotation/json_annotation.dart';
import 'package:servicestack/servicestack.dart';

import 'data_access_cubit.dart';

import 'package:equatable/equatable.dart';

enum ApiStatus {
  initial,
  loading,
  success,
  error,
}

abstract class ApiCallEvent {}
class ApiGetEvent extends ApiCallEvent {
  final String url;
  final Map<String, String>? query;

  ApiGetEvent(this.url, {this.query});
}

class ApiPostEvent extends ApiCallEvent {
  final String url;
  final Map<String, String>? query;

  ApiPostEvent(this.url, {this.query});
}


 class ApiStateBloc extends Bloc<ApiCallEvent, ApiGetEvent> {
   ApiStatus status = ApiStatus.initial;
  ErrorState? errorState;
  dynamic response;
  @override
  List<Object> get props => [status, {errorState}, response ];
}

// class ApiState extends Equatable {
//   final ApiStatus status;
//   final ErrorState? errorState;
//   final dynamic response;
//
//    ApiState({
//     this.status = ApiStatus.initial,
//     this.errorState,
//     this.response,
//   });

  @override
  List<Object> get props => [status, errorState, response];
}

class ErrorState {
  String message?,
  String errorCode?,
  String fieldName?;
  ResponseStatus? errors;

  ErrorState({this.message, this.errorCode, this.fieldName, this.errors});

  List<Object> get props => [message, errorCode, fieldName, errors];
}

extension ApiStatusX on ApiStatus {
  bool get isInitial => this == ApiStatus.initial;
  bool get isLoading => this == ApiStatus.loading;
  bool get isSuccess => this == ApiStatus.success;
  bool get isError => this == ApiStatus.error;
}

@JsonSerializable()
class ApiStateX extends Equatable {
  ApiState(this.message, this.errorState, this.state, {
    this.status = ApiStatus.initial,
    ErrorState<ResponseStatus>? errors,
  });

  factory ApiState.fromJson(Map<String, dynamic> json) => _$ApiStateFromJson(json);

  final ApiState state;
  final ErrorState<ResponseStatus> errorState;

  ApiState copyWith({ApiStatus? status}) {
    return WeatherState(
      status: status ?? this.status,
      temperatureUnits: temperatureUnits ?? this.temperatureUnits,
      weather: weather ?? this.weather,
    );
  }

  Map<String, dynamic> toJson() => _$WeatherStateToJson(this);

  @override
  List<Object?> get props => [status, temperatureUnits, weather];
}

class ErrorState {}

@immutable
abstract class DataAccessState {}

class DataAccessInitial extends DataAccessState {}
