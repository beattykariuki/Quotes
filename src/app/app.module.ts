import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    QuoteFormComponent,
    QuoteDetailsComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
