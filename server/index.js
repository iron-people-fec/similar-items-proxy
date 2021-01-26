const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use('/products/*',express.static('public'));
app.use('/css', express.static('public/styles.css'));

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});