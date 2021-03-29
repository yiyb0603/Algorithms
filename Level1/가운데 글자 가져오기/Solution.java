class Solution {
  public String solution(String s) {
    String result = "";

    if (s.length() % 2 == 0) {
      for (int i = (s.length() / 2) - 1; i < (s.length() / 2) + 1; i++) {
        result += s.charAt(i);
      }
    } else {
      result = String.valueOf(s.charAt((s.length() / 2)));
    }

    return result;
  }
}