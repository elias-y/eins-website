function handleLogin(event) {
  event.preventDefault(); // Verhindert Seitenreload

  const email = document.getElementById("email").value;
  const passwort = document.getElementById("password").value;

  // Fake-Daten zum Testen
  if (email === "test@example.com" && passwort === "123456") {
    alert("Login erfolgreich 🎉");
    // Weiterleitung z. B.: window.location.href = "dashboard.html";
  } else {
    alert("Falsche Zugangsdaten ❌");
  }
}
