import { Intervention } from "./intervention.model";
import { Message } from "./message.model";
import { Notification } from "./notification.model";
import { Rappel } from "./rappel.model";
import { Role } from "./role.model";

export class Compte {
    idCompte: number;
    avatar:string;
    createdBy: string;
    firstName :string;
    lastName : string;
    appartement : string;
    immeuble : string;
    isActive : boolean;
    lastModifiedDate : string;
    lastModifiedBy : string;
    password: string;
    myRole : Role;
    phone:string;
    email : string;
    myDiscussions : any[];
    myEvents : any[];
    myInterventions : Intervention[];
    myOperations : any[];
    myNotifications : Notification[];
    coproprietes : any[];
    rappels : Rappel[];
    messages : Message[];
    myArtisans: [];
  
    constructor() {}
  }