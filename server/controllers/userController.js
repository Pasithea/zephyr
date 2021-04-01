const bcrypt = require('bcrypt');
const db = require('../db/database');

const saltRounds = 10;

exports.createUser = (req, res, next) => {
  const { email, password, f_name, l_name } = req.body;

  const userQuery = 'INSERT INTO users (email, password, f_name, l_name) VALUES ($1, $2, $3, $4) RETURNING *'

  bcrypt.hash(password, saltRounds, ((err, hash) => {
    if(err) return next(err);

    const values = [email, hash, f_name, l_name];
    console.log('values:', values);

    db.query(userQuery, values)
      .then((data) => {
        res.locals.user = data.rows[0];
        res.locals.signup = true;
        return next();
      })
      .catch((err) => next({
        log: 'Error in userController.createUser: Failed to create user',
        status: 400,
        message: { err: 'Unable to create user in database' },
      }));
  }));
}

exports.verifyUser = (req, res, next) => {

  const { email, password } = req.body;

  if (!email || !password) return res.status(404).json({ success: false, message: 'All fields must be entered' });

  const values = [email];
  console.log('email:', email);
  const checkUser = 'SELECT * FROM users WHERE email = $1';

  db.query(checkUser, values)
    .then(data => {
      // If there is no email found in the database, then send error message
      if (!data.rows[0]) return res.status(404).json({ success: false, message: 'User email not found. Please try another email to login or create a new account.'});

      const hash = data.rows[0].password;
      bcrypt.compare(password, hash, ((err, results) => {
        if (results) {
          console.log('logged in!')
          res.locals.login = true;
          res.locals.fname = data.rows[0].f_name; 
          return next();
        }
        return res.status(404).json({ success: false, message: 'Incorrect password. Please try again.' });
      }))
    })
    .catch((err) => next({
      log: 'Error in userController.login: Failed to find user',
      status: 400,
      message: { err: 'No user found in database' },
    }));
};