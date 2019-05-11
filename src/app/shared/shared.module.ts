import { NgModule } from '@angular/core'

//Components
import { InputComponent } from './input/input.component'
import { SnackbarComponent } from './snackbar/snackbar.component'

@NgModule({
    declarations: [
        InputComponent,
        SnackbarComponent
    ]
})
export class SharedModule { }