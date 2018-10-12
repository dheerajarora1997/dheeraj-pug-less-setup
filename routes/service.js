const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('services/services');
});

router.get('/packers-and-movers', (req, res) => {
  res.render('service/packers-and-movers');
});

router.get('/home-shifting', (req, res) => {
  res.render('service/home-shifting');
});

router.get('/corporate-relocation', (req, res) => {
  res.render('service/corporate-relocation');
});

router.get('/industrial-relocation', (req, res) => {
  res.render('service/industrial-relocation');
});

router.get('/logistics', (req, res) => {
  res.render('service/logistics');
});

router.get('/single-car-carrier', (req, res) => {
  res.render('service/single-car-carrier');
});

router.get('/services/storage', (req, res) => {
  res.render('service/storage');
});

router.get('/services/warehouse', (req, res) => {
  res.render('service/warehouse');
});

module.exports = router;
