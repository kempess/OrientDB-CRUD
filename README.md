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
> Membuat database
```markdown
CREATE DATABASE plocal:databases/mahasiswa root rootpwd
```
> Membuat Kelas "Mahasiswa"
```markdown
CREATE CLASS Mahasiswa IF NOT EXISTS EXTENDS V
```
> Membuat Property id
```markdown
CREATE PROPERTY Mahasiswa.id IF NOT EXISTS INTEGER (MANDATORY TRUE)
```
_Keterangan : Id menjadi mandatory atau primary key pada CRUD ini_
> Membuat Property Nama
```markdown
CREATE PROPERTY Mahasiswa.name IF NOT EXISTS STRING
```
> Membuat Property Jurusan
```markdown
CREATE PROPERTY Mahasiswa.jurusan IF NOT EXISTS STRING
```
> Membuat Property Angkatan
```markdown
CREATE PROPERTY Mahasiswa.angkatan IF NOT EXISTS integer
```
> Membuat Property Dosen Pembimbing
```markdown
CREATE PROPERTY Mahasiswa.dospem IF NOT EXISTS STRING
```
> Membuat Vertex pada class
```markdown
CREATE VERTEX Mahasiswa SET id='<Number>', name='<nama mahasiswa>', jurusan='<Nama jurusan>', angkatan='<Tahun>', dospem='<dosen pembimbing>'
```
> Menampilkan data Mahasiswa
```markdown
SELECT FROM Mahasiswa
```
> Keluar dari orientdb dan mendisconnect kan server
```markdown
EXIT
```
>> Keterangan Docker
```markdown
Jika ingin menghapus vertex :
DELETE vertex <kode yang ingin dihapus (contoh: #21:0)

Jika ingin menghapus database :
DROP database <remote>:databases/<database kamu> <username> <password>

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
![Image of Screenshoot](https://github.com/kempess/OrientDB-CRUD/blob/master/img/Sample.png)



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

