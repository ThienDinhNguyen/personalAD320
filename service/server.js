const express = require("express");
const cors = require("cors");
const app = express();

// ignore cors rule
app.use(cors({ origin: "*", credentials: true }));

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Mark", lastName: "Bright" },
    { id: 2, firstName: "John", lastName: "Smith" },
    { id: 3, firstName: "Amy", lastName: "Martin" },
  ];

  res.status(200).send();

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
