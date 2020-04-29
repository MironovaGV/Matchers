import getHeroesInfo from '../heroes';

const array = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];
const person = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

test('should sort by health', () => {
  getHeroesInfo(person);
  expect(person).toEqual(array);
});

test('should sort by health', () => {
  getHeroesInfo(person);
  expect(person).not.toBe(array);
});
