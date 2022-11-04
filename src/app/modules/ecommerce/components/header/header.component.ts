import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categories = [
    {
      name: 'Dresses',
      img: 'https://preview.colorlib.com/theme/fashe/images/xbanner-02.jpg.pagespeed.ic.2XKTlVyG8Q.webp',
    },
    {
      name: 'Watches',
      img: 'https://preview.colorlib.com/theme/fashe/images/xbanner-03.jpg.pagespeed.ic.QCeF9H57-r.webp',
    },
    {
      name: 'Sunglasses',
      img: 'https://preview.colorlib.com/theme/fashe/images/xbanner-05.jpg.pagespeed.ic.eg0Rtm7mlV.webp',
    },
    {
      name: 'Dresses',
      img: 'https://preview.colorlib.com/theme/fashe/images/xbanner-02.jpg.pagespeed.ic.2XKTlVyG8Q.webp',
    },
    {
      name: 'Dresses',
      img: 'https://preview.colorlib.com/theme/fashe/images/xbanner-02.jpg.pagespeed.ic.2XKTlVyG8Q.webp',
    },
    {
      name: 'Dresses',
      img: 'https://preview.colorlib.com/theme/fashe/images/xbanner-02.jpg.pagespeed.ic.2XKTlVyG8Q.webp',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
