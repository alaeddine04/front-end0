import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenevoleCompteComponent } from './benevole-compte.component';

describe('BenevoleCompteComponent', () => {
  let component: BenevoleCompteComponent;
  let fixture: ComponentFixture<BenevoleCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenevoleCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenevoleCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
