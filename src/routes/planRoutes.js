module.exports = (app) => {
    var router = require('express').Router();
    const plansController = require('../controllers/plansController.js');

    router.get('/api/getPlans',plansController.getPlans);
    router.post('/api/planActivate',plansController.planActivate);
    app.use('/', router);
};