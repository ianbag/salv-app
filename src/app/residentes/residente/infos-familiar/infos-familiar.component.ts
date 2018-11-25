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
    console.log(this.familiar)
  }

  isComplemento(complemento: Familiar): boolean {
    if (this.familiar.complemento) {
      return true
    } else {
      return true
    }
  }

}
