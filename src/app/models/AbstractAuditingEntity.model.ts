import { Compte} from "./compte.model";

export class AbstractAuditingEntity {
    createdBy: string;//User;
    createdDate: Date;
    lastModifiedBy : string;//User;
    lastModifiedDate : Date;
    version:number=0;

    constructor() {}
  }