import { ClientApi } from './client-api';
import {AutoCompleteController} from 'aurelia-autocomplete';
import { autoinject } from 'aurelia-framework';

@autoinject
export class App {
  message = 'Hello World!';
  public client: any;
  public clientAutoCompleteController: any;


  constructor(private clientApi: ClientApi) {
    this.client = null;
    this.clientAutoCompleteController = new AutoCompleteController(
      (searchText) => this.clientApi.search(searchText),
      (suggestion) => `${suggestion.Code} - ${suggestion.Description}`
    );
  }
}
