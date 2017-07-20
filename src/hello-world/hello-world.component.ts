import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'hello-world-app',
  template: `
    <div>Hello {{ name }}!</div>
    <input type="text" [value]="name" (input)="name = $event.target.value"/>
  `,
  // TODO(alexeagle): broken, maybe ngc doesn't look in bazel-bin?
  // styleUrls: ['./hello-world-styles.css']
})
export class HelloWorldComponent {
  name: string = 'world';
}
