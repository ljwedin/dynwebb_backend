var express = require('express');
var router = express.Router();
const path = require('path');

const loginError = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Logga in</title>
        <link rel="stylesheet" href="./stylesheets/style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="main">
            <h1>Logga in som admin</h1>
            <form method="POST">
                <input type="password" name="password" id="password" />
                <input type="submit" id="loginBtn" value="Logga in" />
                <p>Fel lösenord! Prova igen.</p>
            </form>
        </div>
    </body>
    </html>`;

router.get('/', (req, res, next) => {
    res.sendFile('login.html', { root: './admin'});
});

router.post('/', (req, res) => {
    if (req.body.password === 'admin') {
        res.sendFile('admin.html', {root: './admin'});
    } else {
        res.send(loginError);
    }
})

module.exports = router;