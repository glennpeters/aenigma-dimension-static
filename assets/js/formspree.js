
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements 

    var form = document.getElementById("mail-form");
    var submit = document.getElementById("mail-form-submit");
    // var reset = document.getElementById("mail-form-reset");
    var status = document.getElementById("mail-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        submit.style = "display: none ";
        status.innerHTML = "Thanks!  I'll get back to you as soon as I can.";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });

    form.addEventListener("reset", function (ev) {
        submit.style = "display: inline-block ";
        status.innerHTML = "";
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
