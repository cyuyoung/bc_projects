1. 블록체인 역사, 구조, 특징, 이해 등등

2. 2세대 블록체인 대표주자 이더리움 구축
 - 1세대 : 비트코인 (대장주) -> 블록체인상에 화폐만 구현된 형태
 - 1단계 : 네트워크 구축 (블록체인이 구현되어 있다)
           이더리움기반의 네트워크 구축 (이더리움을 구축한 언어는 다양하다 -> 구글의 GO를 기반으로 만든 것을 가장 많이 사용 -> Geth)
           geth.ethereum.org/downloads
 - 네트워크 설치 위치 지정
   네트워크 : 상용 <- 테스트 <- private 3가지 형태로 존재
- geth 설치
- 계정 생성
 현재 위치는 C:\eth_net\Geth
 $ geth --datadir "./ethereum/data" account new
- 계정 확인
$ geth --datadir "./ethereum/data" account list
- ICO행사에 투자를 받아서 1명이 돈을내고 주주가 되었다
 => 계좌를 하나 생성해 주었다
 => 현재 계좌는 2개(소유쥬, 주주1명)
소유주 : 9cd1328836995ac846b64e87388801bbc39866b2
주주 1명 : 9e615290b49ea9542d6102e2bf7771f6079c653c
- 네트워크 구성을 위해 제네시스 블록 구성 파일을 위치해둔다
 => 최초 블록을 쌓게 된다
 => C:\eth_net\Geth\Genesis.json 위치
- 제네시스 블록을 가지고 초기 네트워크를 구축 명령 수행
 $ geth --datadir "./ethereum/data" init "./Genesis.json"
- 네트워크 가동
 $ geth
  --identity "PrivateNetwork" : 네트워크 이름
  --datadir "./ethereum/data" : 네트워크 위치
  --port "30303"              : 네트워크의 Listening port 지정
  --rpc                       : 원격접속 및 명령 수행 OK, Enable the HTTP-RPC server
  --rpcaddr 0.0.0.0           : RPC서버 주소 => 기본값 localhost   
  --rpcport "8123"            : RPC서버 포트
  --rpccorsdomain "*"         : 기재하면 도메인으로도 접속 가능
  --nodiscover                : 제네시스 블록과 네트워크 ID에 있는 블록 연결 금지
  --networkid 1900            : 네트워크 아이디
  --nat "any"                 : 외부 주소와 내부 주소간 변화 처리
  --rpcapi "db, eth, net, web3, miner, personal" : 콘솔로 오픈이 되는 api 목록 web3=> js에서 사용가능
  console                     : 콘솔 모드 오픈, 모든 출력은 콘솔로 진행
 
$ geth --identity "PrivateNetwork" --datadir "./ethereum/data" --port "30303" --rpc --rpcaddr 0.0.0.0 --rpcport "8123" --rpccorsdomain "*" --nodiscover --networkid 1900 --nat "any" --rpcapi "db, eth, net, web3, miner, personal" console         


- 원격접속
 $geth attach http://localhost:8123
- 계좌확인 
 $ eth.accounts 
- 잔고확인
 $ eth.getBalance( eth.accounts[0])

 [리눅스상에서 네트워크 구축]
 - 이더리움 설치
 $ sudo apt-get update
 $ sudo apt-get upgrade
 $ sudo apt-get install software-properties-common
 $ sudo add-apt-repository ppa:ethereum/ethereum
 $ sudo apt-get update
 $ sudo apt-get install ethereum
 - 네트워크 구축
  0x8ecde39F6B922AC364f3d122c42bA151cd9b497B : 소유주
  0xC29c3ac9d524755D4Df5F8AE3b9909bf43158077 : 주주
$ nano Genesis.json




3. 이더리움의 사설 네트워크 외부에서 연동하는 방법(PRC)
 - 전자지갑 구현
 1) RPC 접속을 통해서 명령을 전송하여 수행
 2) MIST 브라우저 (이더리움 GUI 툴) 수행
 3) node js 기반 client side에서 수행
 4) node js 기반 server side에서 수행 : restAPI
 5) node js 기반 socket.io를 이용한 실시간 통신으로 수행

4. 솔리디티 언어 이해 (이더리움 네트워크 상에 프로그램이 가미된 앱을 개발하는 언어)

5. DApp 구성 (Node 기반, 사설네트워크 + node 서비스 )
  - 전자지갑
  - 전자투표
  - 배팅시스템


  -원격접속
 $geth attach http://localhost:8123