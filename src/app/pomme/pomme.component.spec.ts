import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PommeComponent } from './pomme.component';

describe('PommeComponent', () => {
  let component: PommeComponent;
  let fixture: ComponentFixture<PommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PommeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
