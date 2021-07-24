import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule} from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
import { FlashMessagesService , FlashMessagesModule } from 'angular2-flash-messages'

//
//05/17

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


//

import { ToastrModule } from 'ngx-toastr';
 
import { Component, NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

// import { AppComponent } from './app.component'
import { from } from 'rxjs'

// importing services
import { AuthenticationService } from './Services/authentication.service'
import { AuthGuardService } from './Services/auth-guard.service'
import { FormService } from './Services/form.service';
import { TemplateService } from './Services/template.service';
import { PermissionService } from './Services/permission.service'
import { ValidationService} from './Services/validation.service'
import {DocumentService} from './Services/document.service'
import {PaymentService}from './Services/payment.service'
import{PhotoService}  from './Services/photo.service'


// importing components
import { HomeComponent } from './Components/home/home.component'
import { LoginComponent } from './Components/login/login.component'
import { RegisterComponent } from './Components/register/register.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddAdminComponent } from './Components/add-admin/add-admin.component';
import { EditCategoriesComponent } from './Components/edit-categories/edit-categories.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { ViewCategoriesComponent } from './Components/view-categories/view-categories.component';
import { ViewFormComponent } from './Components/view-form/view-form.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ClientListComponent } from './Components/client-list/client-list.component';
import { AdminListComponent } from './Components/admin-list/admin-list.component';
import { FormComponent } from './Components/form/form.component';
import { FormViewComponent } from './Components/form/form-view/form-view.component';
import { TemplateComponent } from './Components/template/template.component';
import { TemGenerateComponent } from './Components/template/tem-generate/tem-generate.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { ClintViewCategoryComponent } from './Components/clint-view-category/clint-view-category.component';
import { ClintFillFormComponent } from './Components/clint-fill-form/clint-fill-form.component';

import { ClientFormSComponent } from './Components/client-form-s/client-form-s.component';
import { CreateDocComponent } from './Components/create-doc/create-doc.component';
import { ClintDownloadDocComponent } from './Components/clint-download-doc/clint-download-doc.component';
import { TemViewComponent } from './Components/tem-view/tem-view.component';
import { CreateFinalDocComponent } from './Components/create-final-doc/create-final-doc.component';
import { ImgToPdfComponent } from './Components/img-to-pdf/img-to-pdf.component';
import { AnnotationComponent } from './Components/annotation/annotation.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';


import { AppComponent } from './app.component';

import { EditPermissionComponent } from './Components/edit-permission/edit-permission.component';
import { UplordPhotoComponent } from './Components/uplord-photo/uplord-photo.component';

import { PaymentComponent } from './Components/payment/payment.component';
import {NgxPrintModule} from 'ngx-print';
import { UploardDocuComponent } from './Components/uploard-docu/uploard-docu.component';
import { ViewDocsComponent } from './Components/view-docs/view-docs.component';
import { ConfirmPasswordComponent } from './Components/confirm-password/confirm-password.component';
import { EditLoginComponent } from './Components/edit-login/edit-login.component';
import { PaymentDetailsComponent } from './Components/payment-details/payment-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'profile',component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]  },
  { path: 'addAdmin', component: AddAdminComponent , canActivate: [AuthGuardService]  },
  { path: 'editCategories', component: EditCategoriesComponent, canActivate: [AuthGuardService] },
  { path: 'addCategory', component: AddCategoryComponent, canActivate: [AuthGuardService] },
  { path: 'viewCategories', component: ViewCategoriesComponent, canActivate: [AuthGuardService] },
  { path: 'viewForm', component: ViewFormComponent, canActivate: [AuthGuardService] },
  { path: 'clientlist',component: ClientListComponent, canActivate: [AuthGuardService] },
  { path: 'adminlist',component: AdminListComponent, canActivate: [AuthGuardService] },
  { path: 'UplordPhoto',component:UplordPhotoComponent, canActivate: [AuthGuardService] },

  {path:'ViewDocs',component:ViewDocsComponent, canActivate: [AuthGuardService] },
  //

  { path:'ClintViewCategory',component:ClintViewCategoryComponent, canActivate: [AuthGuardService] },
    
    {path:'viewCategories/:slug/view',component:FormComponent,children:[

      
      {path:'formView',component:FormViewComponent, canActivate: [AuthGuardService] },
      {path:'TemGenerate',component:TemGenerateComponent, canActivate: [AuthGuardService] },
      {path:'TemGenerate/:id',component:TemplateComponent, canActivate: [AuthGuardService]  }


    ]},

  // {path:'ClintViewCategory/:slug/view',component: ClientFormSComponent,children:[
  //   { path:'ClintFillForm',component:ClintFillFormComponent}



    
  // ]}

  {path:'confirmPassword',component:ConfirmPasswordComponent, canActivate: [AuthGuardService] },
  {path:'editLogin',component:EditLoginComponent, canActivate: [AuthGuardService] },
  {path:'ClintViewCategory/:slug/view/payment',component:PaymentComponent, canActivate: [AuthGuardService] },
  {path:'ClintViewCategory/:slug/view/ClintFillForm',component:ClintFillFormComponent, canActivate: [AuthGuardService] },
  {path:'ClintViewCategory/:slug/view/CreateDoc',component:CreateDocComponent, canActivate: [AuthGuardService] },
  {path:'ClintViewCategory/:slug/view/ClintDownloadDocComponent',component:ClintDownloadDocComponent, canActivate: [AuthGuardService] },
  {path:'viewCategories/:id' ,component:TemViewComponent, canActivate: [AuthGuardService]  },
  {path:'ClintViewCategory/:slug/:id' ,component:CreateFinalDocComponent, canActivate: [AuthGuardService] },
  {path:'ImgToPdf', component:ImgToPdfComponent, canActivate: [AuthGuardService] },
  {path:'annotations', component:AnnotationComponent, canActivate: [AuthGuardService] },
  
  {path:'editProfile',component:EditProfileComponent, canActivate: [AuthGuardService] },
 
  {path:'editPermissions/:adminId',component:EditPermissionComponent, canActivate: [AuthGuardService] },
 
  {path:'UplordDocumentComponent',component:UploardDocuComponent, canActivate: [AuthGuardService] },
  {path:'PaymentDetails/:slug',component:PaymentDetailsComponent, canActivate: [AuthGuardService] }
]

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    AddAdminComponent,
    EditCategoriesComponent,
    AddCategoryComponent,
    ViewCategoriesComponent,
    ViewFormComponent,
    NavbarComponent,
    ClientListComponent,
    AdminListComponent,
    FormComponent,
    FormViewComponent,
    TemplateComponent,
    TemGenerateComponent,
    ClintViewCategoryComponent,
    ClintFillFormComponent,
   
    ClientFormSComponent,
   
    CreateDocComponent,
   
    ClintDownloadDocComponent,
   
    TemViewComponent,
   
    CreateFinalDocComponent,
   
    ImgToPdfComponent,
   
    AnnotationComponent,
   
    EditProfileComponent,
   

   
    EditPermissionComponent,
   
    UplordPhotoComponent,
   
   
   
    PaymentComponent,
   
    UploardDocuComponent,
   
    ViewDocsComponent,
    ConfirmPasswordComponent,
    EditLoginComponent,
    PaymentDetailsComponent,
   
    
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatDialogModule,
    DragDropModule,
    ReactiveFormsModule,
    NgxPrintModule,   MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    FlashMessagesModule
  ],
  providers:  [AuthenticationService , AuthGuardService , FormService,TemplateService, PermissionService,ValidationService,DocumentService,PaymentService,PhotoService, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
