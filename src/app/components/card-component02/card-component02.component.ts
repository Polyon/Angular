import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component02',
  templateUrl: './card-component02.component.html',
  styleUrls: ['./card-component02.component.css']
})
export class CardComponent02Component implements OnInit {

  constructor() { }

  @Input() employee : any | undefined;

  ngOnInit(): void {
  }

}
