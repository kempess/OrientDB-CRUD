# OrientDB-CRUD
The following is an assignment to fulfill a database management course regarding OrientDB database connectivity in CRUD.

### Clone GIT .
```markdown
$git clone https://github.com/kempess/https://github.com/kempess/OrientDB-CRUD.git
```
### Buka Docker Dekstop (jika menggunakan docker)
```markdown
docker pull orientdb:latest
docker run -d --name orientdb -p 2424:2424 -p 2480:2480 -e ORIENTDB_ROOT_PASSWORD=rootpwd orientdb
```
> untuk mengakses studio tekan perintah dibawah ini :
 ```markdown
URL http://localhost:2480/
```
> untuk mengakses konsol jalankan perintah dibawah ini :
```markdown
docker exec -it orientdb  /bin/sh
lalu
#console.sh  jikalau ingin mengcheck server maka #server.sh
```
setelah menekan #console.sh maka akan ada tampilan seperti ini :
```markdown
ok
orientdb {server=remote:localhost}>   
```
> Mengconnect kan ke server :
```markdown
orientdb> connect remote:localhost root rootpwd 
```
```markdown
> Membuat database
CREATE DATABASE plocal:databases/mahasiswa root rootpwd
```
> Membuat Kelas "Book"
```markdown
CREATE CLASS Book IF NOT EXISTS EXTENDS V
```
> Membuat Property id
```markdown
CREATE PROPERTY Book.id IF NOT EXISTS INTEGER (MANDATORY TRUE)
```
_Keterangan : Id menjadi mandatory atau primary key pada CRUD ini_
> Membuat Property Title
```markdown
CREATE PROPERTY Book.title IF NOT EXISTS STRING
```
> Membuat Property Author
```markdown
CREATE PROPERTY Book.author IF NOT EXISTS STRING
```
> Membuat Property Year
```markdown
CREATE PROPERTY Book.year IF NOT EXISTS STRING
```
> Membuat Vertex pada class
```markdown
CREATE VERTEX BOOK SET id='<Number>', Title='<Judul Buku>', Author='<Penulis Buku', year='<Tahun>'
```
> Menampilkan data buku
```markdown
SELECT FROM BOOK
```
> Keluar dari orientdb dan mendisconnect kan server
```markdown
EXIT
```
# Buka Terminal di Visual Studio Code
### Install : Ejs, express dan orientjs
```markdown
$npm i express ejs orientjs 
```
### Jalankan app.js
```markdown
$node app.js
```
### Buka Localhost 3000
```markdown
http://localhost:3000/
```
Lalu akan ada tampilan seperti ini :
![Image of Screenshoot](https://github.com/kempess/OrientDB-CRUD/blob/master/img/Sample.jpeg)



##### Install Docker :
[Disini](https://www.docker.com/)

##### Install Visual Studio Code :
[Disini](https://code.visualstudio.com/)

##### Install Gitbash :
[Disini](https://git-scm.com/downloads)
atau
```markdown
git clone https://github.com/git/git
```

##### Install OrientDB :
[Disini](https://orientdb.org/download)

