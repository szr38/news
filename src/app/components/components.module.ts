import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsComponent } from './news/news.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    NewsComponent, 
    ReportComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    NewsComponent
  ]
})
export class ComponentsModule { }
