import { Component, OnInit } from '@angular/core';
import { ResidentesService } from '../residentes.service';
import { ActivatedRoute } from '@angular/router';
import { Residente } from './residente.model';

@Component({
  selector: 'salv-residente',
  templateUrl: './residente.component.html'
})
export class ResidenteComponent implements OnInit {

  residente: Residente

  constructor(private residentesService: ResidentesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.residentesService.residenteById(this.route.snapshot.params['id'])
      .subscribe(residente => {
      this.residente = residente
        console.log(residente)
      })
  }

}
