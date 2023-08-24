import Battle from './Battle';
// import Character from '../Character';
// import Monster from '../Monster';
import SimpleFighter from '../Fighter/SimpleFighter';
import Fighter from '../Fighter';

export default class PVE extends Battle {
  private _enemies: (SimpleFighter | Fighter)[];
  private _player: Fighter;

  constructor(player: Fighter, enemies: (SimpleFighter | Fighter)[]) {
    super(player);
    this._enemies = enemies;
    this._player = player;
  }

  fight(): number {
    this._enemies.forEach((enemie) => {
      while (this._player.lifePoints > 0 && enemie.lifePoints > 0) {
        this._player.attack(enemie);
        enemie.attack(this._player);
      }
    });
    return super.fight();
  }
}