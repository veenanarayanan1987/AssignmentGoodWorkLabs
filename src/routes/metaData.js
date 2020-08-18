import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  const fs = require('fs');
  var module = req.body.module;
  var screen = req.body.screen;
  fs.readFile('specification/'+module+'/'+screen+'.json', (err, data) => {
    if (err){
      console.log(err);
      return res.json({"message":'Invalid request'})
    }
    else{
      let student = JSON.parse(data);
      return res.json(student);
    }
  });
});

export default router;