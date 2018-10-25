import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
        new Quote(1, 'No man has a good enough memory,to be a successful liar', 'Anonymous', new Date(2018, 3, 14)),
        new Quote(2, 'A man is not paid for having a head and hands,but for using them', 'Mark millton', new Date(2015, 6, 9)),
        new Quote(3, 'Happiness,does not have a price tag', 'Unknown', new Date(2018, 1, 12)),
        new Quote(4, 'Never miss a good chance,to shut up', 'Anonymous', new Date(2018, 0, 18)),


    ];


    toggleDetails(index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;

    }

    addNewQuote(quote) {
        const quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        quote.completeDate = new Date(quote.completeDate);
        this.quotes.push(quote);
    }

    voteAdd(vote, index) {
        if (vote) {
            this.quotes[index].Like += 1;
          } else {
              this.quotes[index].Unlike += 1;

          }
    }

    deleteQuote(isComplete, index) {
        if (isComplete) {
            const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
