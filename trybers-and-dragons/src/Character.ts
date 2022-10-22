import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
    this._name = name;
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy { return { ...this._energy }; }

  public receiveDamage(attackPoints: number): number {
    const dmg = attackPoints - this._defense;
    if (dmg > 0) this._lifePoints -= dmg;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  public attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp() {
    const attr = getRandomInt(1, 10);

    this._dexterity += attr;
    this._defense += attr;
    this._strength += attr;
    this._energy.amount = 10;

    const lvlUp = this._maxLifePoints + attr;

    if (lvlUp > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = lvlUp;
    }

    this._lifePoints = this._maxLifePoints;
  }
}