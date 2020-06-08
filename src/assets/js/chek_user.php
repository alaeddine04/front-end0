mysql_connect("http://localhost:8080","root","");
mysql_select_db("loginavailble");

if(isset($_POST['login'])){
  login=mysql_real_escape_string($_POST['login'])
  if(!empty($login)){
  $query= mysql_query(" SELECT * FROM benevol WHERE login ='$login'");
  $login_result = mysql_num_rows($query);
  if($login_result==0){
  echo "login valide" ;
  }
  else{
   echo "Ce login existe deja!";
  }
  }
}
