var express = require('express');
var app = express();

app.get('/matches', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"code": 200, "data":[{"id": 1, "invite_date":"2016-02-04 03:49:00", "first_name":"Jane", "age": 26, "occupation": "Barista", "image": "https://graph.facebook.com/76377189413/picture?width=160&height=160"},{"id": 2,"first_name":"Jill", "invite_date":"2016-02-05 04:03:00", "age": 28, "occupation":"Model", "image": "https://graph.facebook.com/37419699200/picture?width=160&height=160"}]}');
});

app.post('/sendmessage', function (req, res) {
    setTimeout(function() {
        res.set('Content-Type', 'application/json');
        res.send('{"code": 200}');
    }, 2000)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
