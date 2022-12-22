import { Component, Input, OnInit } from '@angular/core';
import { sidebarLinks, SidebarLink} from 'src/utils/sidebar-links';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  links: SidebarLink[] = sidebarLinks

  @Input('currentRouter') currentRouter : string | undefined = '';
  @Input('currentRouterSub') currentRouterSub : string | undefined = '';
  @Input('isPainel') IsPainel: string | undefined = 'false';
}
