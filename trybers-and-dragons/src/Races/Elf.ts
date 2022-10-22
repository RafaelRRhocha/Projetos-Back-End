import Race from './Race';

export default class Elf extends Race {
  _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.ElfCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static ElfCounter = 0;
  static createdRacesInstances(): number {
    return Elf.ElfCounter; 
  }
}