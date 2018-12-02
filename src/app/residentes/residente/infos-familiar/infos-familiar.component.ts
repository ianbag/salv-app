import { Familiar } from './familiar.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'salv-infos-familiar',
  templateUrl: './infos-familiar.component.html'
})
export class InfosFamiliarComponent implements OnInit {

  @Input() familiar: Familiar

  constructor() { }

  ngOnInit() {
  }


}
