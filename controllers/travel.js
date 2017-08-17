const express = require('express');
const router = express.Router();
const Travel = require ('../models/travel.js');

router.get('/', (req,res)=>{
  Travel.find({}, (err, foundTravel)=>{
    res.json(foundTravel);
  });
});

router.post('/', (req, res)=> {
  console.log(req.body)
    Travel.create(req.body, (err, createdTravel)=> {
      res.json(createdTravel)
    });
});

router.delete('/:id', (req,res)=>{
  Travel.findByIdAndRemove(req.params.id, (err, deletedTravel)=> {
    res.json(deletedTravel)
  });
});

router.put('/:id', (req,res)=> {
  Travel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTravel)=> {
     res.json(updatedTravel);
  });
});

module.exports = router;
