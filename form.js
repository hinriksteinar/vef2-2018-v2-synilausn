const express = require('express');
const { check, validationResult } = require('express-validator/check');

const xss = require('xss');

const { Client } = require('pg');

const connectionString = 'postgres://:@localhost/v2';

const router = express.Router();

function form(req, res) {
  const data = {};
  res.render('form', { data });
}

const formValidation = [
  check('name')
    .isLength({ min: 1 })
    .withMessage('Nafn má ekki vera tómt')
    .trim(),

  check('email')
    .isLength({ min: 1 })
    .withMessage('Netfang má ekki vera tómt'),

  check('email')
    .isEmail()
    .withMessage('Netfang verður að vera netfang'),

  check('ssn')
    .isLength({ min: 1 }).withMessage('Kennitala má ekki vera tóm'),
  check('ssn')
    .matches(/^[0-9]{6}-?[0-9]{4}$/).withMessage('Kennitala verður að vera á formi 000000-0000'),

  check('amount').isInt({ gt: 0 }).withMessage('Fjöldi verður að vera tala, stærri en 0'),
];

async function saveToDb(data) {
  const client = new Client({
    connectionString,
  });

  await client.connect();

  const query = 'INSERT INTO orders(name, email, ssn, amount) VALUES($1, $2, $3, $4)';
  const values = [data.name, data.email, data.ssn, data.amount];

  try {
    await client.query(query, values);
  } catch (err) {
    throw err;
  } finally {
    await client.end();
  }

  return true;
}

async function formPost(req, res, next) {
  // fá öll gögn úr formi
  const {
    body: {
      name = '',
      email = '',
      ssn = '',
      amount = 0,
    } = {},
  } = req;

  // öll gögn hreinsuð úr formi
  const data = {
    name: xss(name),
    email: xss(email),
    ssn: xss(ssn),
    amount: xss(amount),
  };

  const validation = validationResult(req);

  if (!validation.isEmpty()) {
    const errors = validation.array();
    return res.render('form', { errors, data });
  }

  try {
    await saveToDb(data);
  } catch (err) {
    return next(err);
  }

  return res.redirect('/thanks');
}

function thanks(req, res) {
  return res.render('thanks');
}

router.get('/', form);
router.post('/', formValidation, formPost);
router.get('/thanks', thanks);

module.exports = router;
