import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationCompteComponent } from './association-compte.component';

describe('AssociationCompteComponent', () => {
  let component: AssociationCompteComponent;
  let fixture: ComponentFixture<AssociationCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
