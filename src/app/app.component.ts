import { Component } from '@angular/core';
// -------------Owl Carousel--------------
import { OwlOptions } from 'ngx-owl-carousel-o';
// ---------------------------------------

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent-Child';

  movies: Movie[] = [
    {
      title: 'Zootopia',
      img: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0ecb745d03d6656e19c12acc7fe9f7a7ba6336a0f2d2c202aff94a8335f00aae._RI_V_TTW_.jpg',
      director: 'Byron Howard, Rich Moore',
      cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman',
      releaseDate: 'March 4, 2016',
    },
    {
      title: 'Batman v Superman: Dawn of Justice',
      img: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
      director: 'Zack Snyder',
      cast: 'Ben Affleck, Henry Cavill, Amy Adams',
      releaseDate: 'March 25, 2016',
    },
    {
      title: 'Captain American: Civil War',
      img: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg',
      director: 'Anthony Russo, Joe Russo',
      cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans',
      releaseDate: 'May 6, 2016',
    },
    {
      title: 'X-Men: Apocalypse',
      img: 'https://cdn.mos.cms.futurecdn.net/e6hWKhmXszRLNSvPRHizZ5.jpg',
      director: 'Bryan Singer',
      cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac',
      releaseDate: 'May 27, 2016',
    },
    {
      title: 'Warcraft',
      img: 'https://m.media-amazon.com/images/I/81feWhChfIL._SL1500_.jpg',
      director: 'Duncan Jones',
      cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster',
      releaseDate: 'June 10, 2016',
    },
  ];

  employees : any[] = [
    {
      name: 'Rahul',
      email: 'rahul@gmail.com',
      skills: [
        { skill: 'Angular', exp: '2' },
        { skill: 'Javascript', exp: '7' },
        { skill: 'TypeScript', exp: '3' },
      ],
    },
    {
      name: 'Sachin',
      email: 'sachin@gmail.com',
      skills: [
        { skill: 'Angular', exp: '1' },
        { skill: 'Android', exp: '3' },
        { skill: 'React', exp: '2' },
      ],
    },
    {
      name: 'Laxmna',
      email: 'laxman@gmail.com',
      skills: [
        { skill: 'HTML', exp: '2' },
        { skill: 'CSS', exp: '2' },
        { skill: 'Javascript', exp: '1' },
      ],
    },
  ]
  
// -------------Owl Carousel--------------
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false,
    // stagePadding: 110,
    // center: true,
    // autoWidth: true,
    // margin: 0,
    // autoplay: true,
  }

  changeOptions: OwlOptions = {
    ...this.customOptions,
    responsive: {
      0: {
        items: 1
      },
      940: {
        items: 2
      }
    }
  }
// ----------------------------
}

class Movie{
  title: string | undefined;
  img: string | undefined;
  director: string | undefined;
  cast: string | undefined;
  releaseDate: string | undefined;
}
