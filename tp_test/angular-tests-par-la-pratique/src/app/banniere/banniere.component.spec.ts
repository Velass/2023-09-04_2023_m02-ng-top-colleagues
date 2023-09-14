import { ComponentFixture, TestBed } from "@angular/core/testing";
// La classe du composant à tester
import { BanniereComponent } from "./banniere.component";
describe("BanniereComponent", () => {
  // l'instance du composant
  let component: BanniereComponent;
  // instance permettant de débugger et tester un composant
  let fixture: ComponentFixture<BanniereComponent>;
  beforeEach(async () => {
    // création du module de testawait TestBed.configureTestingModule({
      await TestBed.configureTestingModule({
    // inclusion du composant à tester
    declarations: [BanniereComponent]
  })
  // compilation des composants graphiques du module
  .compileComponents();
});
  beforeEach(() => {
    // récupération des instances
    fixture = TestBed.createComponent(BanniereComponent);
    component = fixture.componentInstance;
    // provoquer la détection du changement
    // cette action valorise les expressions Angular du template
    fixture.detectChanges();
  });
    it("should create", () => {
      expect(component).toBeTruthy();
    });
    // TODO ajouter un cas de test
    it('le titre devrait être "Super Titre"', () => {
      // récupération du template
      const banEl: HTMLElement = fixture.nativeElement;
      // recherche du premier élément <h1></h1>
      const h1 = banEl.querySelector("h1");
      // vérification du titre
      expect(h1?.textContent).toEqual("Super titre");
    });
    // TODO ajouter un cas de test
    it("le titre est piloté par la propriété titre du composant", () => {
      // modification du titre
      component.titre = "Super titre 2";
      // réévaluation du template
      fixture.detectChanges();
      // récupération du template
      const banEl: HTMLElement = fixture.nativeElement;
      // recherche du premier élément <h1></h1>
      const h1 = banEl.querySelector("h1");
      // vérification du titre
      expect(h1?.textContent).toEqual("Super titre 2");
    });
});
