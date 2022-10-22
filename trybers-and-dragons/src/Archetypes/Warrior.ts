import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.warriorCounter += 1;
  }

  get energyType() { return this._energyType; }

  static warriorCounter = 0;
  public static createdArchetypeInstances(): number {
    return this.warriorCounter;
  }
}