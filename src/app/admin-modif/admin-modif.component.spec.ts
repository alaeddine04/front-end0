import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifComponent } from './admin-modif.component';

describe('AdminModifComponent', () => {
  let component: AdminModifComponent;
  let fixture: ComponentFixture<AdminModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
