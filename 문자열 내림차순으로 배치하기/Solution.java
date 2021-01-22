import java.util.Arrays;

class Solution {
  public String solution(String s) {
    String answer = "";

    char[] alphas = s.toCharArray();
    Arrays.sort(alphas);

    for (int i = alphas.length - 1; i >= 0; i--) {
      answer += String.valueOf(alphas[i]);
    }

    return answer;
  }
}