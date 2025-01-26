import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  template: `<p>list works!</p>`,
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { }
