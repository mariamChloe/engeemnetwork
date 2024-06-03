import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {OgService} from "../../../core/services/og.service";

@Component({
  selector: 'app-akwaba',
  templateUrl: './akwaba.component.html',
  styleUrls: ['./akwaba.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AkwabaComponent implements OnDestroy, OnInit{

  constructor(
    private ogService: OgService
  ) {}

  ngOnInit():void{
    this.ogService.build(
      "AKWABA",
      "Offre AKWABA",
      "Accélérez vos Capacités Big Data, Sans Ligne de Codes, pour créer de Nouvelles Valeurs et Dominer votre Marché avec ENGEEM!",
      "https://data.engeem.com/assets/images/logo/akwaba.jpeg",
      "http://akwaba.engeem.com"
    )
  }

  ngOnDestroy(): void {
    this.ogService.build()
  }
}
