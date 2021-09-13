# Mini Challenge ORM (ExpressJS & Sequelize)

Di challenge kali ini kita akan membuat API dengan express & ORM Sequelize.

## Run

- Jalankan `npm install` & `npm start`
- terdapat 2 API: GET `/users` & POST `/users`.
- GET `/users` akan menampilkan daftar user yg ada di tabel.
- POST `/users` akan menambahkan user ke dalam tabel.

## Ketentuan

- Database yg digunakan dapat berupa database localhost.
- Database harus dibuat menggunakan perintah `sequelize db:create`.
- Tabel harus dibuat menggunakan perintah `sequelize db:migrate`.
- Middleware yang digunakan adalah `express.json()`.
- Pengujian API GET `/users` & POST `/users` dilakukan menggunakan Postman.
