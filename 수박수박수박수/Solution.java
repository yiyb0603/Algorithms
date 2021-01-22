class Solution {
  public String solution(int n) {
    String word = "수";

    for (int i = 0; i < n - 1; i++) {
      word += word.charAt(i) == '수' ? "박" : "수";
    }

    return word;
  }
}