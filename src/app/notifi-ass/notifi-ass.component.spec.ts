import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiAssComponent } from './notifi-ass.component';

describe('NotifiAssComponent', () => {
  let component: NotifiAssComponent;
  let fixture: ComponentFixture<NotifiAssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifiAssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifiAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
