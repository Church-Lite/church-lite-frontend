import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../shared/common/base-component/base-component";
import {FormGroup} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {FieldsService} from "../../shared/services/fields/fields.service";
import {TranslateService} from "../../shared/services/translate/translate.service";
import {ToastService} from "../../shared/services/toast/toast.service";
import {EventTypesConfig} from "./events-type.config";
import {SharedCommonModule} from "../../shared/common/shared-common.module";
import { ColorPickerModule } from 'primeng/colorpicker';

@Component({
  selector: 'app-events-type',
  standalone: true,
  imports: [
    SharedCommonModule,
    ColorPickerModule
  ],
  providers: [
    ToastService
  ],
  templateUrl: './events-type.component.html',
  styleUrl: './events-type.component.scss'
})
export class EventsTypeComponent extends BaseComponent implements OnInit {

  public formGroup: FormGroup;
  private configuration: EventTypesConfig = new EventTypesConfig();

  constructor(
    public readonly ref: DynamicDialogRef,
    public readonly config: DynamicDialogConfig,
    private readonly fieldsService: FieldsService,
    public readonly translateService: TranslateService,
    private readonly toastService: ToastService
  ) {
    super();
    this.formGroup = this.fieldsService.onCreateFormBuiderDynamic(this.configuration.fields);
  }

  ngOnInit(): void {
    if(this.config.data){
      this.formGroup.patchValue(this.config.data);
    }
  }

  onSave() {
    if(this.formGroup.valid) {
      this.ref.close(this.configuration.convertToDTO(this.formGroup));
    }else {
      this.toastService.warn({summary: "Mensagem", detail: "Existem campos inválidos"});
      this.fieldsService.verifyIsValid();
    }
  }

  onCancel() {
    this.ref.close(null);
  }

}
