import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'salv-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string
  @Input() showTip: boolean = true
  @Input() value: string = null

  input: any

  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.input = this.control

    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva FormControlName')
    }
  }

  verifyInputEmpty(): boolean {
    return this.input.value != "" ? true : false
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty /*|| this.input.touched*/) && this.verifyInputEmpty()
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

  verifyUniqueInput(): boolean {
    return this.input.errors.unique && (this.input.dirty || this.input.touched)
  }


}
