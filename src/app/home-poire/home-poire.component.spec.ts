import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePoireComponent } from './home-poire.component';

describe('HomePoireComponent', () => {
  let component: HomePoireComponent;
  let fixture: ComponentFixture<HomePoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePoireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
