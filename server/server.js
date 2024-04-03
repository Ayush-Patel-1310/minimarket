const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Dome');
});
const db = mysql.createConnection({
    host: 'localhost',
    port: '8115',
    user: 'root',
    password: '',
    database:'abatch'
});

app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    const sql = 'SELECT * FROM products WHERE product_name LIKE ?';
    db.query(sql, [`%${searchTerm}%`],(err, results) => {
      if (err) {
        console.error('Error executing search query:', err);
        res.status(500).json({ error: 'An error occurred while searching' });
        return;
      }
      console.log(results);
      res.json(results);
    });
  });

app.get('/data', (req, res) => {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });
});

app.post('/signup', (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    const newUser = { name, email, password };
  
    db.query('INSERT INTO user SET ?', newUser, (error, results) => {
      if (error) {
        console.error('Error inserting user:', error);
        res.status(500).send('Error inserting user');
      } else {
        console.log('User inserted successfully');
        res.status(200).send('User inserted successfully');
      }
    });
  });

// Login Route
app.post('/login', (req, res) => {
    const { lemail, lpassword } = req.body;
    console.log(req.body);
    db.query('SELECT * FROM user WHERE email = ?', [lemail], (error, results) => {
        console.log(results);
      if (error) {
        console.error('Error selecting user:', error);
        res.status(500).send('Error selecting user');
        return;
      }
  
      if (results.length === 0) {
        res.status(401).send('User not found');
        return;
      }
  
      const user = results[0];
  
      // Compare the provided password with the password from the database
      if (lpassword === user.password) {
        res.status(200).send('Login successful');
      } else {
        res.status(401).send('Invalid password');
      }
    });
  });

app.listen(5000, (err) => {
    if(!err){
        console.log("Connected");
    }
});