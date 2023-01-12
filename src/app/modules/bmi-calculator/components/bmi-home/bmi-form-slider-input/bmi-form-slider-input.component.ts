import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'bmi-form-slider-input',
  templateUrl: './bmi-form-slider-input.component.html',
})
export class BmiFormSliderInputComponent implements OnInit {
  @ViewChild('sliderInputTemplate', { static: true }) sliderInputTemplate!: TemplateRef<any>;

  @Input() title: string;
  @Input() min!: number;
  @Input() max!: number;
  @Input() numValue!: number;
  @Input() unit: string;
  @Output() valueChange: EventEmitter<number>;

  constructor(private viewContainerRef: ViewContainerRef) {
    this.title = '';
    this.unit = '';
    this.valueChange = new EventEmitter<number>();
  }
  
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.sliderInputTemplate);
    this.viewContainerRef.element.nativeElement.remove();
  }

  changeValue(event: any) {
    this.numValue = event.target.value;
    this.valueChange.emit(this.numValue);
  }
}
