import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';
import {PostsService} from '../posts.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from "rxjs/index";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit{
  enteredTitle = '';
  enteredContent = '';
  private authStatusSub: Subscription;
  userIsAuthenticated = false;
  post: Post;
  isLoading = false;
  private mode = 'create';
  private postId: string;
  name = 'ng2-ckeditor';
  ckeConfig: any;
  log: string = '';
  @ViewChild('content') content: any;
  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {id: postData._id, title: postData.title, content: postData.content};
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      //   toolbarGroups: [
      //   { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
      //   { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
      //   { name: 'forms', groups: [ 'forms' ] }
      // ],
      removeButtons:'Source,Save,Print'
    };

  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.postsService.addPost(form.value.title, this.content.control.value);
    } else {
      this.postsService.updatePost(
        this.postId,
        form.value.title,
        this.content.control.value
      );
    }
    form.resetForm();
    console.log(form);
    this.isLoading = false;
  }
  printReport(){
    let printContents, popupWin;
    printContents = this.content.control.value;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
