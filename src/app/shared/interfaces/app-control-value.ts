import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import { FieldsService } from "../services/fields/fields.service";


@Component({
    template: '',
})
export abstract class AppControlValueAccessor implements ControlValueAccessor, OnInit{
    public value: any = null;
    public isValid: boolean = true;

    @Input() label: string = "";
    @Input() type: string = "";
    @Input() guidance: string = "";

    constructor(private readonly fieldService: FieldsService){}


    ngOnInit(): void {
        this.fieldService.invokeVerifyValid.subscribe(() => {
          this.onValid();
        })
      }

      writeValue(value: any): void {
        this.value = value;
      }

      registerOnChange(fn: any): void {
        this.onChange = fn;
      }

      registerOnTouched(fn: any): void {
        this.onTouch = fn;
      }

      setDisabledState?(isDisabled: boolean): void {
        //throw new Error('Method not implemented.');
      }

      onChange = (value: any) => {
      };
      onTouch = () => {};

      onValid(){
        //let validator = this.entity.get(this.name)?.valid;
        //this.isValid = validator === undefined ? true : validator;
        this.writeValue(this.value);
      }
}
