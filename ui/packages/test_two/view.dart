import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'bloc.dart';
import 'event.dart';
import 'state.dart';

class TestTwoPage extends StatelessWidget {
  const TestTwoPage({super.key});

  @override
  Widget build(BuildContext context) => BlocProvider(
        create: (context) => TestTwoBloc()..add(InitEvent()),
        child: Builder(builder: _buildPage),
      );

  Widget _buildPage(BuildContext context) {
    var bloc = BlocProvider.of<TestTwoBloc>(context);

    return Container();
  }
}
