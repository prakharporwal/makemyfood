// function submitWaitListForm() {
//   var name = document.getElementById("full-name");
//   var email = document.getElementById("email");

//   if (!validateForm(name, email)) {
//   }

//   return;
// }

// USING PAGECLIP TO SUBMIT FORM

function validateForm() {
  let fullName = document.getElementById("full-name");
  let email = document.getElementById("email");

  if (fullName === "") {
    return false;
  }
  return validateEmail(email);
}

function validateEmail(mail) {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

$(".join-button-scroll").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#join-form-div").offset().top,
    },
    400
  );
});
