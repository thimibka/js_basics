const books = [
  { id: 133712, title: "Gatsby le magnifique", rentedCount: 39 },
  { id: 237634, title: "A la recherche du temps,perdu", rentedCount: 28 },
  { id: 873495, title: "Orgueil & Préjugés", rentedCount: 67 },
  { id: 450915, title: "Les frères Karamazov", rentedCount: 55 },
  { id: 837636, title: "Dans les forêts de Sibérie", rentedCount: 15 },
  { id: 450911, title: "Pourquoi j'ai mangé mon père", rentedCount: 45 },
  { id: 675651, title: "Et on tuera tous les affreux", rentedCount: 36 },
  { id: 888475, title: "Le meilleur des mondes", rentedCount: 58 },
  { id: 364442, title: "La disparition", rentedCount: 33 },
  { id: 635411, title: "La lune seule le sait", rentedCount: 43 },
  { id: 465638, title: "Voyage au centre de la Terre", rentedCount: 38 },
  { id: 748147, title: "Guerre et Paix", rentedCount: 19 },
];

//Sors-moi une liste de tous les titres des livres du CDI//
const totalBooks = books.map((book) => book.title);
console.log(totalBooks);
//-------------------------------------------------------------

//Est-ce que tous les livres ont été au moins empruntés une fois ?//
const BooksBorrow = books.map((borrow) => borrow.rentedCount);
if (BooksBorrow.every((rentedCount) => rentedCount > 0)) {
  console.log(
    `${BooksBorrow.length} livres ont été empreintés au moins une fois`
  );
} else {
  console.log(`aucun livre n'a été empreinté`);
}
//---------------------------------------------------------

//Quel est le livre le plus emprunté ?
const mostMarked = books.reduce((index, content) =>
  index.rentedCount > content.rentedCount ? index : content
);
console.log(mostMarked);
//-----------------------------------------------------------


//Quel est le livre le moins emprunté ?
const leastMarked = books.reduce((index, content) =>
  index.rentedCount < content.rentedCount ? index : content
);
console.log(leastMarked);
//--------------------------------------------------------


//Supprime le livre avec l'ID 133712
const deleteBook = books.filter(content =>
  content.id !==133712)
  console.log(deleteBook)



