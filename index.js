/* // Write your classes here
class Pet {
    constructor(name) {
      this.name = name;
      this._owner = null;
    }
  
    get owner() {
      return this._owner;
    }
  
    set owner(owner) {
      this._owner = owner;
    }
  
    static definition() {
      return `A pet is an animal kept primarily for a person's company.`;
    }
  }
  
  // Inherits from Pet
  class Dog extends Pet {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    static definition() {
      return (
        super.definition() + ' Dogs are one of the most common types of pets.'
      );
    }
  }
  
  let creature = new Pet('The Thing');
  let dog = new Dog('Spot', 'foxhound');
  
  Pet.definition();
  Dog.definition();  */

  class Tree {
    constructor(species) {
        this.species = species;
    }
    static definition() {
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}

  class Deciduous extends Tree {
      constructor(species,name) {
          super(species);
          this.name = name;
      }
    static definition() {
        return (super.definition() + " Deciduous trees shed their leaves annually.")
    }
}