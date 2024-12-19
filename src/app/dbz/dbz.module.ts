import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzFormComponent } from './components/dbz-form/dbz-form.component';
import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbzFormComponent,
    DbzListComponent,
    MainPageComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
