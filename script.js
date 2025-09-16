// task one starts here 
  document
        .getElementById("createAccountForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const username = document.getElementById("username").value.trim();
          const password = document.getElementById("password").value;
          const confirmPassword =
            document.getElementById("confirmPassword").value;
          const errorMessage = document.getElementById("error-message");

          if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            return;
          }

          errorMessage.textContent = "";

          alert("Account created successfully for username: " + username);

          this.reset();
        });
// task one ends here 



// -------------
// task two starts here 
 document.addEventListener("DOMContentLoaded", function () {
        const namePattern = /^[A-Za-z\s]+$/;

        function restrictToLetters(field) {
          field.addEventListener("input", function () {
            this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
            this.classList.remove("is-invalid");
          });
        }

        const nameFields = [
          { id: "first_name_checkout", errorId: "first-name-checkout-error" },
          { id: "last_name_checkout", errorId: "last-name-checkout-error" },
          { id: "first_name_profile", errorId: "first-name-profile-error" },
          { id: "last_name_profile", errorId: "last-name-profile-error" },
        ];

        nameFields.forEach((item) => {
          const field = document.getElementById(item.id);
          restrictToLetters(field);
        });

        // Checkout form validation
        document
          .getElementById("checkout-form")
          .addEventListener("submit", function (e) {
            e.preventDefault();
            let valid = true;

            const firstName = document.getElementById("first_name_checkout");
            const lastName = document.getElementById("last_name_checkout");
            const phone = document.getElementById("phone_checkout");

            if (!namePattern.test(firstName.value.trim())) {
              firstName.classList.add("is-invalid");
              valid = false;
            } else {
              firstName.classList.remove("is-invalid");
            }

            if (!namePattern.test(lastName.value.trim())) {
              lastName.classList.add("is-invalid");
              valid = false;
            } else {
              lastName.classList.remove("is-invalid");
            }

            if (phone.value.trim() === "") {
              phone.classList.add("is-invalid");
              valid = false;
            } else {
              phone.classList.remove("is-invalid");
            }

            if (valid) {
              alert("Order placed successfully!");
              this.reset();
            }
          });

        // Profile form validation
        document
          .getElementById("profile-form")
          .addEventListener("submit", function (e) {
            e.preventDefault();
            let valid = true;

            const firstName = document.getElementById("first_name_profile");
            const lastName = document.getElementById("last_name_profile");

            if (!namePattern.test(firstName.value.trim())) {
              firstName.classList.add("is-invalid");
              valid = false;
            } else {
              firstName.classList.remove("is-invalid");
            }

            if (!namePattern.test(lastName.value.trim())) {
              lastName.classList.add("is-invalid");
              valid = false;
            } else {
              lastName.classList.remove("is-invalid");
            }

            if (valid) {
              alert("Profile updated successfully!");
              this.reset();
            }
          });
      });
// task two ends here 