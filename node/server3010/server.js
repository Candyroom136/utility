const express =require('express')
const app = express();

app.use(express.static('public'))
app.listen(3010, () => console.log('Running on port 3010'))