window.onload = function() {
  console.log('Load completed');
}
function submitForm(){
  // check the empty fields
  var q11=$('input[name="firstname"]').val()==='';
  var q12=$('input[name="lastname"]').val()==='';
  var q2=!$('input[name="years"]:checked').val();
  var q3=!$('input[name="q3-choice"]:checked').val();
  var q4=!$('#dropdown-question').val();
  var q5=!$('input[name="q5-choice"]:checked').val();
  var q6=!$('#rate').val();
  var q7=!$('input[name="q7-choice"]:checked').val();
  var q8=!$('input[name="q8-choice"]:checked').val();
  if (q11 || q12 || q2 || q3 || q4 || q5 || q6 || q7 || q8){
    alert("Please answer all questions");
    return false;
  }
  window.location.href = "submitted.html";
}
