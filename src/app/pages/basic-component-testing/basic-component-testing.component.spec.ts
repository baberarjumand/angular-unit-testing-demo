import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BasicComponentTestingComponent } from './basic-component-testing.component';

describe('BasicComponentTestingComponent', () => {
  let component: BasicComponentTestingComponent;
  let fixture: ComponentFixture<BasicComponentTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicComponentTestingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponentTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    // const fixture = TestBed.createComponent(BasicComponentTestingComponent);
    // fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.page-heading').textContent).toContain(
      'Basic Component Testing'
    );
  });

  it(`should have string testVar01 === 'testStr01'`, () => {
    // const fixture = TestBed.createComponent(BasicComponentTestingComponent);
    const app = fixture.componentInstance;
    expect(app.testVar01).toEqual('testStr01');
  });

  it(`should have num testNum01 === 10`, () => {
    // const fixture = TestBed.createComponent(BasicComponentTestingComponent);
    const app = fixture.componentInstance;
    expect(app.testNum01).toEqual(10);
  });

  it(`should have num testNum01 > 0`, () => {
    // const fixture = TestBed.createComponent(BasicComponentTestingComponent);
    const app = fixture.componentInstance;
    expect(app.testNum01).toBeGreaterThan(0);
  });

  it(`should increment testNum01 after btn clicked`, () => {
    // fixture.detectChanges();
    // const fixture = TestBed.createComponent(BasicComponentTestingComponent);
    const app = fixture.componentInstance;

    const oldValue = app.testNum01;

    fixture.debugElement
      .query(By.css('.increment-testNum01'))
      .triggerEventHandler('click', null);

    expect(app.testNum01).toEqual(oldValue + 1);
  });
});
