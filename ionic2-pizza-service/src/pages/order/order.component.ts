import {Component, ViewChild} from '@angular/core';
import {Content} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {AboutComponent} from '../../about/index';

@Component({
  templateUrl: 'order.component.html'
})

export class OrderComponent{
  aboutComponent = AboutComponent;
  constructor (private nav: NavController){

  }
  openAbout() {
    this.nav.push(AboutComponent);
  }
  @ViewChild(Content) content : Content;

  scrollToTop(){
    this.content.scrollToTop();
  }
  scrollToBottom(){
    this.content.scrollToBottom();
  }
}
