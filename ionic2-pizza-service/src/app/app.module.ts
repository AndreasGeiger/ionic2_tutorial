import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { PizzaAppComponent } from './app.component';
import { OrderComponent } from '../pages/order/order.component';
import { AboutComponent } from '../about/index';
import {PizzaService} from '../providers';

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
  providers: [PizzaService]
})
export class AppModule {}
