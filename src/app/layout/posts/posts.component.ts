import {Component, OnInit, ViewChild} from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-research',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{
  //
  // name = 'ng2-ckeditor';
  // ckeConfig: any;
  // mycontent: string;
  // log: string = '';
  // @ViewChild('myckeditor') ckeditor: any;
  //
  // constructor() {
  //   this.mycontent = `<p>My html content</p>`;
  // }
  //
  // ngOnInit() {
  //   this.ckeConfig = {
  //     allowedContent: false,
  //     extraPlugins: 'divarea',
  //     forcePasteAsPlainText: true,
  //     uiColor: '#99000',
  //   //   toolbarGroups: [
  //   //   { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
  //   //   { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
  //   //   { name: 'forms', groups: [ 'forms' ] }
  //   // ],
  //     removeButtons:'Source,Save,Print'
  //   };
  // }
  // onChange($event: any): void {
  //   console.log(this.ckeditor.control.value);
  //   // this.log += new Date() + '<br />';
  // }

  /////////////////////////////////
  storedPosts: Post[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
