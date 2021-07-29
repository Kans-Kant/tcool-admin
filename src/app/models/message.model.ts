import { AbstractAuditingEntity } from "./AbstractAuditingEntity.model";
import { Compte } from "./compte.model";

export class Message extends AbstractAuditingEntity {
    idMessage: number;
    message: string;
    comptes : Compte[] = [];

    constructor() {
      super();
    }
  }