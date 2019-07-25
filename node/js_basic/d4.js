//로그린 처리하는 일련의 과정을 함수로 구설하여 함수를 호출함으로써 아이디와 비번을 전달 
//결과를 돌려받는 구조로 업그레이드 한다 => 서버 개발자는 해당 함수를 호출함으로써 
//로그인 결과를 얻을 수 있다.
var mysql = require('mysql');

function selectLogin( uid, upw, cb ) {

  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'node'
  });
  connection.connect((err) => {
    if (err) {
    } else {
      let sql = `SELECT * FROM users WHERE uid=? AND upw=?;`
      connection.query(sql, [uid, upw], (err, rows) => {
        // console.log(err, rows[0].name)
        cb(err,rows)
        connection.end();



      })
    }
  });
}
//함수내부가 비동기 상황이니 내가 콜백함수를 하나 보낼테니 언제라도 결과가 나오면
//그 콜백함수를 호출해줘라 단, 호출할 때 결과를 같이 넣어서 호출해주면 굳

selectLogin('guest','2',( err, results )=>{
  if(results.length > 0)
  console.log('회원이군요.', results[0].name+'반갑네')
  else
  console.log('회원이 아니군요.', '아이디나 비밀번호를 확인해보시게')
  console.log('결과를 받음', results, err)
})


