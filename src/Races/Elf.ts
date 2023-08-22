import Race from './Race';

export default class Elf extends Race {
  static instanceCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instanceCount += 1;
  }

  get name(): string {
    return this.name;
  } 

  get dexterity(): number {
    return this.dexterity;
  } 

  static createdRacesInstances(): number {
    return this.instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}