import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourgesComponent } from './courges.component';

describe('CourgesComponent', () => {
  let component: CourgesComponent;
  let fixture: ComponentFixture<CourgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourgesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
