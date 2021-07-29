import { AbstractAuditingEntity } from "./AbstractAuditingEntity.model";
import { Compte } from "./compte.model";

export class Notification extends AbstractAuditingEntity {
    idNotification: number;
    isRead: boolean;
    message : string;
    parentId : any;
    theme:string;
    sendFrom : string;
    sendTo : string;
    idSender : number;
    idReceiver : number;
    receivedDate : Date;

    constructor() {
      super();
    }
  }