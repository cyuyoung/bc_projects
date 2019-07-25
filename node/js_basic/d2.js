var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'node'
});
connection.connect((err) => {
  //게스트라는 문구를 출력하게 rows를 표현하시오
  if (err) {
    console.log('접속오류', err)
  } else {
    //쿼리 수행
    // connection.query( sql문, 파라미터(생략가능), (err, rows)=>{})
    let sql = `SELECT * FROM users 
    WHERE uid='guest' AND upw='1';`
    connection.query( sql, (err, rows)=>{
      console.log( err, rows[0].name )
      connection.end();
      console.log('접속종료')
    
    
    })
  }
});



