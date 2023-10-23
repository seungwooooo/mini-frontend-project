## ysw3114

## 참조
https://reactjs-kr.firebaseapp.com/
**리액트 공식 문서 사이트
https://mui.com/
**material UI 사이트

## PORT 변경
package.json에서  scripts 객체 확인 및 변경
"start": "react-scripts start",
-> 
"start": "set PORT=원하는 포트번호 && react-scripts start",

## 블럭주석처리
alt + shift + A

## 초기설정
- material UI 사용 ( https://mui.com/ ) : React UI 컴포넌트 라이브러리
- npm install @material-ui/core [ 해당 명령어를 통해 MUI 라이브러리 설치 ]
- 다양한 디자인, 컴포넌트, 아이콘이 있다.
- materual UI 템플릿을 사용하여 커스터마이징 하였다. ( https://velog.io/@hyeonjeong/React-Material-UI / https://mui.com/store/?utm_source=marketing&utm_medium=referral&utm_campaign=templates-cta#populars )
- Create-react-app을 사용해서 만들수도 있다. ( https://velog.io/@devsaza/cra )
  : React의 Boiler Plate이다.
    초기 환경을 일일히 설정하지 않고도 리액트 프로젝트를 시작할 수 있도록 셋업을 완료해놓은 틀
    React 앱을 만들 때는 React 라이브러리 뿐 아니라 Webpack, Babel 등의 라이브러리들이 필요하다.
    이렇게 패키지 등 번거로운 react 초기 셋팅 작업을 미리 하고, 그 환경을 다시 패키징한 것이 바로 create-react-app이며, 축약해 CRA이라고도 부른다.


## 리액트 설정 및 프로세스
1. npm install
    - 패키지명을 명시해 특정 패키지를 설치하는 동작 ex)  npm install express -> express 모듈이 설치된다.
    - 패키지명을 명시하지 않고 package.json 파일의 의존성을 설치하는 동작 ex) npm install -> package.json에 포함된 의존성 패키지들이 일괄적으로 설치된다.

1-1. package.json과 package-lock.json의 차이점? 
    - https://calssess.tistory.com/138
    - package-lock.json 은 node_modules 구조나 package.json 이 수정되고 생성될 때 당시 의존성에 대한 정확하고 구체적인 정보를 품고 자동으로 생성됩니다.

2. npm start
    - package.json의 start명령어를 실행
     "scripts": {
    "start": "react-scripts start",
    
    - react-scripts start 실행
      react-scripts는 node_modules/react-scripts/scripts/start.js 파일을 실행.
      ( https://velog.io/@cjy9306/create-react-app%EC%97%90%EC%84%9C-react%EA%B0%80-%EC%8B%A4%ED%96%89%EB%90%98%EB%8A%94-%EA%B8%B0%EB%B3%B8-%EC%9B%90%EB%A6%AC-yjk56rqzlk )
    - 리액트는 웹팩(WebPack)을 사용
    - 웹팩 : 프론트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러 
        모듈 : HTML, CSS, JavaScript, Images,Font 등 파일 하나하나를 말한다.
        모듈 번들링 : 웹 애플리케이션을 구성하는 몇십, 몇백 개의 자원들을 하나의 파일로 병합 및 압축 해주는 동작


3. index.html -> index.js -> App.js
    - index.html : 웹이 default로 바라보는 화면, 무조건 있어야 함, id가 root인 <div>가 존재, 껍데기와 같은 역할
    - src폴더 : 동적으로 HTML을 생성
    - index.js : index.html에 동적으로 JSX를 렌더링해주는 js코드파일,
                 ReactDOM.render( , document.getElementById('root'))를 통해 html에 동적으로 컴포넌트를 그린다,
                 React의 시작 (js의 Entry Point)인 파일이다.
    - App.js : Component 코드이다. 

    그럼 localhost로 접속했을때 어떻게 index.js를 찾고 실행시키는걸까?
    -> 웹팩을 사용하면 webpack.config.js 파일을 바라보게 되는데 해당 파일내부를 보면 알 수 있다.
       node_modules/react-scripts/config/webpack.config.js : 213줄 entry 설정을 보면 paths.appIndexJs 를 바라보고 있다.
       entry : 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
    -> paths.js 소스를 확인해보면
       appIndexJs: resolveModule(resolveOwn, `${templatePath}/src/index`), -> 이와 같이 설정 되어있다.

4. DOM에서 요소 렌더링하기
    - <div id="root"></div> //index.html
    -> React DOM에 의해 관리되는 모든 것이 이 요소 안에 들어가므로 이걸 “루트 DOM 노드"라고 부릅니다.
    -> React로 구축한 어플리케이션은 보통 단일 루트 DOM 노드를 가진다. 상황에 따라 원하는 만큼 많은 분리된 루트 DOM 노드가 있을 수도 있다.
    
    -   ReactDOM.render(     //index.js
        element,
        document.getElementById('root')
        ); 
    -> ReactDOM.render를 통해 React 요소를 "루트 DOM 노드" 에 렌더링한다.
5. 렌더링된 요소 업데이트
    - React 요소는 변경 불가능 합니다. 한번 요소를 만들었다면, 그 자식이나 속성을 변경할 수 없습니다.
    - UI를 업데이트할 수 있는 유일한 방법은 새로운 요소를 만드는 것이며, 이 요소를 ReactDOM.render() 로 전달하는 것입니다.


** https://reactjs-kr.firebaseapp.com/docs/rendering-elements.html
렌더링된 요소 업데이트 부분부터 읽고 공부하면서 적용할만한 기술은 적용시키기

6. Router를 통해 경로 설정 및 페이지 반환
    - "<Navigate to= >" 를 통해 페이지 이동 및 반환
    - useNavigate 훅을 실행하면 페이지 이동을 할 수 있게 해주는 함수를 반환