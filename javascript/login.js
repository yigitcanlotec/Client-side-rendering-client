// Function to set a cookie
function setCookie(name, value) {
  // const expirationDate = new Date();
  // expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  // Format the cookie string
  // const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  const cookieString = `${name}=${value}; path=/`;
  // Set the cookie
  document.cookie = cookieString;
}



function sendLoginRequest(){

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const headers = {
        'Content-Type': 'application/json'
       
      }

    axios.post('http://127.0.0.1:3000/', {
        username: username,
        password: password
      })
      .then(function (response) {
        console.log(response)
        window.location.href = response.request.responseURL;
        setCookie('token', response.data);

      })
      .catch(function (error) {
        console.error("Error:" + error);
      });
}