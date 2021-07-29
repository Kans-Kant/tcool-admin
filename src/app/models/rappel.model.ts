import { AbstractAuditingEntity } from "./AbstractAuditingEntity.model";
import { Compte } from "./compte.model";

export class Rappel extends AbstractAuditingEntity {
    idRappel: number;
    rappel: string;
    comptes : Compte[];
    date : Date;
    heure : number;
    minutes : number;
    status : string;

    constructor() {
        super();
    }
  }