import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PollutionAppComponent } from './components/pollution-app/pollution-app.component';
import { ConsentBoxComponent } from './components/consent-box/consent-box.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AutocompleteInputComponent } from './components/autocomplete-input/autocomplete-input.component';
import { ParameterRadiosComponent } from './components/parameter-radios/parameter-radios.component';
import { AccordionElementComponent } from './components/accordion-element/accordion-element.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AccordionComponent,
    LoaderComponent,
    PollutionAppComponent,
    ConsentBoxComponent,
    LayoutComponent, AutocompleteInputComponent, ParameterRadiosComponent, AccordionElementComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
