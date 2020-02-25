import { Component, OnInit } from '@angular/core';
import { NotificationService, NotificationType } from 'src/app/common-services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnInit {
  public readonly NotificationType = NotificationType;

  constructor(private vm: NotificationService) { }
  public get VM() { return this.vm; }

  ngOnInit() {
  }

}
