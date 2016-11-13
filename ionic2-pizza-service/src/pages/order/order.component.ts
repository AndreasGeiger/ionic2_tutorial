import {Component, OnInit} from '@angular/core';
import {Content} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {AboutComponent} from '../../about/index';
import {PizzaService} from '../../providers';
import {Pizza} from '../../models';

@Component({
  templateUrl: 'order.component.html'
})
export class OrderComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(
    private pizzaService: PizzaService
  ) {}

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
    });
  }
}
