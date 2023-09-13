import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/guard/auth.guard';

@Component({
  selector: 'tc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(public authGuard: AuthGuard) { }

  logout() {
    // Placez ici la logique de déconnexion, par exemple, effacer le jeton JWT
    // et rediriger l'utilisateur vers la page de connexion.
  }
}
