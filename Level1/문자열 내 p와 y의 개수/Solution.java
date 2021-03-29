class Solution {
  boolean solution(String s) {
    int pCount = 0;
    int yCount = 0;

    for (int i = 0; i < s.length(); i++) {
      String alpha = String.valueOf(s.charAt(i)).toUpperCase();

      if ("Y".equals(alpha)) {
        yCount++;
      } else if ("P".equals(alpha)) {
        pCount++;
      }
    }

    if (pCount == yCount) {
      return true;
    }

    return false;
  }
}