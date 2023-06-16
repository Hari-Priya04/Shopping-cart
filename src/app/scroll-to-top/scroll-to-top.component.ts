import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {
  document: any;
  windowScrolled = false;
  ngOnInit(): void {window.addEventListener('scroll', () => {
    this.windowScrolled = window.pageYOffset !== 0;
  }
  );
  }
  constructor() { }

  
  scrollToTop(): void {
    if (window.pageXOffset || document.documentElement.scrollTo || document.body.scrollTop <10) {
      this.windowScrolled = true;
} 

    window.scrollTo(0, 0);
    // scroll to the top of the body
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  

}


  