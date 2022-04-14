const button = document.getElementById("btn-login");

button.addEventListener("click", function() {
   window.location.href="./user.html?user="+document.getElementById("user_id").value
});