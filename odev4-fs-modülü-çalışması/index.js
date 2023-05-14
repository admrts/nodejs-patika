const fs = require("fs");

// dosya oluşturma ve içine değer yazma
fs.writeFile(
  "employees.json",
  `{"name": "John Doe", "salary": "2000$"}`,
  "utf8",
  (err) => {
    console.log(err);
  }
);

// dosya okuma

fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

// dosya güncelleme

fs.appendFile(
  "employees.json",
  `,\n{"name":"John Doe 2", "salary": 3000$}`,
  "utf8",
  (err) => {
    console.log(err);
  }
);

//dosya silme

fs.unlink("employees.json", (err) => {
  console.log(err);
});
