[mini-project]
-----------------------------------------
[server]
-----------------------------------------
준비:
	-npm install express
	-npm install express-session
	-npm install mysql
	-npm init

실행: node.app.js

(app,js)
const db = {
  database: "dev_class",
  connectionLimit: 10,
  host: "192.168.219.102",
  user: "root",
  password: "mariadb"
};

(mariadb 11.3.x)
create schema 'vuedb'
--------------------------------------
[cilen]
--------------------------------------
npm install