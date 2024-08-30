import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCourgeComponent } from './home-courge.component';

describe('HomeCourgeComponent', () => {
  let component: HomeCourgeComponent;
  let fixture: ComponentFixture<HomeCourgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCourgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCourgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
