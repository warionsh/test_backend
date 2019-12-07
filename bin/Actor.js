class Actor {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

var data = [];

for (let i = 0; i < 10; i++) {
    data[i] = new Actor(i, "nom_" + i, "description_" + i);
}

module.exports = { Actor, data};