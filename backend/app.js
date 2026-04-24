const express = require("express");
const cors = require("cors");
const bfhlRoutes = require("./routes/bfhlRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bfhl", bfhlRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));