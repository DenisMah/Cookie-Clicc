$(document).ready(function () {
  $("#myForm").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
      },
      age: {
        required: true,
        number: true,
        min: 18,
        max: 100,
      },
    },
    messages: {
      name: "Please enter your name",
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
    },
    submitHandler: function (form) {
      try {
        $.blockUI({
          message:
            '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>',
        });

        //* Simulate an AJAX request
        setTimeout(function () {
          $(form)[0].reset();

          $.unblockUI();

          toastr.success("Data saved successfully!");
        }, 3000);
      } catch (error) {
        console.error("Error in submitHandler:", error);
        alert("An error occurred. Please try again later.");

        $.unblockUI();
      }
    },
  });
});
