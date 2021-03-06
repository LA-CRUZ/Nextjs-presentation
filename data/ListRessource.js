import GeoRessources from './GeoRessources.ts'

class ListResources {
    constructor(list={}) {
        this.list = list;
    }
    
    push(resources) {
        this.list[resources.id]=resources;
    }

    get(id) {
        return this.list[id];
    }
}

var list = new ListResources()

list.push(new GeoRessources("mickael"))
list.push(new GeoRessources("lucas"))
list.push(new GeoRessources("etienne"))
list.push(new GeoRessources("pierre"))

list.get("lucas").addTrophy("React and Vue")
list.get("mickael").addTrophy("SCSS Master")
list.get("etienne").addTrophy("Git commit Sepuku")
list.get("pierre").addTrophy("Wanabe web developer")

module.exports = list;