import mysql from 'mysql';

import {dbconfig} from '../../config/database';

const db = mysql.createConnection(dbconfig);

db.connect((error) => {
  if(error){
    throw error;
  }
  console.log('MySql connected...')
});

export default db;
