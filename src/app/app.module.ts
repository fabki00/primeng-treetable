import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreetableComponent } from './treetable/treetable.component';
import { TreeTableModule } from 'primeng/components/treetable/treetable';
import { NodeService } from './node.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TreetableComponent
  ],
  imports: [
    BrowserModule,
    TreeTableModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
