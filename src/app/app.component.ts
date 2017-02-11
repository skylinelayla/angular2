import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  articles: Article[];
  constructor(){
    this.articles=[
      new Article("Angular2","www.baidu.com",10),
      new Article("Angular1","www.baidu.com",5),
      new Article("Angular3","www.baidu.com",6)

    ];
  }
  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    console.log(`Adding Article title ${title.value} and link ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value="";
    link.value="";
    return false;
  }
}
