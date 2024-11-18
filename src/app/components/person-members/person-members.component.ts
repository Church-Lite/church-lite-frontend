import {Component, OnInit} from '@angular/core';
import {SharedCommonModule} from "../../shared/common/shared-common.module";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {BaseComponent} from "../../shared/common/base-component/base-component";
import {TranslateService} from "../../shared/services/translate/translate.service";
import {status} from "../../shared/util/constants";
import { FormGroup } from '@angular/forms';
import { FieldsService } from '../../shared/services/fields/fields.service';
import { PersonConfig } from './person.config';
import { ToastService } from '../../shared/services/toast/toast.service';
import {DTOConverter} from "../../../core/dto/dto-converter";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-person-members',
  standalone: true,
  imports: [
    SharedCommonModule
  ],
  providers: [
    ToastService,
    DatePipe
  ],
  templateUrl: './person-members.component.html',
  styleUrl: './person-members.component.scss'
})
export class PersonMembersComponent extends BaseComponent implements OnInit{

  public personFormGroup: FormGroup;
  protected readonly status = status;

  constructor(
    public readonly ref: DynamicDialogRef,
    public readonly config: DynamicDialogConfig,
    private readonly fieldsService: FieldsService,
    public readonly translatePersonMembers: TranslateService,
    private readonly toastService: ToastService,
    private datePipe: DatePipe
  ) {
    super();
    this.personFormGroup = this.fieldsService.onCreateFormBuiderDynamic(new PersonConfig().person);
  }

  ngOnInit(): void {
    if(this.config.data){
      this.config.data.status = status.find(e => e.key === this.config.data.status);
      this.config.data.personalDocs.birthDate =  this.config.data.personalDocs.birthDate != null ? new Date(this.config.data.personalDocs.birthDate) : null;
      this.personFormGroup.patchValue(this.config.data);
    }
  }

  onSave() {
    if(this.personFormGroup.valid) {
      this.ref.close(DTOConverter.convertPersonToDTO(this.personFormGroup,this.datePipe));
    }else {
      this.toastService.warn({summary: "Mensagem", detail: "Existem campos inválidos"});
      this.fieldsService.verifyIsValid();
    }
  }

  onCancel() {
    this.ref.close(null);
  }

}
