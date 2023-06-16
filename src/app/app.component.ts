import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import * as pdfMake from 'pdfmake/build/pdfmake';
import  * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  title = 'cart';
 

  @Input() count: number | undefined;
  sidenavOption: any;
    isshow:boolean=true;
    repoService: any;
    menu_hide_show(){
    this.isshow = !this.isshow;
}

@ViewChild('pdfTable') pdfTable: ElementRef | undefined;
//PDF genrate button click function
public downloadAsPDF() {
  let data = document.getElementById('htmltable');
      
  html2canvas(data!).then(canvas => {
          
          let docWidth = 208;
          let docHeight = canvas.height * docWidth / canvas.width;
          
          const contentDataURL = canvas.toDataURL('image/png')
          let doc = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
          
          doc.save('exported.pdf');
      });

 
}
}
