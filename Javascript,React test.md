# Javascript

# 1

- Javascript  변수 선언

  - var  
  - let  : 변수 재선언 불가능
  - const : 변수 재선언 불가능, 재할당 불가능

- Javascript 선언문

	- <head> 영역이나 <body> 영역에 선언하면 됩니다.
	
	```html
	<!DOCTYPE html>
	<html>
	<head>
		<script>
		
		</script>
	</head>
	<body>
	</body>
	</html>
	```

# 2
- DOM내무 element선택자
  
  - getElementByid(id) : 특정 id값을 가진 element를 반환
  - getElementByName(name) : 속성이 name 매개변수와 일치하는 문서 객체를 배열로 가져옴
  - getElementByTagName(tagName) : tagname 매개변수와 일치하는 문서 객체를 배열로 가져옴 
  -  querySelector(),querySelectorAll()

# 3

- alert("안녕하세요") : 안녕하세요라는 경고창의 띄움

# 4

- 문서 객체 삽입(1)
  - $(A)appendTo(B) :  [B] + A
  - $(A)preppendTo(B) :  A +[B]
  - $(A)insertAfter(B) : [B] + A
  - $(A)insertBefore(B) : A+ [B]
  
- 문서 객체 삽입(2)
  - $(A)append(B) : [A]+ B
  - $(A)preppend(B) : B +[A]
  - $(A)After(B) : [A] + B
  - $(A)Before(B): B + [A]

