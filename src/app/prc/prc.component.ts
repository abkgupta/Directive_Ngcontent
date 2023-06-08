import { Component } from '@angular/core';

@Component({
  selector: 'app-prc',
  templateUrl: './prc.component.html',
  styleUrls: ['./prc.component.css']
})
export class PrcComponent {
  parv ="sdevdv"
  userar = [2,4,5,7,9]
  user ={
    name:"rahul",age: 45,address:'ulhasnagar',email:'rahulnimap@gmail.com'
  }
  logout() {
    console.log('Logged out');
    
  }
}
