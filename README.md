# Mini Challenge ORM (ExpressJS & Sequelize)

Di challenge kali ini kita akan membuat API dengan express & ORM Sequelize.

## Contoh

Contoh penggunaan ORM di Express dapat dilihat di [https://github.com/binar-fullstack/express-api-orm](https://github.com/binar-fullstack/express-api-orm).

## Goal

- Kita akan membuat sebuah database (nama bebas).
- Dalam database ini kita akan memiliki sebuah Table `User` dengan 3 kolom yaitu: ID (Integer), Username (String), dan Password (String).
- Kita akan membuat 2 API: GET `/users` & POST `/users`.
- GET `/users` akan menampilkan daftar user yg ada di tabel.
- POST `/users` akan menambahkan user ke dalam tabel.

## Ketentuan

- Database yg digunakan dapat berupa database localhost maupun database online.
- Database harus dibuat menggunakan perintah `sequelize db:create`.
- Tabel harus dibuat menggunakan perintah `sequelize db:migrate`.
- Middleware yang digunakan adalah `express.json()`.
- Pengujian API GET `/users` & POST `/users` dilakukan menggunakan Postman.

## Pengumpulan

Hasil pengerjaan diupload ke akun Github masing-masing.
