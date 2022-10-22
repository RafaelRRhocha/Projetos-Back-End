import Race from './Race';

export default class Orc extends Race {
  _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.OrcCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static OrcCounter = 0;
  static createdRacesInstances(): number {
    return Orc.OrcCounter; 
  }
}