//waits until dom content is loaded before checking if button is pushed or else it bugs
document.addEventListener('DOMContentLoaded', function() {
    let formValidation = document.getElementById("test");
    formValidation.addEventListener('click', checkForm);
});

//checks all the different patterns or conditions match before validating the submition
    function checkForm() 
    {
        let firstName = document.getElementById("fname").value;
        if (firstName.trim() === '') 
        {
            alert("First name must be filled");
            return false;
        }

        let lastName = document.getElementById("lname").value;
        if (lastName.trim() ==='') 
        {
            alert("Last name must be filled");
            return false;
        }

        let age = document.getElementById("age").value;
        if (age > 100 || age < 16) 
        {
            alert("Please put a valid age");
            return false;
        }

        let email = document.getElementById("email").value;
        var pattern = /@.*\./;
        if (!pattern.test(email)) 
        {
            alert("Email must contain '@' and a '.'");
            return false;
        }

        let phoneNumber = document.getElementById("pNumb").value;
        var phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;

        if(!phoneNumberPattern.test(phoneNumber))
        {
            alert("Phone number must resemble 999-999-9999");
            return false;
        }

        let textArea = document.getElementById("inquiries").value;
        if(textArea.trim()==='')
        {
            alert("Please fill out some info about your inquiry");
            return false;
        }

        document.getElementById("submit").style.backgroundColor="green";
        return true
    }