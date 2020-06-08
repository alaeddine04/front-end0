import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteBenComponent } from './compte-ben.component';

describe('CompteBenComponent', () => {
  let component: CompteBenComponent;
  let fixture: ComponentFixture<CompteBenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteBenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
