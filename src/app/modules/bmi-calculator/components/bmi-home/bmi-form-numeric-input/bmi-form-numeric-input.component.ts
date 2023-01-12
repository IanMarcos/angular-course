import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'bmi-form-numeric-input',
  templateUrl: './bmi-form-numeric-input.component.html',
})
export class BmiFormNumericInputComponent implements OnInit {
  @ViewChild('numericInputTemplate', { static: true }) numericInputTemplate!: TemplateRef<any>;
  @Input() title: string;
  @Input() unit: string;
  @Input() value: number
  @Output() valueChange: EventEmitter<number>;
  updater!: ReturnType<typeof setInterval>;
  delayer!: ReturnType<typeof setTimeout>;

  constructor(private viewContainerRef: ViewContainerRef) {
    this.title = '';
    this.unit = '';
    this.value = 1;
    this.valueChange = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.numericInputTemplate);
    this.viewContainerRef.element.nativeElement.remove();
  }

  updateValue(operator: string): void {
    switch (operator) {
      case '+':
        this.value++;
        break;

      case '-':
        if (this.value > 1 ) this.value--;
        break;

      default:
        break;
    }
    this.valueChange.emit(this.value);
  }

  continiouslyUpdateValue(operator: string): void {
    this.delayer = setTimeout(() => {
      this.updater = setInterval(() => {
        this.updateValue(operator);
      }, 150);
    }, 350)
  }

  stopUpdatingValue(): void {
    clearTimeout(this.delayer);
    clearInterval(this.updater);
  }
}
