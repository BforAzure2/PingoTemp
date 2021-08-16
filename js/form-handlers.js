/********* save contact to file start*******/
function saveContactData() {
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  // Get the data from each element on the form.
  fetch("https://api.apispreadsheets.com/data/15869/", {
    method: "POST",
    body: JSON.stringify({
      data: { Email: email.value, Message: message.value }
    })
  }).then(res => {
    if (res.status === 201) {
      // SUCCESS

      var x = document.getElementById("toast");
      x.style.visibility = "visible";
      x.innerHTML = "Thank you. We will contact you soon";
      setTimeout(function () {
        x.style.visibility = "hidden";
      }, 3000);

      email.value = "";
      message.value = "";
    } else {
      // ERROR
      var x = document.getElementById("toast");
      x.style.visibility = "visible";
      x.style.color = "red";
      x.innerHTML = "Error Sending Email";
      setTimeout(function () {
        x.style.visibility = "hidden";
      }, 3000);
    }
  });
}

/******save order data ********/
function saveOrderData() {
  $("#modal_2").modal("toggle");
  let email = document.getElementById("order-email");
  let phone = document.getElementById("phone");
  let uname = document.getElementById("usr-name");
  let entity = document.getElementById("entity");
  let purchaseVolume = document.getElementById("purchase-volume");
  let state = document.getElementById("state");
  let zipCode = document.getElementById("zip-code");
  let shipping = document.getElementById("shipping-address");

  // Get the data from each element on the form.
  fetch("https://api.apispreadsheets.com/data/15873/", {
    method: "POST",
    body: JSON.stringify({
      data: {
        Entity: entity.value,
        PurchaseVolume: purchaseVolume.value,
        Name: uname.value,
        Email: email.value,
        Phone: phone.value,
        "Shipping Address": shipping.value,
        State: state.value,
        ZipCode: zipCode.value
      }
    })
  }).then(res => {
    if (res.status === 201) {
      // SUCCESS

      email.value = "";

      entity.selectedIndex = 0;

      purchaseVolume.selectedIndex = 0;
      uname.value = "";
      phone.value = "";
      shipping.value = "";
      state.value = "";
      zipCode.value = "";
      var x = document.getElementById("toast");
      x.style.visibility = "visible";
      x.innerHTML = "Thank you. We will contact you soon";
      setTimeout(function () {
        x.style.visibility = "hidden";
        location.reload();
      }, 3000);
    } else {
      var x = document.getElementById("toast");
      x.style.visibility = "visible";
      x.style.color = "red";
      x.innerHTML = "Error Sending Order";
      setTimeout(function () {
        x.style.visibility = "hidden";
      }, 3000);
    }
  });
}

/*** code to control multiple modal at one time */
$(document).ready(function () {
  $(".modal").on("hidden.bs.modal", function (e) {
    //fire on closing modal box

    if ($(".modal:visible").length) {
      // check whether parent modal is opend after child modal close
      $("body").addClass("modal-open"); // if open mean length is 1 then add a bootstrap css class to body of the page
    }
  });
});
