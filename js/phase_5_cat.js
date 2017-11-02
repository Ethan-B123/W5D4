const Cat = function Cat (name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function cuteStatement () {
  return `${this.owner} loves ${this.name}`;
};

const gar = new Cat ('Garfield', 'Jon');
const sue = new Cat ('Sue', 'Mary');
const moe = new Cat ('Moe', 'Homer');

// console.log(moe.cuteStatement());

Cat.prototype.cuteStatement = function cuteStatement () {
  return `Everyone loves ${this.name}`;
};

Cat.prototype.meow = function meow () {
  return `${this.name} says MEOW`;
};


moe.meow = function meow () {
  return '...';
};

// console.log(gar.meow());
// console.log(sue.meow());
// console.log(moe.meow());
