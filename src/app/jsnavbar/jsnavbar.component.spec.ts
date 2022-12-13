import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsnavbarComponent } from './jsnavbar.component';

describe('JsnavbarComponent', () => {
  let component: JsnavbarComponent;
  let fixture: ComponentFixture<JsnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
