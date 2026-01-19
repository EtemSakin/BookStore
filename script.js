const DEFAULT_COVER = "./assets/images/covers/default-cover.png";

let books = [
  {
    name: "Der Herr der Ringe – Die Gefährten",
    author: "J. R. R. Tolkien",
    cover: "./assets/images/covers/lotr-fellowship.png",
    likes: 3250,
    liked: true,
    price: 14.99,
    publishedYear: 1954,
    genre: "Fantasy",
    comments: [
      { name: "MiddleEarthFan", comment: "Ein epischer Einstieg in eine der größten Fantasy-Geschichten." },
      { name: "BookLover", comment: "Die Gemeinschaft ist unvergesslich – starke Charaktere." }
    ]
  },
  {
    name: "Der Herr der Ringe – Die zwei Türme",
    author: "J. R. R. Tolkien",
    cover: "./assets/images/covers/lotr-two-towers.png",
    likes: 2890,
    liked: false,
    price: 14.99,
    publishedYear: 1954,
    genre: "Fantasy",
    comments: [
      { name: "FantasyNerd", comment: "Düster, spannend und richtig atmosphärisch." }
    ]
  },
  {
    name: "Der Herr der Ringe – Die Rückkehr des Königs",
    author: "J. R. R. Tolkien",
    cover: "./assets/images/covers/lotr-return-king.png",
    likes: 4100,
    liked: true,
    price: 16.99,
    publishedYear: 1955,
    genre: "Fantasy",
    comments: [
      { name: "EpicReader", comment: "Ein monumentales Finale – absolut legendär." },
      { name: "GondorGuard", comment: "Das Ende fühlt sich verdient und episch an." }
    ]
  },
  {
    name: "Der Hobbit",
    author: "J. R. R. Tolkien",
    cover: "./assets/images/covers/hobbit.png",
    likes: 3650,
    liked: true,
    price: 12.99,
    publishedYear: 1937,
    genre: "Fantasy",
    comments: [
      { name: "BilboFan", comment: "Charmant, abenteuerlich und leicht zu lesen." }
    ]
  },
  {
    name: "Das Silmarillion",
    author: "J. R. R. Tolkien",
    cover: "./assets/images/covers/silmarillion.png",
    likes: 1980,
    liked: false,
    price: 18.99,
    publishedYear: 1977,
    genre: "Fantasy",
    comments: [
      { name: "LoreMaster", comment: "Anspruchsvoll, aber perfekt für die Hintergrundgeschichte." }
    ]
  }
];

function init() {
  renderBookCards();
}

function renderBookCards() {
  let bookCardSectionRef = document.getElementById("bookCardSection");
  bookCardSectionRef.innerHTML = "";

  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    // Fallback, falls cover fehlt oder leer ist
    if (!books[indexBook].cover) {
      books[indexBook].cover = DEFAULT_COVER;
    }

    bookCardSectionRef.innerHTML += getBookCardsHtml(indexBook);
  }
}

function like(indexBook) {
  let book = books[indexBook];

  if (book.liked) {
    book.likes--;
    book.liked = false;
  } else {
    book.likes++;
    book.liked = true;
  }

  renderBookCards();
}

function addComment(event, indexBook) {
  event.preventDefault();

  let nameInput = document.getElementById(`userName-${indexBook}`);
  let commentInput = document.getElementById(`userComment-${indexBook}`);

  let newComment = {
    name: nameInput.value,
    comment: commentInput.value
  };

  books[indexBook].comments.push(newComment);

  nameInput.value = "";
  commentInput.value = "";

  renderBookCards();
}

