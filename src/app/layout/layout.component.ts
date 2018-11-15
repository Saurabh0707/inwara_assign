import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  private clientHeight;
  footerHeight: number;
  @ViewChild('footer') footerDiv: ElementRef;
  constructor() {
    this.clientHeight = window.innerHeight;
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.footerHeight = this.footerDiv.nativeElement.offsetHeight;
  }
}
