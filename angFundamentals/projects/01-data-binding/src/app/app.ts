import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports : [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  bindType1 = 'bindType_1 : stringInterpolation';
  bindType2 = {name : 'propertyBinding'};
  count = 0;
  bindType3(){
    this.count++;
  }
  bindType4 = '2wayBinding, using NgModule and formsModule.';
}
