import mysql from 'mysql';

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'vakaravaditajs',
});

db.connect((error) => {
  if(error){
    throw error;
  }
  console.log('MySql connected...')
});

export default db;
