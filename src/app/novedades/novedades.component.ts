import { Component, OnInit } from '@angular/core';
import { DetalleComponent } from '../detalle/detalle.component';
import { NotificationService } from '../common-services/notification.service';
import { DemosComponent } from '../demos/demos.component';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.less']
})
export class NovedadesComponent implements OnInit {
  public precio = 1255.44;
  public seleccionado = null;

  constructor(public vm: NotificationService) { }

  ngOnInit(): void {
     // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    this.seleccionado = DemosComponent;
  }

  public crear() {
    this.seleccionado = DetalleComponent;
  }
}

