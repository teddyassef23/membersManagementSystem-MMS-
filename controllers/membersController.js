const Member  = require('./../models/members');
const Payment  = require('./../models/payments');
// const membersFamily  = require('./../models/membersFamily');
// const address  = require('./../models/address');

module.exports = {
  // Get all members
  async getMembers(req, res) {
   
      const members = await Member.find();
      res.json(members);   
  },
  
  
  // Get member bi ID
  async getSingleMember(req, res) {
    try {
      const members = await Member.findOne({ _id: req.params.memberId });
      res.json(members.payments);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createMember(req, res) {
    try {
      const member = await Member.create(req.body);
      res.json(member);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
//++++++++++++++++++++++++++++++++++
  // var id = req.params.id;
  // var id2 = req.params.id2;
  // Insurance.update({_id:id, 'plan._id':id2}, {$push : 
  //     {'plan.$.rate_card' : req.body}
  // }, {upsert: true}, function(err, docs){
  // res.json(docs);
  // console.log(docs);
  // });
//+==================================


  async addPayment(req, res) {
   

    try {


      const member = await Member.updateOne({ _id: req.params.memberId },{$push :{'payments': req.body} },{upsert:true});
      res.json(member);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  






  async getPayments(req, res) {
    try{
      const payments = await Payment.find();
      res.json(payments);
    }
   catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
    
    
  },
  


}
