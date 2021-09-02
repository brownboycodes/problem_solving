import 'dart:io';

void main() {
  List<List<int>> testCases = getTestCases();

  List<String> probabilityList = getAinLeadProbability(testCases);

  displayTestCaseResults(probabilityList);
}

List<List<int>> getTestCases() {
  String? t = stdin.readLineSync();
  int T = 0;
  List<List<int>> testCases = [];
  if (t != null) {
    T = int.parse(t);
  }

  for (var i = 1; i <= T; i++) {
    String? tCase = stdin.readLineSync();
    if (tCase != null) {
      testCases.add(tCase.split(" ").map((e) => int.parse(e)).toList());
    }
  }

  return testCases;
}

List<String> getAinLeadProbability(List<List<int>> testCases) {
  List<String> probabilityList = [];
  String probability;

  for (var testCase in testCases) {
    probability = ((testCase[0] - testCase[1]) / (testCase[0] + testCase[1])).toStringAsFixed(8);

    probabilityList.add(probability);
  }

  return probabilityList;
}

void displayTestCaseResults(List<String> probabilityList) {
  for (var i = 0; i < probabilityList.length; i++) {
    stdout.write("Case #${i + 1}: ${probabilityList[i]}\n");
  }
}
