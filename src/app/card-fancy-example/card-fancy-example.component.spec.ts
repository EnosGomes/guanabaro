import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFancyExampleComponent } from './card-fancy-example.component';

describe('CardFancyExampleComponent', () => {
  let component: CardFancyExampleComponent;
  let fixture: ComponentFixture<CardFancyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFancyExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFancyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
