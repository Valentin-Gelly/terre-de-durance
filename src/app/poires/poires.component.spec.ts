import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiresComponent } from './poires.component';

describe('PoiresComponent', () => {
  let component: PoiresComponent;
  let fixture: ComponentFixture<PoiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoiresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
