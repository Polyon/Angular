import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent02Component } from './card-component02.component';

describe('CardComponent02Component', () => {
  let component: CardComponent02Component;
  let fixture: ComponentFixture<CardComponent02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
