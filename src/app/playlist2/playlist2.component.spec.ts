import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playlist2Component } from './playlist2.component';

describe('Playlist2Component', () => {
  let component: Playlist2Component;
  let fixture: ComponentFixture<Playlist2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Playlist2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Playlist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
