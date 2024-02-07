import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [
    {name: 'BeeCurious', flag: 'BC'},
    {name: 'Quabits', flag: 'QB'},
    {name: 'Gizmos', flag: 'GM'},
    {name: 'YELP', flag: 'YP'},
    {name: 'Litmus', flag: 'LT'},
    {name: 'School Management', flag: 'SM'}
  ]

  aboutuslist = [
    {name: 'About Us', flag: 'AU'},
    {name: 'Toxonomy', flag: 'TX'}
  ]

  navList = [
    {name: 'Home', flag: 'HM', sublist: []},
    {name: 'About', flag: 'AB', sublist: this.products},
    {name: 'Products', flag: 'PD', sublist: this.aboutuslist},
    {name: 'Partnership', flag: 'PT', sublist: []},
    {name: 'Competition', flag: 'CP', sublist: []},
  ]
 

  prideList = [
    {name: 'Progress', flag: 'PG', img: 'prd-1'},
    {name: 'Reflection', flag: 'RL', img: 'prd-2'},
    {name: 'Differentiation', flag: 'DF', img: 'prd-3'},
    {name: 'Integration', flag: 'IT', img: 'prd-4'},
    {name: 'Evaluation', flag: 'EV', img: 'prd-5'},
  ]
  images = [
    {img: 'prd-1.webp'},
    {img: 'prd-2.webp'},
    {img: 'prd-3.webp'},
    {img: 'prd-4.webp'},
    {img: 'prd-5.webp'},
  ]
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   $('.rocket_img').css({'display':'block','position':'relative', right:'25px', top: '-80px'})
    // },5000);

    // window.addEventListener('scroll', function() {
    //   // Check if the page is scrolled
    //   if (window.scrollY > 0) {
    //     $('.rocket_img').css({'display':'block','position':'relative', 'right':'25px', 'top': '-80px'})
    //   } else {
    //     console.log('Page is not scrolled');
    //   }
    // });
  //  this.startSlideshow()
  
  }

  // startSlideshow() {
  //   setInterval(() => {
  //     this.currentIndex = (this.currentIndex + 1) % this.images.length;
  //   }, 2000);
  // }

  openNav() {
    $("#mySidenav").css('width','350px');
    $('.main-li').find('ul').hide('1000')
  }
  
  closeNav() {
    $("#mySidenav").css('width','0px');
    $('.main-li').find('ul').hide('1000')
  }

  uldisplay(ele:any){
    $('.sidebar_nav').find('li').removeClass('sidebar_nav_active')
    $(ele.target).addClass('sidebar_nav_active')
    $('.main-li').find('ul').hide('1000')
    var eleul = $(ele.target).find('ul')
    if(eleul){
      $(ele.target).find('ul').show('2000');
      $(ele.target).find('ul').css({'background-color':'none !important'});
    }
  }

}
