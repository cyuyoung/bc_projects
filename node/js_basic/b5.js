//class, 객체 => 멤버 변수, 멤버 함수를 구성원으로 가진다
//js의 class 정의법은 총 4 + 1(모던스크립트) 방식
//1번 형태 =>객체 리터럴
//용도 => 일회성 객체, 이름이 없어요, 함수 호출이 진행될 때 넘길 데이터가 많으면 사용
//기호 => {} <- 자바스크립트의 객체
let obj = {
    name:'우리집',
    getName:function(){
        return this.name //멤버를 클래스 내에서 접근할 때는 this.멤버
    }
} //객체생성
console.log( obj )
// 객체 멤버들을 바깥쪽에서 사용시 => 객체명.변수, 객체명.함수
console.log( obj.name, obj.getName() )