import { Component, OnInit } from '@angular/core';
import { SharedCommonModule } from '../../shared/common/shared-common.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldsService } from '../../shared/services/fields.service';
import { SignUp } from './signup';
import {  Router } from '@angular/router';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { SecurityService } from '../services/security.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SharedCommonModule, LoadingComponent],
  providers: [SecurityService,ToastService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {


  public signUp: FormGroup;
  public showLoading = false;
  
  constructor(
    private readonly fb: FormBuilder,
    private readonly fieldsService: FieldsService,
    private readonly router: Router,
    private readonly securityService: SecurityService,
    private readonly toastService: ToastService,
  ){
    this.signUp = this.fieldsService.onCreateFormBuiderDynamic(new SignUp().fields);
  }

  ngOnInit(): void {
    
  }

  onRegister() {
    this.securityService.register(this.signUp.value).subscribe({
      next: (res) => {
        this.toastService.success({summary: "Usuario cadastrado com sucesso",detail: "Você receberá um email para continuação do cadastro!"});
      },
      error: (error) => {
        this.toastService.error({summary: "Erro", detail: error});
      }
    })
  }

  onSign() {
    this.router.navigate(["login"])
  }
}
