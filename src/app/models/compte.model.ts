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
  
    constructor() {}
  }