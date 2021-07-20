import { AbstractAuditingEntity } from "./AbstractAuditingEntity.model";
import { User } from "./user.model";

export class Rappel extends AbstractAuditingEntity {
    idRappel: number;
    rappel: string;
    comptes : User[];
    date : Date;
    heure : number;
    minutes : number;
    status : string;

    constructor() {
        super();
    }
  }