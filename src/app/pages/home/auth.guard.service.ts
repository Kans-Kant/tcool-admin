import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private tokenStorageService: TokenStorageService,public router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //update of this page to redirect user to login page when not login
        if(this.tokenStorageService.getToken() == null){
            this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
            return this.tokenStorageService.getToken() == null;

        }
        //console.log("it is my token : "+ this.tokenStorageService.getToken());
        return this.tokenStorageService.getToken() != null;
    }  
}

//Admin before login check
@Injectable({
    providedIn: "root"
  })
  export class AdminAuthGuardLogin implements CanActivate {
    constructor(private tokenStorageService: TokenStorageService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let role = this.tokenStorageService.getRole();
      if (role == "ADMIN") {
        this.router.navigate(["/admin/account"]);
        return false;
      } else {
        this.router.navigate(["/home"]);
        return true;
      }
    }
  }