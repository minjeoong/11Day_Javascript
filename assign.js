// 과제 1
export const makeIntro = (name, mbti) => {

  let introduce = `안녕하세요 저는 ${name} 입니다. 제 mbti 는 ${mbti} 입니다. 저는 고양이와 커피를 좋아해요`;
  return introduce;
};

// 과제 2
export const assign2 = (arr, divisor) => {

  let answer = [];
  arr.forEach((element) => {
    if((element % divisor) != 0){ //0으로 나누어지지 않는 수라면
      answer.push(element); //answer에 넣기
    }
  });
  if(answer.length === 0) {//길이가 0이라면. => 나누어 떨어지는 값이 한개도 없다면.
    answer.push("없어요!");
  }
  answer.sort(); //오름차순 정렬
  return answer;
  
};
