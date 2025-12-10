import { players } from '../data/players.js';

export function getAllPlayers() {
    return players;
}

export const findPlayerById = (id) => {
    return players.find(player => player.id === id);
};

export function addPlayer(playerData) {
    players.push(playerData)
    return playerData
}


const playerData =     {
        id: players.length + 1,
        name: "momo ",
        position: "Defender",
        age: 25,
        goals: 0,
        assists: 0,
        matches: 0,
        nationality: "England"
    }