import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'tc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private route: Router, private authService : AuthService ) { }
  showMenu = false
  ngOnInit(): void {
    this.authService.userLoggedIn$.subscribe({ next: show =>this.showMenu = show})
    const isAuthenticated = localStorage.getItem('jwt');
    if (isAuthenticated != null) {
      this.showMenu = true
    }
  }
  logout() {
    this.showMenu = false
    localStorage.clear();
    this.route.navigate(["/login"]);
  }
}
