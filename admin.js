const express = require('express');
const { Client } = require('pg');

const connectionString = 'postgres://:@localhost/v2';

const router = express.Router();

function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/login');
}

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function data(req, res, next) {
  const client = new Client({
    connectionString,
  });
  await client.connect();

  try {
    const result = await client.query('SELECT * FROM orders');

    const { rows } = result;
    return res.render('admin', { rows, showLogin: false });
  } catch (err) {
    console.error('Error selecting', err);
    return next(err);
  } finally {
    await client.end();
  }
}

async function download(req, res, next) {
  const client = new Client({
    connectionString,
  });
  await client.connect();

  try {
    const result = await client.query('SELECT * FROM orders');

    const { rows } = result;
    const header = 'date;name;email;amount;ssn';
    const body = rows.map(row => `${row.datetime};${row.name};${row.email};${row.amount};${row.ssn}`).join('\n');

    res.type('text/csv');
    res.send([header, body].join('\n'));
    return res.end();
  } catch (err) {
    console.error('Error selecting', err);
    return next(err);
  } finally {
    await client.end();
  }
}

router.get('/', ensureLoggedIn, catchErrors(data));
router.get('/download', ensureLoggedIn, catchErrors(download));

module.exports = router;
