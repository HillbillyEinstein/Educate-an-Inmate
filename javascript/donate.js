$(() => {
    //background-image 
    $('body').css({ 'background-image': "url('../images/backgroundDonate.png')", 'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-attachment': 'fixed' });

    /*put dashes in credit card number and zip. put forward slash in expiration date*/
    $('.dashesJS').keyup(function () {
        let dashes = $(this).val().split("-").join("");
        let forwardSlash = $(this).val().split("/").join("");
        //do this to the zip if they use 9 digits
        if ($(this).is('#zip')) {
            if (dashes.length > 0) {
                dashes = dashes.match(new RegExp('.{1,5}', 'g')).join("-");
            }
            $(this).val(dashes);
        }
        // and do this to the credit card
        if ($(this).is('#creditCard')) {
            if (dashes.length > 0) {
                dashes = dashes.match(new RegExp('.{1,4}', 'g')).join("-");
            }
            $(this).val(dashes);
        }
        // and do this to expiration date
        if ($(this).is('#expirationDate')) {
            if (forwardSlash.length > 0) {
                forwardSlash = forwardSlash.match(new RegExp('.{1,2}', 'g')).join("/");
            }
            $(this).val(forwardSlash);
        }
    });

    /* typed numbers only. since slashes and dashes are put in through a function, it is not a keypress */
    $('.numbersJS').keypress((e) => {
        let allowed = /[^0-9]/;

        //charcode 0-check that keycode exists 8-allow backspace
        let verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(allowed);
        if (verified) { e.preventDefault(); }
    });

    $('#submitBtn').on('click', (e) => {
        e.preventDefault();
        let $email = $('#email').val();
        let $name = $('#name').val();
        let $address = $('#address').val();
        let $city = $('#city').val();
        let $state = $('#state').val().toUpperCase();
        let $zip = $('#zip').val();
        let $donation = $('#donation').val();
        let $creditCard = $('#creditCard').val();
        let $expiration = $('#expirationDate').val();
        let $form = $('#form')[0];

        //capitalize the first letter of each word for the confirmation
        function capitalizeFirstLetter(word) {
            let newWord = word.toLowerCase().replace(/\b[a-z]/g, (letter) => {
                return letter.toUpperCase();
            });
            return newWord;
        }
        $name = capitalizeFirstLetter($name);
        $address = capitalizeFirstLetter($address);
        $city = capitalizeFirstLetter($city);

        // form validation && confirmation
        if (!$form.reportValidity || $form.reportValidity()) {
            $($form).addClass('hide');
            // add bootstrap classes
            $('#confirmationJS').append(`
            <div class="card backgroundColor3 text-white">
                <div class="card-body">
                <a href="../pages/donate.html" class="textColor1 underline float-right">Back</a>
                <h2 class="card-title text-center">Thank-you ${$name}</h2>
                <p class="card-text text-center">for your donation amount of $${$donation}. It will be charged to:</p><br>
                <p class="card-text ml-5">${$name}<br>${$address}<br>${$city}, ${$state} ${$zip}
                    <br><br>credit card number:<br>${$creditCard}<br><br>expiring on:<br>${$expiration}<br><br></p>
                    <p class="card-text">A confirmation email will be sent to:<br>${$email}</p>
                <a href="../index.html" class="textColor1 underline float-right">Home</a> 
                </div>
            </div>`).css('font-size', '30px');
        }
    });
});