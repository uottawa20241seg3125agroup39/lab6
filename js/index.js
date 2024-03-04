window.onload = function() {
  console.log('Load completed');
}
function submitForm(){
  // check the empty fields
  let q11=$('input[name="firstname"]').val()==='';
  let q12=$('input[name="lastname"]').val()==='';
  let q2=!$('input[name="years"]:checked').val();
  let q3=!$('input[name="q3-choice"]:checked').val();
  let q4=!$('#dropdown-question').val();
  let q5=!$('input[name="q5-choice"]:checked').val();
  let q6=!$('#rate').val();
  let q7=!$('input[name="q7-choice"]:checked').val();
  let q8=!$('input[name="q8-choice"]:checked').val();
  if (q11 || q12 || q2 || q3 || q4 || q5 || q6 || q7 || q8){
    alert("Please answer all questions");
    return false;
  }
  window.location.href = "submitted.html";
}
