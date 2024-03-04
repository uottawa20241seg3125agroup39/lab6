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
  // let q8=!$('input[name="q8-choice"]:checked').val();
  if (q11 || q12 || q2 || q3 || q4 || q5 || q6 || q7 ){
    alert("Please answer all questions");
    return false;
  }
  // console.log($('#survey-body').serializeArray());
  let form=$('#survey-body').serializeArray();
  $.ajax({
    type: 'POST',
    url: '/submit',
    data:form,
    success: function(data){
      console.log(data);
      let name=$('input[name="firstname"]').val();
      name+=' '+$('input[name="lastname"]').val();
      if ('DBG::SUSPEND-RICK-ROLL'===$('#comments').val())
        return;
      window.location.href = `/submitted?name=${name}`;
    },
    error: function(data){
      console.log(data);
      console.log(form);
      alert('Error submitting the form');
    }
  })

  return false;
}
