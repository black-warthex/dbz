import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzFormComponent } from './dbz-form.component';

describe('DbzFormComponent', () => {
  let component: DbzFormComponent;
  let fixture: ComponentFixture<DbzFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbzFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbzFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
