import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { PizzaAppComponent } from './app.component';
import { OrderComponent } from '../pages/order/order.component';

@NgModule({
  declarations: [
    PizzaAppComponent,
    OrderComponent
  ],
  imports: [
    IonicModule.forRoot(PizzaAppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PizzaAppComponent,
    OrderComponent
  ],
  providers: []
})
export class AppModule {}
