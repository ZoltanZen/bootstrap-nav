import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigatepage',
  templateUrl: './navigatepage.component.html',
  styleUrls: ['./navigatepage.component.css']
})
export class NavigatepageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    setTimeout( () => { 
      this.router.navigate(['navwithmoduleview']);
    }, 15000 );
  }

}
