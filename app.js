
const express = require('express');
//const ejs = require('ejs');
const bp = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const login = require('./loginOps');

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/javascript', express.static(path.join(__dirname, 'javascript')));

app.set('view engine', 'ejs');
app.use(bp.urlencoded({ extended: false }));
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/etkinlikolustur', login.userLogin);
app.get('/guncelle', login.userGuncelle);

app.post('/guncelle', login.Guncelle);

app.post('/etkinlikolustur', login.userLogin);
app.get('/gozat', login.userGozAt);
app.get('/oturumac', login.userOturumAc);
app.post('/etkinlikleregozat', login.userGozAt);
app.post('/oturumac', login.userOturumAc);


app.listen(port, () => console.log(`Port Çalışıyor :  ${port}!`));
