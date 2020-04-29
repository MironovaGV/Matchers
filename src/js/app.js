import getHeroesInfo from './heroes';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
getHeroesInfo(heroes);
console.log(heroes);
