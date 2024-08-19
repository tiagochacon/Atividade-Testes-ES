import { Zoo, Animal } from './zoo';

describe('Zoo', () => {
  let zoo: Zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });

  test('should add a new animal', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    expect(zoo.getAllAnimals()).toContainEqual(animal);
  });

  test('should remove an existing animal', () => {
    const animal1 = new Animal('Leo', 'Lion', 5);
    const animal2 = new Animal('Milo', 'Tiger', 3);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);
    zoo.removeAnimal('Leo');
    expect(zoo.getAllAnimals()).not.toContainEqual(animal1);
    expect(zoo.getAllAnimals()).toContainEqual(animal2);
  });

  test('should not remove an animal that does not exist', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    zoo.removeAnimal('Nonexistent');
    expect(zoo.getAllAnimals()).toContainEqual(animal);
  });

  test('should get an animal by name', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    expect(zoo.getAnimal('Leo')).toEqual(animal);
  });

  test('should return undefined for a non-existent animal', () => {
    expect(zoo.getAnimal('Nonexistent')).toBeUndefined();
  });

  test('should get all animals', () => {
    const animal1 = new Animal('Leo', 'Lion', 5);
    const animal2 = new Animal('Milo', 'Tiger', 3);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);
    expect(zoo.getAllAnimals()).toEqual([animal1, animal2]);
  });

  test('should get animals by species', () => {
    const lion1 = new Animal('Leo', 'Lion', 5);
    const lion2 = new Animal('Simba', 'Lion', 4);
    const tiger = new Animal('Milo', 'Tiger', 3);
    zoo.addAnimal(lion1);
    zoo.addAnimal(lion2);
    zoo.addAnimal(tiger);
    expect(zoo.getAnimalsBySpecies('Lion')).toEqual([lion1, lion2]);
    expect(zoo.getAnimalsBySpecies('Tiger')).toEqual([tiger]);
  });

  test('should return an empty array when no animals of a species exist', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    expect(zoo.getAnimalsBySpecies('Tiger')).toEqual([]);
  });

  test('should get the average age of animals', () => {
    const animal1 = new Animal('Leo', 'Lion', 5);
    const animal2 = new Animal('Milo', 'Tiger', 3);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);
    expect(zoo.getAverageAge()).toBe(4);
  });

  test('should return 0 as average age when there are no animals', () => {
    expect(zoo.getAverageAge()).toBe(0);
  });
});
