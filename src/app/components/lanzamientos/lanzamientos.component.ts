import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './lanzamientos.component.html',
  styles: []
})
export class LanzamientosComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;


    this.spotify.getNewReleases()
        .subscribe( (data: any) => {

          // console.log(data);
          this.nuevasCanciones = data;
          this.loading = false;
        }, ( errorServicio ) => {

          this.loading = false;
          this.error = true;
          // console.log(errorServicio);
          this.mensajeError = errorServicio.error.error.message;

        });

  }



}
