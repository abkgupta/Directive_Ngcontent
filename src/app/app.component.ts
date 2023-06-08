import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
//   template: `
//   <label>
//     Favorite color:
//     <select [(ngModel)]="selectedColor">
//       <option value="red">Red</option>
//       <option value="green">Green</option>
//       <option value="blue">Blue</option>
//     </select>
//   </label>
//   <p>Your favorite color is {{ selectedColor }}</p>
// `,
templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directiveway';
  // selectedColor = 'red';  
}
