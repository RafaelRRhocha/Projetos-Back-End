import Race from './Race';

export default class Halfling extends Race {
  _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.HalflingCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static HalflingCounter = 0;
  static createdRacesInstances(): number {
    return Halfling.HalflingCounter; 
  }
}