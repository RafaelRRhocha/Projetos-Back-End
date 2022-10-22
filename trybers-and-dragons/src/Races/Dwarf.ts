import Race from './Race';

export default class Dwarf extends Race {
  _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.dwarfsCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static dwarfsCounter = 0;
  static createdRacesInstances(): number {
    return Dwarf.dwarfsCounter; 
  }
}