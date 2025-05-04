document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const passwort = document.getElementById("password").value;

  // Hier würdest du die Daten an dein Backend schicken
  console.log("E-Mail:", email);
  console.log("Passwort:", passwort);

  // Weiterleitung
  window.location.href = "katze.html";
});
