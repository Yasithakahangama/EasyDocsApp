import { Component, OnInit,Inject } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup,FormControl,Validators,FormArray,NgForm} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { inject } from '@angular/core/testing';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ToastrService } from 'ngx-toastr'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  dynamicForm: FormGroup;
  surveyForm: NgForm;
  inputTypes: string[] = ['paragraph', 'radio', 'select'];
  dynamicInputs = [];
  categoryName: string;
  FinalBody: any = {};
  addingInputElement: Boolean = false;

  constructor(private http: HttpClient,
    public dialog: MatDialog, private router: Router,private toastr: ToastrService, public auth:AuthenticationService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.dynamicForm = new FormGroup({
      'name': new FormControl(null),
      'fparameter': new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required),
      'options': new FormArray([], Validators.required)
    })
  }
  onAddInputElement() {
    this.addingInputElement = true;
    if (this.dynamicInputs.length < 1) {
      this.categoryName = this.dynamicForm.value.name;
    }
    setTimeout(() => {
      this.addingInputElement = false;
      this.dynamicInputs.push({
        label: this.dynamicForm.value.fparameter,
        type: this.dynamicForm.value.type,
        options: this.dynamicForm.value?.options

      });
      this.dynamicForm.reset();
    }, 500);
  }
  onAddOption() {
    const formControl = new FormControl(null);
    (<FormArray>this.dynamicForm.get('options')).push(formControl);
  }

  onSubmitSurveyForm(surveyForm: NgForm) {
    console.log(this.categoryName )
    this.FinalBody.name = this.categoryName 
    this.FinalBody.dynamicInputs = this.dynamicInputs;
    this.http.post('http://localhost:3000/categories/addCategory', this.FinalBody, { observe: 'body' }).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/viewCategories']);
   
    }, (error) => {
      this.snackbar.open(error.message, "Dismiss", {
        duration: 10000
      })
    })

    Swal.fire({
      title: "Added New Category",
     
      icon:'success',
     
    
    
    
    
      })





  }
  onDeleteOption(index) {
    (<FormArray>this.dynamicForm.get('options')).removeAt(index);
  }

  logout(){
    localStorage.removeItem('userToken'); 
    this.router.navigateByUrl('');
    this.toastr.info("Good Bye ","",{
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing'
      
  
    });
  }
}
