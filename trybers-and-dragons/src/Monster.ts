import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() { return this._lifePoints; }

  get strength() { return this._strength; }

  public receiveDamage(attackPoints: number): number {
    const dmg = attackPoints - this.lifePoints;
    if (dmg > 0) this._lifePoints -= dmg;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}