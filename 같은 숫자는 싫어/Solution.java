import java.util.*;

public class Solution {
  public int[] solution(int[] arr) {
    List<Integer> tempList = new ArrayList<Integer>();
    int prevNum = -1;

    for (int num : arr) {
      if (prevNum != num) {
        tempList.add(num);
      }

      prevNum = num;
    }

    int[] answer = new int[tempList.size()];
    for (int i = 0; i < answer.length; i++) {
      answer[i] = tempList.get(i).intValue();
    }

    return answer;
  }
}