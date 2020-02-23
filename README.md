# lecture


## HTML
 awesome font   
 google font
***
## CSS
### box-sizing
width 값을 주는 건 박스 안쪽(content 영역, border size 제외)을 말하는거다   
그래서 box-sizing: border-box를 주게되면 border와 padding까지 고려한 전체 사이즈를 width로 설정하게 됨

https://opentutorials.org/course/2418/13405 참고

### word-break
줄바꿈을 어떻게 하냐를 정의   
한 단어가 끝나지 않았을 경우 normal, break-all은 나머지 부분을 줄바꿈하고, keep-all은 단어의 시작부터 줄바꿈 한다(한글기준)
https://www.codingfactory.net/10658 참고

### text-decoration
말 그대로 text에 decoration을 어떻게 할지 설정   
a 태그에 none값을 주면 링크에도 밑줄이 생기지 않음
https://www.codingfactory.net/10648 참고

### list-style-type
ul, ol 등에 목록 앞에 도형이나 문자 표시 형태 설정   
none으로 설정하면 앞에 아무것도 붙지 않음
https://www.codingfactory.net/10537 참고

### margin
margin은 바깥쪽 여백, padding은 안쪽여백
- `margin: 20px` 상하좌우 모두 20px
- `margin: 20px 10px` 상하 20px, 좌우 10px
- `margin: 20px 10px 30px 40px` 위 20px, 오른쪽 10px, 아래 30px, 왼쪽 40px
- `margin: 20px 10px 30px` 위 20px, 좌우 10px, 아래 30px

### overflow
overflow는 내용이 요소의 크기를 벗어났을 때 어떻게 처리할지를 정하는 속성
- `visible` 박스를 넘어가도 보여줍니다.
- `hidden` 박스를 넘어간 부분은 보이지 않습니다.
- `scroll` 박스를 넘어가든 넘어가지 않든 스크롤바가 나옵니다.
- `auto` 박스를 넘어가지 않으면 스크롤바가 나오지 않고, 박스를 넘어갈 때에는 스크롤바가 나옵니다.
- `initial` 기본값으로 설정합니다.
- `inherit` 부모 요소의 속성값을 상속받습니다.

### position
- `static` 기본값
- `relative` 각 태그가 static이었을 때의 위치 기준
- `absolute` position: static 속성을 가지고 있지 않은 부모 기준, 부모중에 포지션 설정이 없다면 body 기준, div여도 더는 width: 100%가 아남
- `fixed` 위치 고정, div여도 더는 width: 100%가 아남

### transform
변형시키다
https://opentutorials.org/course/2418/13684 참고

### display
```
block 요소
<address>, <article>, <aside>, <blockgquote>, <canvas>, <dd>, <div>, <dl>, <hr>, <header>, <form>,<h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <table>, <pre>, <ul>, <p>, <ol>, <video>
inline 요소
<a>, <i>, <span>, <abbr>, <img>, <strong>, <b>, <input>, <sub>, <br>, <code>, <em>, <small>, <tt>, <map>, <textarea>, <label>, <sup>, <q>, <button>, <cite>
```
- `block` block은 한 영역을 차지 하는 박스형태을 가지는 성질. 기본적으로 block은 width값이 100%. 라인이 새로 추가   
    > block은 height와 width 값을 지정 할 수 있다.   
    > block은 margin과 padding을 지정 할 수 있다.
- `inline` inline은 주로 텍스트를 주입 할 때 사용. 기본적으로 block처럼 width값이 100%가 아닌 컨텐츠 영역 만큼 자동으로 잡히게 되며 라인이 새로 추가 되지 않음. 높이 또한 폰트의 크기만큼 잡힘.(line-height로 설정이 가능 하긴 함.)   
    > width와 height를 명시 할 수 없음   
    > margin은 위아래엔 적용 되지 않음   
    > padding은 좌우는 공간과 시각적인 부분이 모두 적용 되지만 위아래는 시각적으로는 추가되지만 공간을 차지 하지는 않음   
- `inline-block` nline-block 은 말그대로 inline의 특징과 block의 특징을 모두 가진 요소   
    > 줄바꿈이 이루어지지 않음
    > block처럼 width와 height를 지정 할 수 있음
    > 만약 width와 height를 지정하지 않을 경우, inline과 같이 컨텐츠만큼 영역이 잡힘   

https://ofcourse.kr/css-course/display-%EC%86%8D%EC%84%B1 참고

### float
떠있게 만드는 설정. right를 주면 `<p>` 태그와 어울러져서 표시됨. 글이 쭉 나오고 오른쪽에 이미지 나오게 됨. 특정 `<p>` 태그는 float 영향을 안받게 하려면 `clear:both` 를 주면 됨   
https://opentutorials.org/course/2418/13527 참고
***
markdown 사용법 https://gist.github.com/ihoneymon/652be052a0727ad59601