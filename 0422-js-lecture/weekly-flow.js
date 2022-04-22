// weeklyFlow
// week 객체
const week = {
  everyday: ['매일'],
  morning: ['커피 만들기', '커피 마시기'],
  afternoon: '집에서 밥 먹기',
  study: ['작업하기', '노트 정리', '복습', '노래듣기', '레퍼런스 리서치', '매일매일 스케줄 체크'], 
  // monday: ['메인 페이지 마크업 수정하기', '태블릿 메인 페이지는 따로 만들기', '상세 검색 기능 페이지'],
  mondayObj: {
    monday: '월요일',
    markUp: ['메인 페이지 수정', '태블릿 메인 페이지는 따로 구성해 만들기', '상세 검색 결과 페이지', '메인 페이지를 제외하고는 태블릿 버전 미디어 쿼리 사용하기'],
    figmaDesign: ['태블릿 메인 페이지는 따로 구성해 만드느냐 미디어 쿼리를 사용할 것인가 해결하기']
  },
  // tuesday: ['판매 상세 페이지, 판매자 상세 페이지 마크업하기', '용지 선택 페이지를 수정하기', ''],
  tuesdayObj: {
    tuesday: '화요일',
    markUp: ['판매 상세 페이지', '판매자 상세 페이지', '용지 선택 페이지'],
    figmaDesign: ['용지 선택 페이지를 간단하게 만들기']
  },
  wednesdayObj: {
    wednesday: '수요일',
    markUp: ['용지 페이지 기본용지 페이지', '태블릿 기본용지 페이지는 따로 구성하기', '기본용지 페이지 수정'],
    figmaDesign: ['기본용지 페이지 수정']
  },
  thursdayObj: {
    thursday: '목요일',
    markUp: ['용지 화면 카메라 기능', '사진 보관함 기능', '전체적 확인과 틀어지는 부분의 수정'],
    figmaDesign: ['마크업 부분에서 달라지는 부분 최종 수정', '리서치 자료 정리']
  },
  fridayObj: {
    friday: '금요일',
    markUp: ['만족스럽지 않은 부분 체크', '더 나은 방안 생각하기'],
    figmaDesign: ['만족스럽지 않은 부분 체크', '더 나은 방안 메모']
  },
  saturdayObj: {
    saturday: '토요일',
    markUp: ['더 나은 방안 마크업 해보기', '그건 아마 용지 페이지가 되지 않을까'],
    figmaDesign: ['더 나은 방안 모색 리서치 자료'],
    personal: ['카페에 가서 커피를 마시기']   
  },
  sundayObj: {
    sunday: '일요일',
    markUp: ['더 나은 방안 마크업의 연장선'],
    figmaDesign: ['더 나은 방향으로 수정하기'],
    study: ['스케줄링', '평소보다 일찍 잠들기'],
    personal: ['점심에 이지은 집들이'],
    friends: ['이지은', '유현정']
  }
}

// !오탈자 내지 않기
// !객체로 이어서 이어서 사용해야 콘솔이 실행된다
// console.log(week.afternoon);
// 메서드를 호출해주는 것이 이런 것인가?
console.log(week.wednesdayObj.markUp);
console.log(week.thursdayObj.markUp[0]);
console.log(week.saturdayObj);
console.log(`${week.saturdayObj.saturday}에는 ${week.saturdayObj.markUp}과 ${week.saturdayObj.figmaDesign}을 여유롭게 할 것이다.`);
console.log(`${week.sundayObj.sunday} 아침에는 ${week.sundayObj.markUp}과 ${week.sundayObj.figmaDesign}을 ${week.saturdayObj.saturday} 저녁과 ${week.sundayObj.sunday} 아침에 미리 해두고, ${week.sundayObj.personal}에 가서 오랜만에 ${week.sundayObj.friends[0]}과 ${week.sundayObj.friends[1]}과 즐겁게 놀다 올 것이다!`);
console.log(`${week.everyday} 아침 ${week.morning[0]}와 ${week.morning[1]}로 하루를 시작하는 것이 루틴이다.`);
// !객체 배열로 마지막에 끝나면 순서 정해서 기록해야 다음에 쓴 스트링이 출력된다
console.log(`${week.saturdayObj.saturday}에는 ${week.saturdayObj.personal[0]}을 할 것이다.`);