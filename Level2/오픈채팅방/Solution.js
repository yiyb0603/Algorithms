const LEAVE = 'Leave';
const ENTER = 'Enter';

const EXIT_TEXT = '님이 나갔습니다.';
const ENTER_TEXT = '님이 들어왔습니다.';

function solution(record) {
  let answer = [];
  const userMap = {};

  for (let i = 0; i < record.length; i++) {
    const [state, userId, name] = record[i].split(' ');
    
    switch (state) {
      case LEAVE:
        answer.push([userId, EXIT_TEXT]);
        continue;
          
      case ENTER:
        answer.push([userId, ENTER_TEXT]);
        break;
    }

    userMap[userId] = name;
  }
  
  return answer.map(data => userMap[data[0]] + data[1]);
}
