import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(
  //  route: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = localStorage.getItem('jwt');

    if (isAuthenticated != null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
