// 과제 1
export const makeIntro = (name, mbti) => {

  let introduce = `안녕하세요 저는 ${name} 입니다. 제 mbti 는 ${mbti} 입니다. 저는 고양이와 커피를 좋아해요`;
  return introduce;
};

// 과제 2
export const assign2 = (arr, divisor) => {
  // array의 각 element 중 divisor로 나누어 떨어지지 않는 수를 담은 배열을 return하세요.
  // 반환하는 배열은 오름차순으로 정렬해야 합니다.
  // 나누어 떨어지지 않는 값이 한개도 없다면 배열에 "없어요!" 만 담아서 return 합니다.

  // 여기에 코드를 작성하세요.
  let answer = [];
  arr.forEach((element) => {
    if((element % divisor) != 0){
      answer.push(element);
    }
  });
  if(answer.length === 0) {
    answer.push("없어요!");
  }
  answer.sort();
  return answer;
};
