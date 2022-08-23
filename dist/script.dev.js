"use strict";

var _pokemon = require("./data/pokemon.js");

var cardContainer = document.querySelector(".card-container");

_pokemon.pokemonArray.forEach(function (pokemon) {
  var pokemonFirstLetter = pokemon.name.charAt(0).toUpperCase();
  var pokemonCutName = pokemon.name.slice(1);
  var pokemonName = pokemonFirstLetter + pokemonCutName;
  cardContainer.innerHTML = cardContainer.innerHTML + "\n    <div class=\"card\">\n        <img class=\"card__image\" src=\"".concat(pokemon.sprite, "\" alt=\"\"> \n        <div class=\"card__content\">\n            <div class=\"card__heading\">\n                ").concat(pokemonName, "\n            </div>\n            <div class=\"card__text\">\n                ").concat(pokemonName, " (#").concat(pokemon.id, ") is a ").concat(pokemon.types.join(" & "), " type pokemon.\n            </div>\n        </div>\n    </div>");
});