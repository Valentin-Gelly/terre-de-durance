import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePommeComponent } from './home-pomme.component';

describe('HomePommeComponent', () => {
  let component: HomePommeComponent;
  let fixture: ComponentFixture<HomePommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePommeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
