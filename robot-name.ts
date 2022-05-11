export class Robot {
  name: string;
  static usedNames = new Set<string>();
  static releaseNames() {
    this.usedNames.clear;
  }
  constructor() {
    this.name = this.uniqueRandomName;
  }

  private get uniqueRandomName() {
    let newName;
    do {
      newName = this.randomName;
    } while (Robot.usedNames.has(newName));
    Robot.usedNames.add(newName);
    return newName;
  }

  private get randomName() {
    return `${this.twoRandomLetters}${this.random3Digits}`;
  }

  private get twoRandomLetters() {
    return `${this.randomLetter}${this.randomLetter}`;
  }

  private get randomNumber() {
    return Math.floor(Math.random() * 10);
  }

  private get random3Digits() {
    return `${this.randomNumber}${this.randomNumber}${this.randomNumber}`;
  }

  private get randomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomNumber = Math.floor(Math.random() * 26);
    return letters[randomNumber];
  }

  resetName() {
    this.name = this.uniqueRandomName;
  }
}
