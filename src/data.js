const animals = [
  { name: "cat", sound: "meow", diet: { food: 2, water: 3 } },
  { name: "dog", sound: "woof" }
];

function useAnmials(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}
export default animals;
export { useAnmials };
