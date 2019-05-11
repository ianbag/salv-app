//Modules
import { NgModule } from '@angular/core'

//Components
import { InputComponent } from './input/input.component'
import { SnackbarComponent } from './snackbar/snackbar.component'

//Pipes


@NgModule({
    declarations: [
        //Components
        InputComponent,
        SnackbarComponent,
        //Pipes
    ]
})
export class SharedModule { }