import { AbstractAuditingEntity } from "./AbstractAuditingEntity.model";
import { User } from "./user.model";

export class Message extends AbstractAuditingEntity {
    idMessage: number;
    message: string;
    comptes : User[];

    constructor() {
      super();
    }
  }