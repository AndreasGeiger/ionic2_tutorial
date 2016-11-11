import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { PizzaAppComponent } from './app.component';
import { OrderComponent } from '../pages/order/order.component';
import { AboutComponent } from '../about/index';

@NgModule({
  declarations: [
    PizzaAppComponent,
    OrderComponent,
    AboutComponent
  ],
  imports: [
    IonicModule.forRoot(PizzaAppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PizzaAppComponent,
    OrderComponent,
    AboutComponent
  ],
  providers: []
})
export class AppModule {}
