프로젝트 생성



```
$npx create-react-app contact-app
$cd contact-app
$yam start(or npm start)

```

PhoneForm컴포넌트

- 사용자이름과 전화번호 입력
- src/components/PhoneForm.js생성





push

concat

...전개 연산자  배열을 풀어서 저장



 key값을 사용해야한다.



삭제시  filter 사용

- 이벤트 설정 순서 

1.이벤트 주체결정 

<삭제>버튼

2.이벤트 종류

<클릭이벤트>

3.이벤트 핸들러 구현

이벤트가 작동되면 어떤동작을 할지 결정하는 함수 구현

4.이벤이 주체 <-> 핸들러

함수 <-> 버튼



수정시 map사용

1.수정버튼 추가

2.수정 클릭시 해당하는 ITEM의 NAME,PHONE값을 콘솔 출력



- 수정 방법

```
const modifiedArray2 = myTag.map(v=> v.id===1?({...v, text:'React'}):v);
```









