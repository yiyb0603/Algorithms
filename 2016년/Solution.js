function solution(a, b) {
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  const nowDate = new Date(`2016-${a}-${b}`);
  const dayName = nowDate.getDay();
  
  return dayNames[dayName];
}