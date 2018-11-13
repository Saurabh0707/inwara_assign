import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icodb',
  templateUrl: './icodb.component.html',
  styleUrls: ['./icodb.component.css']
})
export class IcodbComponent implements OnInit {

  constructor() { }
  public number: number = 3000;
  public number2: number = 2000;
  public number3: number = 7000;
  ngOnInit() {
  }

}
