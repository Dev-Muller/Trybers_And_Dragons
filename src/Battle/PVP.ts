import Battle from './Battle';
import { SimpleFighter } from '../Fighter';

export default class PVP extends Battle {
  private _player1: SimpleFighter;
  private _player2: SimpleFighter;

  constructor(player1: SimpleFighter, player2: SimpleFighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    while (this._player1.lifePoints > 0) {
      this._player1.attack(this._player2);
      if (this._player2.lifePoints <= 0) {
        return 1;
      }
      this._player2.attack(this._player1);
      if (this._player1.lifePoints <= 0) {
        return -1;
      }
    }

    return 0;
  }
}