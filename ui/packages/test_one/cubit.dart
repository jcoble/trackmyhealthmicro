import 'package:bloc/bloc.dart';

import 'state.dart';

class TestOneCubit extends Cubit<TestOneState> {
  TestOneCubit() : super(TestOneState().init());
}
