[[ 리눅스기초, 노드, 블록체인 이론, 이더리움]]
1. aws 
 - 1년간 무료 지원 (자원을 많이 사용하면 과금)
 - 아마존에서 리눅스 세팅 (상용 시스템)
 - nodejs project(개발이 완료된 결과물) deploy(배포) & 운영
 - 상용서비스 관점 테스트
 - 무료로 사용서비스(리눅스 우분트 18.xx) 사용
 - 데이터베이스 1년간 무료 지원
 - 가입후 > 콘솔에 로그인 > 서비스 > EC2 클릭시 화면이 열리면 승인완료(시간이 걸릴수있음)
 - 세팅
  1) 우측 상단 > zone 조절 > 아시아 태평양 (서울) 조정
  2) 서비스 > EC2(웹서비스를위한OS세팅) > 인스턴스 시작 > 왼쪽창에 프리 티어만 체크
  3) Ubuntu Server 18.04 LTS (HVM), SSD Volume Type 선택
  4) 중간단계를 다음으로 선택할수 있으나, 검토및 시작 버튼 눌러서 바로 7단계 진입
  5) 시작하기 > 새키파일 > 이름지정 > 다운로드 > 인스턴스 시작 > 인스턴스 보기
  5-1) 시작하기 > 기존키파일 > 선택 > 체크 > 인스턴스 시작 > 인스턴스 보기
  6) 서버의 name을 적당히 지정하여 향후 관리의 편의성 제공
    ----------------- 서버 생성 ----------------------------------------------
  7) 접속하기(ssh) : 윈도우 or 다른 os (터미널 작업)
  8) 윈도우용 ssh 프로그램 다운로드 (putty)
    > https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
    > putty.exe (64bit) 다운로드 
    > puttygen.exe (64bit) 다운로드 
    > xxx.pem 파일과 같은 위치에 둔다
    > puttygen.exe 실행 > load > xxx.pem > Save Private key > 저장 > xxx.ppk 생성됨
    > putty.exe 실행 > ubuntu@본인서버공인IP > saved Session에 이름 기입( aws ) > save
    > Connection > SSH > Auth > Browse 클릭 > xxx.ppk 선택 > session > aws 선택 > save
    > open
    
2.도커
-리눅스를 윈도우, 맥, 등등 가상환경하에 운영
-리눅스-> 이미지로 제공
-빠른 설치
-적은 공간
-가상화쪽에서는 신흥강자 -> 하둡테스트, 운영쪽에 많이 사용

3.javascript
- 발전진행사항 
1995 : 탄생
1997 : ECMA 표준단체 탄생 => 이후는 바이러스의 온상이 되면서 외면
2005 : 구글지도 -> AJAX -> 비동기통신을 통한 화면처리기술 발전
2008 : 크롬 브라우저 발표 및 소스 공개 => V8엔진 기반
2009* : node js 등장 -> v8엔진 기반 : js기반 서버사이드 개발 플랫폼, 스마트폰 출시
2010 : 앱 시장 확장 -> android vs ios 진영으로 확산 => one source multi use 움직임이 진행
-> 하이브리드앱 시장 (html css3 js를 이용한 개발방식)
2011~ : none액티브엑스, html5 발전, 앱개발 SPA(Single Page Application)발전
-> AngularJS(구글), reactjs(페이스북), vue(커뮤니티) 개발 -> JS발전, 웹서비스 개발의 매커니즘이
서버사이드에서 클라이언트사이드로 전환
-> AngularJS: typeScript(개발언어) -> transcompile->javascript구조
->reactjs:modern javascript(표준js)->babel(표준js->호환js수정)->webpack(압축, 소스보호)
->최종소스생성
->앱개발
 1)네이티브 : 안드로이드 (자바, 코틀린), ios(오브젝티브 씨, 스위프트)
 2)하이브리드 : 1세대 - 폰갭, html5, css3, js
               2세대 - 아이오닉, 코드도바, reaact-native(페이스북 인스타그램)
               3세대 - fultter(구글: pc, mobile, 전방위-> Dart)
2015 : 모던스크립트 정립, 발표 적용이 시작~
-------------------------------------------------------------------------
변수
연산자,제어문,반복문
함수
클래스
기타js만의 표현


4.nodejs
- 본 과정에서 노드제이에스의 포지션
 일반유저가 블록체인에 다이렉트로 접근해서 업무를 볼 수 없으므로, 앞단에 서비스가 필요하다.
