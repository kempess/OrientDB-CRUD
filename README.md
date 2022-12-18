# OrientDB-CRUD
The following is an assignment to fulfill a database management course regarding OrientDB database connectivity in CRUD.

```markdown
```

### Clone GIT .
```markdown
$git clone https://github.com/kempess/https://github.com/kempess/OrientDB-CRUD.git
```
### Buka Docker Dekstop (jika menggunakan docker)
```markdown
> docker pull orientdb:latest
> docker run -d --name orientdb -p 2424:2424 -p 2480:2480 -e ORIENTDB_ROOT_PASSWORD=rootpwd orientdb
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



### Install : Ejs, express dan orientjs pada terminal
```markdown
$npm i express ejs orientjs 
```


