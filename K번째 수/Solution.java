import java.util.*;

class Solution {
  public int[] solution(int[] array, int[][] commands) {
    List<Integer> answerList = new ArrayList<Integer>();

    for (int i = 0; i < commands.length; i++) {
      int startIdx = commands[i][0];
      int endIdx = commands[i][1];
      int answerIdx = commands[i][2];

      List<Integer> temps = new ArrayList<Integer>();

      for (int j = startIdx - 1; j <= endIdx - 1; j++) {
        temps.add(array[j]);
      }

      if (answerIdx >= temps.size()) {
        answerList.add(temps.get(answerIdx - temps.size()));
        continue;
      }

      Collections.sort(temps);
      answerList.add(temps.get(answerIdx - 1));
    }

    int[] answer = new int[answerList.size()];

    for (int i = 0; i < answer.length; i++) {
      answer[i] = answerList.get(i).intValue();
    }

    return answer;
  }
}