웹기반 서비스라면, noodjs에서 제공하는 웹서비스를 통해 블록체인상에 존재하는 DApp(이더리움 기반 스마트계약(프로그램))과
통신하여 블록체인의 특징/특성이 반영된 서비스를 제공받는다.
- 개념
 > V8엔진 기반으로 구동
 > 비동기, 이벤트 기반
 > 비숫한 유형 : 루비, 파이썬분야의 웹서비스
 > 1 스레드로 동시에 만건의 요청을 처리했다?
 > nodejs vs spring : 어떤 것을 사용할 것인가 ? 각 환경에 맞게 구성
 
- 개발환경구축
 > nodejs.org
- 모던스크립트(필요한 표현 위주)
- express
- 실제 프로젝트 : 개발(서버/클라이언트사이드) + 디자인 + 기획 + DB
 =>개발이 완료되면 디자인을 입히는 과정 진행
 =>템플릿을 적용하여 디자인 완성 과정
- 실시간 통신
 => socket.io를 사용

- 배포 및 운영
  => 소스 배포(ftp를 사용) : 파일질라
  파일 > 사이트 관리자 > 새 사이트 > 
  SFTP,  호스트:IP, 로그온유형 : 키파일, 사용자:ubuntu,키파칠: XXX.ppk
  =>프로젝트 폴더 생성
  $mkdir Server
  $ cd Server
      $ nano test.txt
  $ modir notJapan or 파일질라에서 디렉토리 생성
  소스 업로드 ->node_modules, package-lock.json을 뺀 나머지 전부
  $cd notJapan
  $npm install
  $nano package.json
  ------------------------
  nodemon ./bin/www -> node ./bin/www
  --------------------------[수정 및 저장]
$ npm start
-> 브라우저에 접속 : IP:3000
-> 3000번 포트가 막혀 있어서, 접속 불가 -> 서버의 인바운드에 3000번을 추가하라
-> aws > ec2 > 인스턴스 > 하단 설명에 보안그룹 : launch-wizard-1 클릭 >
  인바운드 > 편집 > 사용자 정의 TCP > 3000번 추가, 위치무관으로 저장
-> 브라우저에 접속 : IP:3000 <= 접속 확인
-----------------------------------------------
[기본 구동법은 터미널 세션을 점유하고 있어서, 다른 작업이나 퇴근이 불가하다.]
=> 전문적인 프로세스 관리자 프로그램이 필요하다. -> forever, PM2..
=> PM2를 이용하여 관리하겠다
$ sudo npm install pm2 -g
--------------------------------------------------------------[기본 운영]
=>pm2를 아용한 서비스 가동
$pm2 start ./bin/www
=> 프로세스 목록 확인
$pm2 list 
=> 중지:pm2 stop name | id
$pm2 stop 0
=> 서비스 재가동 pm2 restart name | id
$pm2 restart 0
=> 서비스 종료, 완전 제거 => 더 이상 운영하지 않겠다
$ pm2 delete 0
-------------------------------------------------------------------- 
=> 이름을 지정하여 서비스를 등록 및 구동
$pm2 start ./bin/www --name "notJapan"   
=> 정보 보기
$ pm2 show notJapan 
=> 정보보기를 통해서 에러로그, 엑세스(out)로그의 위치를 볼 수 있었다
=> 로그 모니터링
$ tail -f /home/ubuntu/.pm2/logs/notJapan-out.log 
=> 에러로그 모니터링
$ tail -f /home/ubuntu/.pm2/logs/notJapan-error.log 
=> 로그의 위치는 별도로 지정하지 않으면 ~/.pm2/logs 밑에 존재한다
=> 로그는 내가 지정한 위치에서 관리하고 싶다 => 위치 등록
----------------------------------------------------------------------
=> 리눅스에서 명령을 나열하고 싶으면 : 명령 && 명령
=> 프로젝트 폴더 내에 logs 폴더를 미리 생성 해둔다
$ pm2 delete notJapan && pm2 start ./bin/www --name "notJapan" -o ./logs/out.log -e ./logs/err.log --merge-logs
=> 로그위치 확인 
$ pm2 show notJapan
$ tail -f ./logs/out.log
-------------------------------------------------------------------------
=>사업이 잘되서 동접요청이 폭주했다 -> 현 서버에서 성능을 극대화 할 것인가? => 클러스트
=> Cluster 기능 이용하여 서버를 n개로 지정하고 별도 지정이 없다면 라운드로빈 방식으로 
=> 요청이 들어오면 서버에 처리를 분담시킨다 (라운드빈 :1->2->3->4->...)
=> 로드밸런스 작업 Load Balancing(LB)
$ pm2 delete notJapan && pm2 start ./bin/www --name "notJapan" -i 3 -o ./logs/cluster.log
=> 클러스트 개수를 조장하고 싶다
$ pm2 scale notJapan 4
=> 전체 모니터 
$pm2 monit
=>전체 로그 모니터
$ tail -f ./logs/cluster-* 
-----------------------------------------------------------------------------




