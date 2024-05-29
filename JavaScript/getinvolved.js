
$('#myForm').validate({
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 20
        }
    },
    messages: {
        name: 'Please enter your name',
        email: {
            required: 'Please enter your email',
            email: 'Please enter a valid email address'
        },
        password: {
            required: 'Please enter a password',
            minlength: 'Password must be at least 8 characters long',
            maxlength: 'Password cannot be longer than 20 characters',
        }
    },
    submitHandler: function (form) {
        try {
            // Block UI on form submission
            $.blockUI({ message: '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>' });
            // Reset the form
            $(form)[0].reset();
            // Unblock UI after request is complete

            setTimeout(function(){
                console.log('time out')
                $.unblockUI();
            }, 3000)
            
        } catch (error) {
            console.error('Error in submitHandler:', error);
            alert('An error occurred. Please try again later.');
            // Unblock UI after request is complete
            $.unblockUI();
        }
    }
});