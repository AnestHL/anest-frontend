import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  info = {
    email: 'anest.studio@gmail.com',
    phone: '(+84) 0973 876 107',
    location: 'Thôn 9 - Tân Xã - Thạch Thất - Hà Nội'
  };

  courses = [{
    id: 1,
    name: 'Java',
    status: '1'
  }, {
    id: 2,
    name: 'Javascript',
    status: '1'
  }, {
    id: 3,
    name: 'Database',
    status: '1'
  }, {
    id: 4,
    name: 'HTML/CSS',
    status: '1'
  }, {
    id: 5,
    name: 'Angular',
    status: '1'
  }];

  linkFacebook = '#';
  linkYoutube = '#';

  constructor() { }

  ngOnInit() {
  }

}
