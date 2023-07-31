const BusinessController = require('../controllers/business.controller');

module.exports = app => {
    // ALL BUSINESSES
    app.get('/api/business', BusinessController.findAll);

    // BUSINESS FORM
    app.post('/api/business/add', BusinessController.addBusiness);

    // ONE BUSINESS
    app.get('/api/business/:id', BusinessController.findOne);

    // UPDATE BUSINESS
    app.put('/api/business/:id', BusinessController.updateBusiness);

    // DELETE BUSINESS
    app.delete('/api/business/:id', BusinessController.deleteBusiness);
}