import { Message } from "./message.model";

export class Intervention {
    id: number;
    theme:string;
    title: string;
    details:string;
    description:string;
    image : string;
    location: string;
    audio: string;
    date : string;
    status:string;
    messages: Message[];
    latitude: number;
    longitude:number;
    compteRendu:string;
    createdDate : Date;
    createdBy: string;
    intervenant : string;
  
    constructor() {}
  }