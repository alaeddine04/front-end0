import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminotifComponent } from './adminotif.component';

describe('AdminotifComponent', () => {
  let component: AdminotifComponent;
  let fixture: ComponentFixture<AdminotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
