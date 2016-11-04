import { Component } from '@angular/core';
import { OrderComponent } from '../pages/order/order.component';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class PizzaAppComponent {
  rootPage: any = OrderComponent;
}
