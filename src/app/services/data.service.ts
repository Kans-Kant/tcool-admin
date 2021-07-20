import { Injectable } from "@angular/core";

@Injectable()
export class DataStorageService {
    
    public users : any;
    
    constructor() {}
    
    getUsers() {
        return this.users;
    }
    
    setUsers(users){
        this.users = users;
    }
  
}

