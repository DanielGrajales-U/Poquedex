const cards = document.querySelector(".cards")
const getCard = ()=>{
    const card = document.querySelectorAll(".card")
    return card
}
console.log(getCard().length)


const setPokemon = async ()=>{
    for(let i = 0; i <= 20;i++){
        await getPokemons(i)
    }
}

const getPokemons = async (id)=>{
    const url =`https://pokeapi.co/api/v2/pokemon/${id}` 
    const res = await fetch(url)
    const pokemon =  res.json()
    createPokemon(pokemon)
}


const createPokemon = (pokemon) =>{

    let name;
    let type;
    let img
    let id;
    let idTransform;
    const pokemonType = pokemon.then((pok)=>{
        type = pok.types.map(x=>x.type.name)
        name = pok.name[0].toUpperCase()  + pok.name.slice(1)
        img = pok.sprites.front_default;
        id = pok.id
        idTransform = id.toString();
        if(idTransform.length == 1){
            idTransform = `#00${id}`
        }else if(idTransform.length == 2){
            idTransform =`#0${id}`
        }
        cardsInherHtml()
    })
    const cardsInherHtml = async ()=>{
        await name
        await type
        await img
        if(type[0] === 'fire'){
            cards.innerHTML += `
            <div class="card fire">
                <img src="${img}">
                <h4 class="name"> ${name}</h4>
                <p class="type"> Tipo: ${type}</p>
                <p>${idTransform}</p>         
            </div>
        `
        }else if(type[0] === 'grass'){
            cards.innerHTML += `
            <div class="card grass">
                <img src="${img}">
                <h4 class="name"> ${name}</h4>
                <p class="type"> Tipo: ${type}</p>
                <p>${idTransform}</p>         
            </div>
        `
        }else if(type[0] === 'water'){
            cards.innerHTML += `
            <div class="card water">
                <img src="${img}">
                <h4 class="name"> ${name}</h4>
                <p class="type"> Tipo: ${type}</p>
                <p>${idTransform}</p>         
            </div>
        `
        }else if(type[0] === 'normal'){
            cards.innerHTML += `
            <div class="card normal">
                <img src="${img}">
                <h4 class="name"> ${name}</h4>
                <p class="type"> Tipo: ${type}</p>
                <p>${idTransform}</p>         
            </div>
        `
        }else if(type[0] === 'bug'){
            cards.innerHTML += `
            <div class="card bug">
                <img src="${img}">
                <h4 class="name"> ${name}</h4>
                <p class="type"> Tipo: ${type}</p>
                <p>${idTransform}</p>         
            </div>
        `
        }
    }
   

}

setPokemon()