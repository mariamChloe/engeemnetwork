import {Component, OnDestroy, OnInit} from '@angular/core';
import {OgService} from "../../core/services/og.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy,OnInit{
  constructor(
    private ogService: OgService
  ) { }

  ngOnInit(): void {
    this.ogService.build(
      "Home",
      "Accueil",
      "Nous rendons l’Analytique plus Facile et plus Sûr pour vous ! Concentrez désormais vos Efforts au Déploiement de Cas d’Usage d\'Automatisation"
    )
  }
  ngOnDestroy(): void {
    this.ogService.build();
  }
}
