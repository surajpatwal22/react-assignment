import React, { useState } from 'react'
import axios, { Axios } from "axios";
import '../App.css';
const Title = () => {
    const [names, setNames] = useState("");
    const [pokemonchose , setPokemonchose] = useState(false);
    const [pokemon, setPokemon] = useState(
       { name: "",
        species: "",
        img: "",
        hp: "",
        defence: "",
        attack: "",
        type: "",
    id : ""});
    const searchpokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${names}`).then((responce) => {
            console.log(responce);
            setPokemon(
                {
                    name: names,
                    species: responce.data.species.name,
                    img: responce.data.sprites.front_default,
                    hp: responce.data.stats[0].base_stat,
                    defence: responce.data.stats[2].base_stat,
                    attack: responce.data.stats[1].base_stat,
                    type: responce.data.types[0].type.name,
                    id : responce.data.id,

                })
                setPokemonchose(true);
        });
    }
    return (<>
        <div className='titlesxn'>
            <h1>Pokemon Status</h1>
            <input type='text' onChange={(e) => { setNames(e.target.value) }} />
            <button onClick={searchpokemon}>Search Pokemon</button>
        </div>
        <div className='displaysxn'>
            {
                !pokemonchose ? (<h3>Select a pokemon</h3> ):(
                    <>
                    <h3>NAME : {pokemon.species}</h3>
                    <img src={pokemon.img} alt="img#" />
                    <h3>RANK : {pokemon.id}</h3>
                    <h3>Type : {pokemon.type}</h3>
                    <h3>HP : {pokemon.hp}</h3>
                    <h3>ATTACK : {pokemon.attack}</h3>
                    <h3>DEFENCE : {pokemon.defence}</h3>

                    </>
                )

            }



        </div>
    </>

    )
}

export default Title