import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'salv-input-container',
  templateUrl: './input-container.component.html'
})
export class InputContainerComponent implements OnInit {

  @Input() label: string;
  @Input() errorMessage: string;

  input: any

  constructor() { }

  ngOnInit() {
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
