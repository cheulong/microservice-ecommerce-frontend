import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
const PORT = process.env.PORT || 5000;

// app.get("/health", (req, res) => {
//   res.status(200).send("Product Service is healthy");
// });

app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});