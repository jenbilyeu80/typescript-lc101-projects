import { Astronaut } from "./Astronaut";
import {Cargo} from "./Cargo";
import {Payload} from "./Payload"

export class Rocket {
    // properties and methods
    name:string;
    totalCapacityKg: number;
    cargoItems: Cargo[]= [];
    asrtronauts: Astronaut [] =[];
    constructor(name: string, totalCapacitykg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacitykg;
}
   sumMass ( items: Payload[]): number {
    let myTotalMass =0;
    for(let i=0; i< items.length; i++){
        myTotalMass += items[i].massKg;
    }
    return myTotalMass;
}
currentMassKg(): number {
let cargoMassTotal = this.sumMass(this.cargoItems);
let astronautMassTotal = this.sumMass(this.asrtronauts);
let massTotal = cargoMassTotal + astronautMassTotal;
return massTotal;
}
canAdd(item:Payload): boolean{

 return this.currentMassKg()+ item.massKg<= this.totalCapacityKg;
}
addCargo(cargo: Cargo): boolean {
    let itCanAddIt = this.canAdd(cargo);
    if(itCanAddIt) {
        this.cargoItems.push(cargo);
        return true;
    }else{
    return false;
}
}

addAstronaut(astronaut: Astronaut): boolean{
let itCanAddIt=this.canAdd(astronaut);
if (itCanAddIt){
    this.asrtronauts.push(astronaut);
    return true;
}else{
    return false;
    
}
}

}