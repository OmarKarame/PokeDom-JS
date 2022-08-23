import { pokemonArray } from "./data/pokemon.js";
const cardContainer = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
    let pokemonFirstLetter = pokemon.name.charAt(0).toUpperCase();
    let pokemonCutName = pokemon.name.slice(1);
    let pokemonName = pokemonFirstLetter + pokemonCutName;
    cardContainer.innerHTML = cardContainer.innerHTML + `
    <div class="card">
        <img class="card__image" src="${pokemon.sprite}" alt=""> 
        <div class="card__content">
            <div class="card__heading">
                ${pokemonName}
            </div>
            <div class="card__text">
                ${pokemonName} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type pokemon.
            </div>
        </div>
    </div>`;
});
    
