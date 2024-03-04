const mem={};

function increase(question,rate){
  if (!(question in mem)) {
    mem[question] = {};
  }
  if (!(rate in mem[question])) {
    mem[question][rate] = 0;
  }
  mem[question][rate]++;
  console.log(`new data registered for ${question} . ${rate} : ${mem[question][rate]}`);
}
function get(question,rate){
  if (!question in mem) {
    return 0;
  }
  if (!rate in mem[question]) {
    return 0;
  }
  return mem[question][rate];
}
module.exports={increase,get};
