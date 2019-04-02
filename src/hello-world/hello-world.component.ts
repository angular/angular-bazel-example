import {Component} from '@angular/core';
import {format} from 'date-fns'

import {msg} from '../lib/file';

@Component({
  selector: 'hello-world',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {
  name: string = msg;
  date: string = format(new Date(), 'MMMM D, YYYY');
}
