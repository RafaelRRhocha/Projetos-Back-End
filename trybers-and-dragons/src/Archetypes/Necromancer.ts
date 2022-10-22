import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.necromancerCounter += 1;
  }

  get energyType() { return this._energyType; }

  static necromancerCounter = 0;
  public static createdArchetypeInstances(): number {
    return this.necromancerCounter;
  }
}