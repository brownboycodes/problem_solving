import 'dart:io';

void main() {
  List<int> testCases = getTestCases();

  List<double> caseResults = getCaseResults(testCases);

  displayTestCaseResults(caseResults);
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

void displayTestCaseResults(List<double> caseResults) {
  for (var i = 0; i < caseResults.length; i++) {
    stdout.write("Case #${i + 1}: ${caseResults[i]}\n");
  }
}

List<double> getCaseResults(List<int> testCases) {
  List<double> caseResults = [];
  double result = 0;

  testCases.forEach((testCase) {
    result = findScore(testCase);
    caseResults.add(result);
  });

  return caseResults;
}

double findScore(int N) {
  var cards = List<int>.generate(N, (i) => i + 1);

  List<int> cardsAtHand = [];

  //first shuffle the cards
  cards.shuffle();
  //then remove the card at the top of the pile
  cardsAtHand.add(cards.removeLast());

  while (cards.length != 0) {
    cards.shuffle();
    int removedCard = cards.removeLast();
    if (removedCard > cardsAtHand.last) {
      cardsAtHand.add(removedCard);
    }
  }

  return cardsAtHand.length.toDouble();
}
