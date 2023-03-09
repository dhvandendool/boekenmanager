import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  updateTitle(snapshot: RouterStateSnapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== undefined) {
      this.title.setTitle(`Boekenmanager - ${title}`);
    }
  }

}