5.블록체인

6.이더리움

7.리눅스
- 기본 세팅
- 계정은 root(소유자) , ubuntu(일반사용자)
-기본 os 업데이트
 => sudo는 루트 권한으로 뭔가 작업할 때 사용
 superuser do의 약자, superuser 권한으로 뭔가를 수행할때 사용한다.
 =>apt ubuntu의 패키지 관리자
 -> 인덱스 정보는 /etc/apt/source.list 에 저장 -> 여기를 읽어서 패키지 설치시 사용 
 -> nodejs를 서버에 설치하기 전에 몇 버전을 설치하게 구성되어 있는 확인 후 버전을 맞춰서 등록 후 설치
 $ sudo apt-get update
 $ sudo apt-get upgrade 
 => curl이라는 묘듈을 설치한다
  -> 다양한 프로토콜을 수행하는 전송 라이브러리, ftp, http...등 사용
 $ sudo apt install curl
=>nodejs 현재 설치할 수 있는 버전 체크 => 패키지 정보 보기
$sudo apt-cache show nodejs
    Filename: pool/universe/n/nodejs/nodejs_8.10.0~dfsg-2_amd64.deb
=> nodejs버전이 8임을 알게 되었다.
=> nodejs의 설치 버전을 10으로 조정한다.
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash - 
=> -s는 진행상태, 에러 등을 보이지 않는다.
=> -L은 요청 페이지가 변경되면 재요청을 진행한다. 
=> shell(쉘) -> 리눅스상에서 명령어 처리기, 텍스트, 한줄씩 순차적으로 수행 vs bat파일(윈도우)
  ->bash(배시), sh, zbash(좀 더 이쁜)
  ->쉘 코드의 첫줄 ->#!/bin/bash : bash로 쉘스크립트를 구동해라는 의미
=> 노드 설치
$sudo apt install nodejs
=>버전 확인
$node -v
=>숨김 파일까지 보기
$ ls -a
=> 소스 배포 (ftp사용) : 

8.실전 프로젝트
 - 목적
 > 노노재팬을 카피하여 ndoejs기반으로 구축 및 배포, 운영하겠다
 > nodejs의 서버 구성 + express (서버를 구성하는 모듈)
 > 데이터베이스(mysql) 연동 (pooling, 풀링 <-> orm(객체기반쿼리처리))
 > 데이터 구축을 위한 웹스크랩핑 진행
 => 데이터 수집 및 전처리 : 데이터 분석의 60~70% 비중 차지
 -> 1단계(레벨) : 공공데이터, 데이터센터에서 제공, 통계청 제공, 국가 제공....  =>정제된 데이터
 -> 2단계 : oeneapi를 이용한 수집 ( 포털, 특수 목적...) => 정제된 데이터
 -> [사용]3단계 : 웹스크랩핑(wenscriping) -웹을 요청해서 사이트를 긁어서 html에서 데이터 추출
            => css, selector가 필수 기술, DOM(D)
 -> 4단계(레벨) : 매크로, 드루킹(예를들면 악하게 사용되면), 티켓자동예매(악하게 사용되면)
                    => crawling(크롤링), 브라워저에서 사람이 하는 행위처럼 구성하여 
                    자동화시켜서 데이터를 수집하는 행위(로그인, 글쓰기, 데이터 추출 다 된다)
                    => 유튜브, 로그인후 처리해야하는 사이트 => ajax를 사용하는사이트가 주대상
- 사용 모듈 : Node.js 웹 애플리케이션 프레임워크
 > expressjs 모듈이 nodejs 서버 구성의 거의 대부분을 차지
  -> 이미 서버를 구성해야할 모든 내용이 다 갖추어 졌다

 -설치 : 패키지 조회하는 사이트 : npmjs.com
 npm => nodejs에 써드 파트 패키지(모듈)을 설차하는 패키지 관리자
 $ npm i -g express 
 -g : 시스템 전체에서 사용가능
 i : install, 설치해라
 =>bc_projects\node>  npm i -g express
$ npm i -g express-generator
- 프로젝트 생성
$node>express -e notJapan 
$node>cd notJapan
$ npm install
     -> package.json을 읽어서 dependencies에 존재하는 모듈을 설치