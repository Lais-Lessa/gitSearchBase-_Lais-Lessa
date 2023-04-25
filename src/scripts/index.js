
async function response() { //declaramos essa função como assincrona
    const button = document.querySelector(".button__secundary");
  
    button.addEventListener("click", async (e) => { // aqui tbm declaramos como assincrona 

      e.preventDefault();

      const userGit = document.getElementById("input").value;
  
      const url = `http://api.github.com/users/${userGit}`;
      
      let response = await fetch(url); //aqui utilizamos o await pra armazenar a resposta do fetch somente quando a promisse for concluida
      
      if (!response.ok) { // verificamos a resposta condicionando a pagina de erro se a resposta for NOK
        window.location.href = "./src/pages/error.html";
        return;
      }
      
      let profile = await response.json(); // armazenamos a resposta em json na variavel profile
      sessionStorage.setItem("data", JSON.stringify(profile));
      sessionStorage.clear 
      window.location.href = "./src/pages/profile.html"; // direcionamos pagina do perfil
    });
  }
  
  response()


