import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteAssoComponent } from './compte-asso.component';

describe('CompteAssoComponent', () => {
  let component: CompteAssoComponent;
  let fixture: ComponentFixture<CompteAssoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteAssoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteAssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
