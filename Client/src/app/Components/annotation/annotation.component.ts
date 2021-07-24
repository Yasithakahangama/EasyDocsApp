import { Component, OnInit,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import WebViewer from '@pdftron/webviewer'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.css']
})
export class AnnotationComponent implements OnInit,AfterViewInit {

  constructor(private router:Router) { }

  @ViewChild('viewer') viewer: ElementRef;
  wvInstance: any;
  file: File;
  pdfSrc: string | ArrayBuffer = './assets/pdf-test.pdf';

  ngAfterViewInit(): void {
    const input = document.getElementById('file');
    console.log(input)

    WebViewer({
      path: '../../../lib',
      initialDoc: '',
      disabledElements: [
        'printButton'
      ]
    },
      this.viewer.nativeElement
    ).then
    (instance=>{
      this.wvInstance=instance;
      instance.openElements(['notesPanel']);

      input.addEventListener('change',(e)=>{
        this.file= (<HTMLInputElement>input).files[0];
        console.log(this.file)
        instance.loadDocument(this.file,{filename:this.file.name});
      });

      instance.docViewer.on('annotationsLoaded',()=>{
        console.log('annotations loaded');
      });

      instance.docViewer.on('documentLoaded',this.wvDocumentLoadedHandler)
    })
  }

  ngOnInit() {
      this.wvDocumentLoadedHandler = this.wvDocumentLoadedHandler.bind(this);
  }

  wvDocumentLoadedHandler(): void {
    const { Annotations, annotManager, docViewer } = this.wvInstance;
  }

  onFileSelected() {
    const $pdf: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }}

    Save(){




      Swal.fire({
        title: "Please Upload!",
       
        icon:'warning',
        showCancelButton:true,
        confirmButtonText:'Upload ',
        cancelButtonText:'No ,Thanks'
      
        }).then((result)=>{
    
    if(result.value){
    this.router.navigate(['UplordDocumentComponent'])
    
    
    }
    
        })





      
    }

     

}
