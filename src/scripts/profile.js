
// resgatando da sessionstorage

async function createHeader(){
    const avatar = document.querySelector(".imagem")
    const name = document.querySelector(".header__text")
    const dados = JSON.parse(sessionStorage.getItem("data"))
    
    name.textContent = dados.login;
    const imagem = dados.avatar_url;
    avatar.src = imagem
        
    const url = `http://api.github.com/users/${dados.login}`
    fetch(url);

    
}
createHeader()

async function createCards(){


    const dados = JSON.parse(sessionStorage.getItem("data"));
    const url = `http://api.github.com/users/${dados.login}/repos`
    let response = await fetch(url);
    let profile = await response.json();
    
    profile.forEach((elemento) => {
        console.log(elemento)
        const section = document.querySelector(".container__cards")
        const containerDiv = document.createElement("div")
        containerDiv.classList.add("container__div-cards")
        const title = document.createElement("h3");
        title.classList.add("cards__title") 
        const description = document.createElement("p")
        description.classList.add("cards__text") 
        const button = document.createElement("button")
        button.classList.add("cards__button")
        button.textContent = "Repositório"
    
    
        containerDiv.appendChild(title);
        containerDiv.appendChild(description);
        containerDiv.appendChild(button);
        section.appendChild(containerDiv);
        
        
        title.textContent = elemento.name
        description.textContent = elemento.description
    
        button.addEventListener('click', async (e)=>{
            e.preventDefault;
            window.open(elemento.html_url)
         
           
        })
    })

}
createCards()

async function replaceUser(){
    const button = document.getElementById("replace__button");

    button.addEventListener('click', async(e)=>{
        e.preventDefault
        window.history.back();
    })
}
replaceUser();
