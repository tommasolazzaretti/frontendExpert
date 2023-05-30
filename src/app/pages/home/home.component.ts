import { Component } from '@angular/core';
import {Article} from "../../models/article";
import {CartItem} from "../../models/state";
import {StateService} from "../../services/stateService/state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private stateService: StateService) {}

  articles: Article[] = [
    {
      "id": '1',
      "name": "Articolo 1",
      "description": "Descrizione dell'articolo 1",
      "imageUrl": "https://media.istockphoto.com/id/1130264365/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%D0%B0.jpg?s=170667a&w=0&k=20&c=4NG-HLn-512z18e6gvwUAddazBNdd-_KRRN5CK4VF-4="
    },
    {
      "id": '2',
      "name": "Articolo 2",
      "description": "Descrizione dell'articolo 2",
      "imageUrl": "https://media.istockphoto.com/id/1130264365/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%D0%B0.jpg?s=170667a&w=0&k=20&c=4NG-HLn-512z18e6gvwUAddazBNdd-_KRRN5CK4VF-4="
    },
    {
      "id": '3',
      "name": "Articolo 3",
      "description": "Descrizione dell'articolo 3",
      "imageUrl": "https://media.istockphoto.com/id/1130264365/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%D0%B0.jpg?s=170667a&w=0&k=20&c=4NG-HLn-512z18e6gvwUAddazBNdd-_KRRN5CK4VF-4="
    },
    {
      "id": '4',
      "name": "Articolo 4",
      "description": "Descrizione dell'articolo 4",
      "imageUrl": "https://media.istockphoto.com/id/1130264365/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%D0%B0.jpg?s=170667a&w=0&k=20&c=4NG-HLn-512z18e6gvwUAddazBNdd-_KRRN5CK4VF-4="
    },
    {
      "id": '5',
      "name": "Articolo 5",
      "description": "Descrizione dell'articolo 5",
      "imageUrl": "https://media.istockphoto.com/id/1130264365/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%D0%B0.jpg?s=170667a&w=0&k=20&c=4NG-HLn-512z18e6gvwUAddazBNdd-_KRRN5CK4VF-4="
    },
    {
      "id": '6',
      "name": "Articolo 6",
      "description": "Descrizione dell'articolo 6",
      "imageUrl": "https://media.istockphoto.com/id/1130264365/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D1%81%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%D0%B0.jpg?s=170667a&w=0&k=20&c=4NG-HLn-512z18e6gvwUAddazBNdd-_KRRN5CK4VF-4="
    }
  ]

  addToCart(article: Article): void {
    const item: CartItem = {
      articleId: article.id,
      name: article.name,
      quantity: 1
    };

    this.stateService.showLoader();
    this.stateService.addToCart(item);
  }

}
