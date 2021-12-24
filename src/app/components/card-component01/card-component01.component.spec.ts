import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent01Component } from './card-component01.component';

describe('CardComponent01Component', () => {
  let component: CardComponent01Component;
  let fixture: ComponentFixture<CardComponent01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
