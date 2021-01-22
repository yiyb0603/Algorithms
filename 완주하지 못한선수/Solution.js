function solution(participant, completion) {
  let participants = participant.sort();
  let completions = completion.sort();
  
  for (let i = 0; i < participants.length; i++) {
    if (participants[i] !== completions[i]) {
      return participants[i];
    }
  }
}