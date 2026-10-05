const form =
    document.getElementById("registrationForm");

const message =
    document.getElementById("message");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const email =
        document.getElementById("email").value.trim();


    const confirmEmail =
        document.getElementById("confirmEmail").value.trim();


    const userId =
        document.getElementById("userId").value.trim();


    const confirmUserId =
        document.getElementById("confirmUserId").value.trim();


    const lastName =
        document.getElementById("lastName").value.trim();


    const firstName =
        document.getElementById("firstName").value.trim();


    // Check required fields

    if (
        !email ||
        !confirmEmail ||
        !userId ||
        !confirmUserId ||
        !lastName ||
        !firstName
    ) {

        showMessage(
            "Please fill in all required fields.",
            "red"
        );

        return;
    }


    // Check email

    if (email !== confirmEmail) {

        showMessage(
            "Email addresses do not match.",
            "red"
        );

        return;
    }


    // Check User ID

    const userIdPattern =
        /^[A-Za-z][A-Za-z0-9_]{7,19}$/;


    if (!userIdPattern.test(userId)) {

        showMessage(
            "User ID must be 8-20 characters, start with a letter, and contain only letters, numbers, or underscores.",
            "red"
        );

        return;
    }


    // Confirm User ID

    if (userId !== confirmUserId) {

        showMessage(
            "User IDs do not match.",
            "red"
        );

        return;
    }


    // Successful validation

    showMessage(
        "Registration information is valid!",
        "green"
    );

});


function showMessage(text, color) {

    message.textContent = text;

    message.style.color = color;

}
