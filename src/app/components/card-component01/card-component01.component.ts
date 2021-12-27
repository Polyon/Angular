import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component01',
  templateUrl: './card-component01.component.html',
  styleUrls: ['./card-component01.component.css']
})
export class CardComponent01Component implements OnInit {

  constructor() { }

  @Input() movie : any | undefined;

  ngOnInit(): void {
  }

}


