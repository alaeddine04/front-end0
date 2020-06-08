import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptebenModifyComponent } from './compteben-modify.component';

describe('ComptebenModifyComponent', () => {
  let component: ComptebenModifyComponent;
  let fixture: ComponentFixture<ComptebenModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptebenModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptebenModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
