import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouteReuseStrategy, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class NormalUserGuard implements CanActivate {
  constructor(private login:LoginService,private router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.login.isLoggedIn() && this.login.getUserRole()=="ROLE_USER")
      {
        return true;
      }
      this.router.navigate(['login']);
      return false;
  }
  
}
