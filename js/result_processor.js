const db=require('./memdb');

const IGNORE=['comments','firstname','lastname'];

function receive(req,res) {
  for (let k in req.body) {
    if (IGNORE.includes(k))
      continue;
    db.increase(k,req.body[k]);
  }
  res.sendStatus(200);
}

module.exports=receive;
