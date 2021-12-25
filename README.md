# todolist
1.	html 
일단 html 파일부터 간단하게 설명드리자면 head부분에있는 script는 외부의 귀여운 휴지통 이모티콘을 가지고 오는데 쓰였고 기본 뼈대를 구성하였습니다
2.	css
css부분에서는 외부 글꼴을 import 하였고 header, input, 버튼등 보이는 요소들의 스타일을 지정하였고 사용자에게서 입력 받았을 때의 <li>또한 css를 이용하여 디자인을 하였습니다. 그리고 짝수 줄과 홀수줄을 교대로 색상을 다르게 하는 하기 위해 nth child를 이용하여 구현하였습니다. 

3.	Js
자바스크립의 기본적인 구조는 Todo라는 클래스를 만들고 각각의 기능들을 하는 매서드를 만들었습니다.  
그리고 추가하기 버튼에 클릭 이벤트를 추가합니다. 사용자로부터 입력을 받으면 mytodolist에서 add()메소드를 아용해서 변환을 합니다.
Add()메소드의 경우 사용자가 입력하지 않을 시 if문을 이용하여  “할 일 입력하십시오”라는 메시지가 뜨게 설정하였습니다. 사용자가 할 일 을 입력하고 클릭하면 true로 전환됩니다. 그리고 inshift()를 사용하여 가장 최근 항목을 맨 위에 표시하도록 하였습니다.
		Display()메소드의 경우 메서드가 처음부터 끝까지 사용자가 지우지 않으면 추가 버튼을 클릭할 때 마다 반복되는 항목을 표시합니다.
		Done_undone() 매소드의 경우 객체의 id값을 보내고 십입된 변수의 값과 동일한 값을 갖는 객체의 인덱스 번호를 할당하고 selectedtodoindex변수로 할당합니다. 그릐고  ((item) => item.id == x) 이것은 배열에서 항목을 가져 오는 것을 의미합니다.  
