import { Role } from "./role.model";

export class User {
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
    myRole : Role[];
    phone:string;
    email : string;
  
    constructor() {}
  }