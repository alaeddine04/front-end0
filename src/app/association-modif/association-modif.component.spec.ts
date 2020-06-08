import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationModifComponent } from './association-modif.component';

describe('AssociationModifComponent', () => {
  let component: AssociationModifComponent;
  let fixture: ComponentFixture<AssociationModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
