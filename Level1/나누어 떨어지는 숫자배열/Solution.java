import java.util.*;

class Solution {
  public int[] solution(int[] arr, int divisor) {
    List<Integer> list = new ArrayList<Integer>();
    int[] answers = {};

    for (int i = 0; i < arr.length; i++) {
      if (arr[i] % divisor == 0) {
        list.add(arr[i]);
      }
    }

    Collections.sort(list);
    answers = new int[list.size()];

    if (answers.length == 0) {
      int[] minus = { -1 };
      return minus;
    }

    for (int i = 0; i < answers.length; i++) {
      answers[i] = list.get(i).intValue();
    }

    return answers;
  }
}