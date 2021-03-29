import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

class Solution {
  public String solution(String s) {
    List<Integer> list = new ArrayList<Integer>();
    String input = s;
    String[] numbers = input.split(" ");

    for (String number : numbers) {
      int parsedNumber = Integer.parseInt(number);
      list.add(parsedNumber);
    }

    String answer = Collections.min(list) + " " + Collections.max(list);
    return answer;
  }
}