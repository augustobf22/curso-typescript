import gamesRepository from "../repository/games-repository";
import { Game, CreateGame } from "./../protocols/game-protocol";

async function getGames(): Promise<Game[]> {
  const games = await gamesRepository.getGames();
  return games;
}

async function createGame(game: Game): Promise<void> {
  if (await gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: Game): Promise<boolean> {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  return result.length > 0 ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;