import { NgModule } from '@angular/core';
// import { IonicModule } from 'ionic-angular';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    // IonicModule.forRoot(HelloWorldComponent),
  ],
  bootstrap: [HelloWorldComponent],
  entryComponents: [
    HelloWorldComponent
  ]
})

export class HelloWorldModule { }
