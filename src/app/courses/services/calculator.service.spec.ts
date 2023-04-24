import { CalculatorService } from "./calculator.service"
import { TestBed } from '@angular/core/testing'
import { LoggerService } from "./logger.service";

describe('calculator service', () => {

  let calculator: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy }
      ]
    })

    calculator = TestBed.inject(CalculatorService);
  })



  it('add method should work properly', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  })

  it('subtract method should work properly', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  })
})
