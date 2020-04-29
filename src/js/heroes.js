export default function getHeroesInfo(array) {
  array.sort((a, b) => a.health > b.health ? -1 : 1);
}

