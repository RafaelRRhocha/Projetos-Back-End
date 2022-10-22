import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.rangerCounter += 1;
  }

  get energyType() { return this._energyType; }

  static rangerCounter = 0;
  public static createdArchetypeInstances(): number {
    return this.rangerCounter;
  }
}