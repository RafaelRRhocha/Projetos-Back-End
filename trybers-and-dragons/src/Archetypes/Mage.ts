import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.mageCounter += 1;
  }

  static mageCounter = 0;
  public static createdArchetypeInstances(): number {
    return this.mageCounter;
  }

  get energyType() {
    return this._energyType;
  }
}