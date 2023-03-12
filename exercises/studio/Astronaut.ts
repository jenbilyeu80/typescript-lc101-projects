import {Payload} from './payload';


export class Astronaut implements Payload {
    // properties and methods
    massKg: number;
    name: string;
    constructor( masskg: number, name: string){
     this. massKg = masskg;
     this.name = name

    }
 }