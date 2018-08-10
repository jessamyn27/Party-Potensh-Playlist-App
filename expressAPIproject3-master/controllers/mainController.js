const express = require('express');
const router = express.Router();
const Party = require('../models/party');
const User = require('../models/user');

//INDEX ROUTE
 router.get('/', async (req, res, next) => {
  console.log(req.session, ' this is get all')
     try  {
      const allParties = await Party.find();

      res.json({
        status: 200,
        data: allParties
      })

    } catch (err){
      res.send(err)
    }
});


// CREATE new party
router.post('/', async (req, res) => {
  try {
    console.log(req.body, ' this is req.body');
    const findUser = User.findById(req.session.userId);
    const createdParty= await Party.create(req.body);
    const [foundUser, createParty] = await Promise.all([findUser, createdParty]);
    foundUser.hostedParties.push(createdParty);
    await foundUser.save();
    res.json({
      status: 200,
      data: createdParty
    });
  } catch(err){
    console.log(err);
    res.send(err);
  }
});




//Get party
router.get('/:id', async (req, res, next) => {
     try  {

        const foundParty = await Party.findById(req.params.id);
        res.json({
        status: 200,
        data: getParty
        });

      } catch (err){
        res.send(err);
      }



});


//Update party
router.put('/:id', async (req, res) => {
  try {
    const updateParty = await Party.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updateParty
    });
  } catch(err){
    res.send(err)
  }
});


// Delete party
router.delete('/:id', async (req, res) => {
  try {
     const deletedParty = await Party.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedParty
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
