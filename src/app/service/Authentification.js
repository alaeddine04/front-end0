class Authentification {
  successfulSignUp(username) {
    console.log("test")
    localStorage.setItem("username", username)
  }
  saveId(id) {
    console.log("test")
    localStorage.setItem("id", id)
  }

}
export default new Authentification();
