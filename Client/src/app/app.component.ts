import { Component, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import WebViewer from '@pdftron/webviewer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent/* implements OnInit, AfterViewInit*/ {
  // @ViewChild('viewer') viewer: ElementRef;
  // wvInstance: any;
  // file : File;
  // pdfSrc: string  | ArrayBuffer = './assets/pdf-test.pdf';
  
  // ngAfterViewInit(): void {
  //   const input = document.getElementById('file');
  //   console.log(input)

  //   WebViewer({
  //     path: '../lib',
  //     initialDoc: '',
  //     disabledElements: [
        
  //       'printButton'
  //     ]
  //   }, this.viewer.nativeElement).then(instance => {
  //     this.wvInstance = instance;

  //     // now you can access APIs through this.webviewer.getInstance()
  //     instance.openElements(['notesPanel']);
  //     // see https://www.pdftron.com/documentation/web/guides/ui/apis for the full list of APIs

  //     // or listen to events from the viewer element
  //     input.addEventListener('change', (e) => {
  //       this.file = (<HTMLInputElement>input).files[0];
  //       console.log(this.file)
  //       instance.loadDocument(this.file, { filename: this.file.name });
  //       console.log(this.file.name);
       
  //       //const [ pageNumber ] = e.detail;
  //       //console.log(`Current page is ${pageNumber}`);
  //     });

  //     // or from the docViewer instance
  //     instance.docViewer.on('annotationsLoaded', () => {
  //       console.log('annotations loaded');
  //     });

  //     instance.docViewer.on('documentLoaded', this.wvDocumentLoadedHandler)
  //   })
  // }

  // ngOnInit() {
  //   this.wvDocumentLoadedHandler = this.wvDocumentLoadedHandler.bind(this);
  // }

  // wvDocumentLoadedHandler(): void {
  //   // you can access docViewer object for low-level APIs
  //   // and access classes defined in the WebViewer iframe
  //   const { Annotations, annotManager, docViewer } = this.wvInstance;
  //   //const rectangle = new Annotations.RectangleAnnotation();
  //   //rectangle.PageNumber = 1;
  //   //rectangle.X = 100;
  //  // rectangle.Y = 100;
  //   //rectangle.Width = 250;
  //   //rectangle.Height = 250;
  //   //rectangle.StrokeThickness = 5;
  //   //rectangle.Author = annotManager.getCurrentUser();
  //   //annotManager.addAnnotation(rectangle);
  //   //annotManager.drawAnnotations(rectangle.PageNumber);
  //   // see https://www.pdftron.com/api/web/WebViewer.html for the full list of low-level APIs
  // }
  // onFileSelected() {
  //   const $pdf: any = document.querySelector('#file');

  //   if (typeof FileReader !== 'undefined') {
  //     const reader = new FileReader();

  //     reader.onload = (e: any) => {
  //       this.pdfSrc = e.target.result;
  //     };

  //     reader.readAsArrayBuffer($pdf.files[0]);
  //   }}

  constructor () { }
  
  ngOnInit(): void {
    // console.log(this.auth.isLoggedIn());
  }
}
