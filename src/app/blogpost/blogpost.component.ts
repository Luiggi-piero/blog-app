import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs/internal/Observable';
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import { BLOCKS, MARKS } from '@contentful/rich-text-types';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  blogPost$: Observable<any> | undefined;

/*   options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, next: any) => `<p>${next(node.content)}</p>`,
      // Agrega configuraciones adicionales para otros tipos de nodos según sea necesario
    },
    renderMark: {
      [MARKS.BOLD]: (text: any) => `<strong>${text}</strong>`,
      // Agrega configuraciones adicionales para otros estilos de texto según sea necesario
    },
  }; */

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.blogPost$ = this.contentfulService.getEntryById(id);
    })
  }

  isHighlighted(item: any): boolean {
    let highlight = false;
    item.marks.forEach((feature: any) => {
      highlight = feature?.type === 'bold'
    });

    return highlight;
  }

 /*  documentToHtmlStringTemp(document: any) {
    return documentToHtmlString(document, this.options);
  } */

}
