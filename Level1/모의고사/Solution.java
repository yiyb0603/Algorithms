package 모의고사;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

class Solution {
  public int[] solution(int[] answers) {
    List<Integer> answerList = new ArrayList<Integer>();
    int[] answer = {};

    int[] firstStudent = { 1, 2, 3, 4, 5 };
    int[] secondStudent = { 2, 1, 2, 3, 2, 4, 2, 5 };
    int[] thirdStudent = { 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 };

    int firstCount = 0;
    int secondCount = 0;
    int thirdCount = 0;

    for (int i = 0; i < answers.length; i++) {
      if (answers[i] == firstStudent[i % 5]) {
        firstCount++;
      }

      if (answers[i] == secondStudent[i % 8]) {
        secondCount++;
      }

      if (answers[i] == thirdStudent[i % 10]) {
        thirdCount++;
      }
    }

    int[] cntArr = { firstCount, secondCount, thirdCount };
    int maxValue = Math.max(Math.max(cntArr[0], cntArr[1]), cntArr[2]);

    for (int i = 0; i < cntArr.length; i++) {
      if (cntArr[i] == maxValue) {
        answerList.add(i + 1);
      }
    }

    answer = new int[answerList.size()];
    for (int i = 0; i < answerList.size(); i++) {
      answer[i] = answerList.get(i).intValue();
    }

    Arrays.sort(answer);
    return answer;
  }
}