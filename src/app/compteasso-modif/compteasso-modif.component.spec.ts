import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteassoModifComponent } from './compteasso-modif.component';

describe('CompteassoModifComponent', () => {
  let component: CompteassoModifComponent;
  let fixture: ComponentFixture<CompteassoModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteassoModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteassoModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
