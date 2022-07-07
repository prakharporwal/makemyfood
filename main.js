function submitWaitListForm() {
  var name = document.getElementById("full-name");
  var email = document.getElementById("email");

  if (!validateForm(name, email)) {
  }

  trigger;

  return;
}

function validateForm() {}

$(".join-button-scroll").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#join-form-div").offset().top,
    },
    "slow"
  );
});
