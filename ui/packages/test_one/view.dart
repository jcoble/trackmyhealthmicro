import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'cubit.dart';
import 'state.dart';

class TestOnePage extends StatelessWidget {
  const TestOnePage({super.key});

  @override
  Widget build(BuildContext context) => BlocProvider(
        create: (context) => TestOneCubit(),
        child: Builder(builder: _buildPage),
      );

  Widget _buildPage(BuildContext context) {
    var cubit = BlocProvider.of<TestOneCubit>(context);

    return Container();
  }
}
