const Business = require('../models/business.model');

module.exports = {
    // ALL BUSINESSES - READ ALL
    findAll: (req, res) => {
        Business.find({})
            .then((allBusinesses) => res.status(200).json(allBusinesses))
            .catch((err) => res.status(400).json(err));
    },

    // CREATE A BUSINESS
    addBusiness: (req, res) => {
        const { industry, name, address, phone, hours, service } = req.body;
        Business.create({
            industry: industry,
            name: name,
            address: address,
            phone: phone,
            hours: hours,
            service: service
        })
            .then(newBusiness => {
                res.status(201).json(newBusiness)
            })
            .catch((err) => {
                res.status(406).json(err);
            })
    },

    // READ A BUSINESS
    findOne: (req, res) => {
        Business.findOne({ _id: req.params.id })
            .then(Business => res.status(200).json(Business))
            .catch(err => res.status(400).json(err));
    },

    // UPDATE A BUSINESS
    updateBusiness: (req, res) => {
        Business.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedBusiness => res.status(201).json(updatedBusiness))
        .catch(err => {
            res.status(400).json(err);
        })
    },

    // DELETE A BUSINESS
    deleteBusiness: (req, res) => {
        Business.deleteOne({ _id:req.params.id })
            .then(deleteConfirmation => res.status(202).json(deleteConfirmation))
            .catch(err => res.status(400).json(err))
    }
}