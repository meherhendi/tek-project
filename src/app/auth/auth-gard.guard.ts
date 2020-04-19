import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGardGuard implements CanActivate {

  constructor(private router:Router, private authService: AuthService ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if  (!this.authService.isUserLoggedIn()) {  // if (!this.authService.isUserLoggedIn()) {
        alert('You are not allowed to view this page. You are redirected to login Page');
        
        this.router.navigate(["auth"])/*,{ queryParams: { retUrl: route.url} })*/;
        return false;

        //var urlTree = this.router.createUrlTree(['login']);
        //return urlTree;
    } 
    return true;
  }
  
}
