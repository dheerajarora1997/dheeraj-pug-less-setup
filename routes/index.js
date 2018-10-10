const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('common/landing', { title: 'HomePage' });
});

router.get('/contact', (req, res) => {
  res.render('common/contact', { title: 'contact'});
});

router.get('/about', (req, res) => {
  res.render('common/about');
});

router.get('/portfolio', (req, res) => {
  res.render('common/portfolio');
});

router.get('/testimonial', (req, res) => {
  res.render('common/testimonial');
});

module.exports = router;
