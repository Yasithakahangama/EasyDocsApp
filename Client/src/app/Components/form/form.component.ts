import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  slug:string;
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data:Params)=>{
      this.slug=data['slug'];
    })
  }

}
