import { Game, CreateGame } from "../protocols/game-protocol";
import { connection } from "../database/database";

async function getGames() {
  const result = await connection.query<Game>(`SELECT * FROM games`);
  return result.rows;
}

async function createGame(game: CreateGame) {
  return await connection.query<CreateGame>(`
  INSERT INTO games (title, platform) VALUES ($1, $2)`, 
  [game.title, game.platform]);
}

async function getGameByTitleAndPlatform(game: Game) {
  const { title, platform } = game;

  const result = await connection.query<Game[]>(`
  SELECT * FROM games WHERE title = $1 OR platform = $2`, 
  [title, platform]);

  return result.rows[0];
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;