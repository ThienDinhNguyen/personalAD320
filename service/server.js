const express = require("express");
const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Mark", lastName: "Bright" },
    { id: 2, firstName: "John", lastName: "Smith" },
    { id: 3, firstName: "Amy", lastName: "Martin" },
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
