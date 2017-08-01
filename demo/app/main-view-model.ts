import { Observable } from 'tns-core-modules/data/observable';
import { PeekUpdate } from 'nativescript-peek-update';

export class HelloWorldModel extends Observable {
  public message: string;
  private peekUpdate: PeekUpdate;

  constructor() {
    super();

    this.peekUpdate = new PeekUpdate();
    this.message = this.peekUpdate.message;
  }
}