class Solution {
  public String solution(String s, int n) {
    String answer = "";

    for (int i = 0; i < s.length(); i++) {
      char alpha = s.charAt(i);

      if (alpha == ' ') {
        answer += alpha;
      }

      if (alpha >= 'a' && alpha <= 'z') {
        if (alpha + n > 'z') {
          answer += (char) (alpha + n - 26);
        } else {
          answer += (char) (alpha + n);
        }
      }

      if (alpha >= 'A' && alpha <= 'Z') {
        if (alpha + n > 'Z') {
          answer += (char) (alpha + n - 26);
        } else {
          answer += (char) (alpha + n);
        }
      }
    }

    return answer;
  }
}