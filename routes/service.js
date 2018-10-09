const express = require('express');

const router = express.Router();

router.get('/services/packers-and-movers', (req, res) => {
  res.render('service/packers-and-movers');
});

router.get('/services/home-shifting', (req, res) => {
  res.render('service/home-shifting');
});

router.get('/services/corporate-relocation', (req, res) => {
  res.render('service/corporate-relocation');
});

router.get('/services/industrial-relocation', (req, res) => {
  res.render('service/industrial-relocation');
});

router.get('/services/logistics', (req, res) => {
  res.render('service/logistics');
});

router.get('/services/single-car-carrier', (req, res) => {
  res.render('service/single-car-carrier');
});

router.get('/services/storage', (req, res) => {
  res.render('service/storage');
});

router.get('/services/warehouse', (req, res) => {
  res.render('service/warehouse');
});

module.exports = router;
