import 'dart:io';

void main() {
  //LOGGING: print("start of main method");
  List<Map<String, dynamic>> testCases = getTestCases();

  List<int> blueCount = countNumberOfBlues(testCases);

  displayTestCaseResults(blueCount);
  //LOGGING: print("end of main method");
}

List<Map<String, dynamic>> getTestCases() {
  //LOGGING: print("start of user input");
  dynamic userInput = stdin.readLineSync();
  int T = 0;

  T = int.parse(userInput);

  List<Map<String, dynamic>> testCases = [];
  Map<String, dynamic> tCase = {};
  for (var i = 0; i < T; i++) {
    tCase = {};
    userInput = stdin.readLineSync();

    tCase['s'] = userInput;

    userInput = stdin.readLineSync();

    userInput = userInput.split(" ").map((e) => int.parse(e)).toList();
    tCase["i"] = userInput[0];
    tCase['j'] = userInput[1];
    testCases.add(tCase);
  }
  //LOGGING: print("end of user input");

  return testCases;
}

List<int> countNumberOfBlues(testCases) {
  List<int> blueCount = [];
  int count = 0, i = 0, j = 0;
  String s = '';

  //LOGGING: print("count no. of blues begins");
  for (var test in testCases) {
    //LOGGING: print("begin count loop");
    s = test['s'];
    i = test['i'];
    j = test['j'];
    s = s * (j ~/ s.length);
    s = s.substring(i - 1, j);
    count = 'B'.allMatches(s).length;
    blueCount.add(count);
    //LOGGING: print("end count loop");
  }
  //LOGGING: print("count no. of blues ends");
  return blueCount;
}

void displayTestCaseResults(List<int> blueCount) {
  //LOGGING: print("started displaying results");
  for (var i = 0; i < blueCount.length; i++) {
    stdout.write("Case #${i + 1}: ${blueCount[i]}\n");
  }
  //LOGGING: print("done displaying results");
}
