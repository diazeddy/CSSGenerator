const express = require('express')
const cors = require('cors');
const fs = require("fs");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '9999mb' }));

const checkDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
};

app.post("/api/capture", (req, res) => {
  const imageData = req.body.imageData;
  const imagePath = path.join(
    __dirname,
    "captured_images",
    `${Date.now()}.png`
  );

  checkDirectoryExists(imagePath);

  fs.writeFile(imagePath, imageData.split(",")[1], "base64", (err) => {
    if (err) {
      console.error("Error saving image:", err);
      res.status(500).send("Error saving image");
    } else {
      console.log(`Image saved to ${imagePath}`);
      res.sendStatus(200);
    }
  });
});





// app.get('/', async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT NOW()');
//     res.send(`PostgreSQL connected successfully. Current time: ${result.rows[0].now}`);
//     client.release();
//   } catch (error) {
//     console.error('Error executing query', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});