import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenevoleModifComponent } from './benevole-modif.component';

describe('BenevoleModifComponent', () => {
  let component: BenevoleModifComponent;
  let fixture: ComponentFixture<BenevoleModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenevoleModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenevoleModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
