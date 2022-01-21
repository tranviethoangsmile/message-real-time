const express = require ('express');
import configViews from './config/configViews';
const app = express();
const port = 3000;

configViews(app);
app.get('/', (rep,res) => {
    res.render("home.ejs")
})

app.listen(port, () => {
    console.log(`listening port http://localhost:${port}`);
})