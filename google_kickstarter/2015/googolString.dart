// newGoogolString = previousGoogolString + "0" + switch(reverse(previousGoogolString))
// switch("0"->"1" || "1"->"0")
// reverse("001"-> "100")

import 'dart:io';

void main() {
  List<int> testCases = getTestCases();

  List<String> kThChars = getKthChars(testCases);

  displayTestCaseResults(kThChars);
}

List<String> getKthChars(List<int> testCases) {
  List<String> kThChars = [];

  for (int testCase in testCases) {
    String k = getGoogol(testCase);
    kThChars.add(k);
  }

  return kThChars;
}

List<int> getTestCases() {
  String? t = stdin.readLineSync();
  int T = 0;
  List<int> testCases = [];
  if (t != null) {
    T = int.parse(t);
  }

  for (var i = 1; i <= T; i++) {
    String? tCase = stdin.readLineSync();
    if (tCase != null) {
      testCases.add(int.parse(tCase));
    }
  }

  return testCases;
}

void displayTestCaseResults(List<String> kThChars) {
  for (var i = 0; i < kThChars.length; i++) {
    stdout.write("Case #${i + 1}: ${kThChars[i]}\n");
  }
}

String getGoogol(int k) {
  String googolString = "001001100011011";

  while (googolString.length <= k) {
    googolString += "0" + switchGoogolString(reverseGoogolString(googolString));
  }

  return googolString[k];
}

String reverseGoogolString(String googolString) {
  return googolString.split('').reversed.join();
}

String switchGoogolString(String googolString) {
  googolString = googolString.replaceAll("0", "z");
  //switching 1s
  googolString = googolString.replaceAll("1", "0");
  //finally switching zeroes again
  googolString = googolString.replaceAll("z", "1");

  return googolString;
}
