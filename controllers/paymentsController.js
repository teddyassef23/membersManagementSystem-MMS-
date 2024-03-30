const Payment  = require('./../models/payments');


module.exports = {
    // Get all payments
    async getPayments(req, res) {
     
        const payments = await Payment.find();
        res.json(payments);
      
      
    },
    
    
    // Get payment bi ID
    async getSinglePayment(req, res) {
      try {
        const payments = await this.Payment.findOne({ _id: req.params.paymentsId });
        res.json(payments);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // create a new user
    async createPayment(req, res) {
      try {
        const payment = await Payment.create(req.body);
        res.json(payment);
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
    }   
  
  
  }
  