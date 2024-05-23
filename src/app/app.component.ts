import { Component } from '@angular/core';
import Swiper from 'swiper';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  title = 'Angular 17 Crud example';

  

   menu?: HTMLElement | null = document.querySelector('#menu-btn');
  
   navbar?: HTMLElement | null = document.querySelector('.header .navbar');
  
  if (menu: { onclick: () => void; classList: { toggle: (arg0: string) => void; }; }) {
      menu.onclick = () => {
          menu.classList.toggle('fa-times');
          if (this.navbar) {
              this.navbar.classList.toggle('active');
          }
      };
  }

  @HostListener("window:scroll", []) onWindowScroll() {

    if (this.menu) {
      this.menu?.classList.remove('fa-times');
  }
  if (this.navbar) {
      this.navbar?.classList.remove('active');
  }

    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
}
  
   swiper = new Swiper(".home-slider", {
      loop: true,
  
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
  
}
