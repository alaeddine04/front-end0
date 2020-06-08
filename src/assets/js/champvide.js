function champvide() {

  var error = "";
  if (document.getElementById('user').value==""){
    error+="Entrer s'il vous plait votre Nom d'utilisateur \n";
    document.getElementById('nom').style.borderColor = "red";}
  if (document.getElementById('pass').value==""){
    error+="Entrer s'il vous plait votre mot de passe \n";
    document.getElementById('nom').style.borderColor = "red";}
  if (error != ""){
    alert(error);
    return false;
  }
}