- 문서 객체 삭제

  - | 메소드    | 설명                                                         |
  | :-------- | :----------------------------------------------------------- |
    | .remove() | 선택한 요소를 DOM 트리에서 삭제한다. 삭제된 요소와 연관된 jQuery 데이터나 이벤트도 같이 삭제된다 |
    | .detach() | 선택한 요소를 DOM 트리에서 삭제한다. (삭제된 요소와 연관된 jQuery 데이터나 이벤트는 유지된다. |
    | .empty()  | 선택한 요소의 자식 요소를 모두 삭제한다.                     |
    | .unwrap() | 선택한 요소의 부모 요소를 삭제한다.                          |

# 5

- jQuery의 특징
  - 웹에서 자주 사용하는 기능의 간편화
  - CSS셀렉터 : 읽기 쉬운 형태로 사용가능
  - 플러그인 아키텍쳐 : 수많은 플러그인 사용가능
  - 메서드 체인 : 여러 동작을 한줄에 표현가능
  - 크로스 브라우저 지원 : 이벤트나 함수들의 문장을 하나의 표현으로 사용가능

# 6

- jQuery에서 가장 먼저 호출되는 함수 : .ready(function() 

```html
window.onload = function () {
 alert("로딩 완료");
}                             /// Javascript에서 가장 먼저 호출


<script src="http://code.jquery.com/jquery-1.4.4.min.js"></script>
<script>
$(document).ready(function() { alert("로딩 완료"); });
</script>             /// jQuery에서 가장 먼저 호출	
```

# 7

- jQuery 선택자

  - $('h1').css('color', 'red') -  태그선택자: 특정 태그 선택
- $('*').css('color', 'red') - 전체선택자 : 모든 문서객체 선택
  - $('h1#target').css('color', 'red') - 아이디 선택자: 특정 아이디 선택(target)
  - $('.item.select').css('color', 'orange') -클래스 선택자 :  특정 class속성이 있는 문서객체 선택
- $('body > *').css('color', 'red') -  자손 선택자 (body태그의 자식 태그)
  - $('body *').css('color', 'red') - 후손 선택자 (body태그 후손 모든 태그)

# 8

- jQuery 배열 관리 

$.each(object,function(index,item){})

```javascript
$(document).ready(function() {
      let array = [
        {name:'Naver', link:'https://www.naver.com'},
        {name:'Google', link:'https://www.google.com'},
        {name:'Daum', link:'https://www.daum.net'},
        {name:'Multicampus', link:'https://www.multicampus.com'}
      ]; /// 객체 선언
 
      let output = "<ul>"; // ul 태그 열기
      $.each(array, function(index, item){
        output += "<li>" + item.name + "(" + item.link + ")</li>";
      }); // each메소드로 배열 반복작업
      output += "</ul>"; // ul태그 닫기
      
      
      $('#contents').append(output); //contents id를 가진 div 태그 뒤에 output 붙이기
  });
```

# 9 

- on()메소드

$(Selector).on.(eventName, function(event){})

```javascript
$("p").on("click", function(){
 alert("문장이 클릭되었습니다.");
});
```

-  .off() 메소드

  -  `.off()` 메소드는 더 이상 사용하지 않는 이벤트와의 바인딩(binding)을 제거한다.
-  .one() 메소드

   -  `.one()` 메소드는 바인딩(binding)된 이벤트 핸들러가 한번만 실행되고 나서는, 더는 실행되지 않는다.
-  event.preventDefault()
   -  이벤트 위임

# 10

- setTimeout([Function], [Milliseconds])
  -  특정 시간 이 후, 단 한번만 특정 함수 또는 코드를 실행시킬 때 사용합니다.
  - 2번째 인자의 시간(Milliseconds)이 경과하면 1번째 인자의 함수를 실행합니다.
- setInterval([Function], [Milliseconds])
  - 특정 시간 마다 특정 함수 또는 코드를 실행시킬 때 사용합니다.
  - 2번째 인자의 시간(Milliseconds)이 지날때마다 1번째 인자의 함수를 실행합니다.

```javascript
<!DOCTYPE html>
<html>
<head>
    <script>
        setInterval(function() {
            console.log("외부서비스에서 데이터 호출:" + new Date());
        }, 3000); // 3초마다 함수 실행

       setTimeout(function() {
        console.log("외부서비스에서 데이터 호출");
       }, 3000);   //3초후 함수1번 실행
    </script>
</head>
</html>
```



----

# React

## 1

- Javascript 프레임 워크
  - Angular - 구글 
  - Backbone
  - Ember
  - React - facebook
  - Vue.js - 공식 라우터, 상태관리 라이브러리 존재

## 2

- React 특징
  - libraries
  - references
  - 높은 자유도  - 라우터,상태관리는 자체 내장되어 있지 않기 때문에, 자율적인 3rdparty library 사용가능
  - component
  - Vitual DOM
  - JSX

## 3

- Webpack
  - 리액트 프로젝트는 컴포넌트를 여러가지 파일로 분리해서 저장 -> JSX 문법
  - 여러가지 파일을 한개로 결합하기 위한 도구

- Babel
  - 최신 사양의 자바스크립트 코드를 IE나 구형 브라우저에서도 동작하는 ES5이하의 코드로 변환 (트랜스파일링)

## 4

- class  component

```react
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
export default Wlecome;
```

- function component

```react
function TestComponent(props) { 
	return ( 
	<h1> 테스트 {this.props.text} </h1> 
	) 
}
```

## 5 

- 외부에서 사용할 수 있도록 선언

```react
import React, { Component } from 'react';
import Bpp, {Dpp} from './Bpp.js';  // Bpp.js에 Bpp,Dpp 클래스 컴포넌트 
import Cpp from './Cpp.js';        
								//각 컴포넌트 import
class App extends Component {
  render() {
    return (
      <div>
        <Bpp></Bpp>
        <Cpp/>
        <Dpp/>
      </div>           // 컴포넌트 사용
    );
  }
}

export default App;
```

## 6

- Jsx문법 특징
  - React.createElement 코드를 HTML처럼 작성할 수 있도록 지원
  - 하나의 root element를 가짐
  - 모든 element는 closer필요
  - javascript 사용시 { } 사용
  - 삼항연산자나 and연산자를 사용한 조건부 렌더링 ( if문 사용 불가)
  - 객체 형태로 style(css)작성 후 className속성에서 사용

## 7

- props
  - 부모 컴포넌트가 자식 컴포넌트에게 전달하는값
  - 자식 컴포넌트에서는 props의 값을 수정할 수 없음
  - props값은 this.키워드를 이용하여 사용
  - this.props.name

- state
  - 컴포넌트 내부에 선언하여 사용되는 보관용 데이터값
  - 동적인 데이터 처리
  - this.state.number

## 8

```react
import React,{Component} from 'react';

class App extends Component{
render(){
return(
	<div></div>
	)
	}
}
export default App;
```

