public class Solution {
  public String solution(String phone_number) {
    String number = phone_number;
    String result = "";

    for (int i = 0; i < number.length(); i++) {
      if (i >= (number.length() - 4)) {
        result += number.charAt(i);
      } else {
        result += '*';
      }
    }

    return result;
  }
}
