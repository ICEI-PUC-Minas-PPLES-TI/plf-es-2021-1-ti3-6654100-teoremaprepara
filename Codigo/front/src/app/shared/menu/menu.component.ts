import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menu = [
    {
      opcao: "",
      icons: "",
      url: "",
      color: "#FFFFFF",
    }
  ];
  @Input() nomeUser = "";

  constructor(
    private router: Router,
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {
  }

  redirecionar(){
    this.ngZone.run(() => this.router.navigate([''])).then();
  }
  irSubMenu(url:string){    
    this.router.navigate([`/${url}`]);
  }

}
