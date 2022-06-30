import 'package:bloc/bloc.dart';

import 'event.dart';
import 'state.dart';

class TestTwoBloc extends Bloc<TestTwoEvent, TestTwoState> {
  TestTwoBloc() : super(TestTwoState().init()) {
    on<InitEvent>(_init);
  }

  void _init(InitEvent event, Emitter<TestTwoState> emit) async {
    emit(state.clone());
  }
}
