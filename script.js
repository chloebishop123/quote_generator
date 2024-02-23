const bands = ["The Stone Roses", "Nirvana", "Arctic Monkeys", "The Cure", "Foo Fighters", "Motorhead", "Paramore", "Talking Heads", "Green Day", "Tame Impala", "The White Stripes", "Radiohead", "Rage Against the Machine", "The Smiths", "Joy Division", "The Clash"];
const singers = ["Kurt Cobain", "Ian Brown", "Alex Turner", "Hayley Williams", "Dave Grohl", "David Byrne", "Billie Joe Armstrong", "Kevin Parker", "Jack White", "Thom Yorke", "Zack de la Rocha", "Morrissey", "Ian Curtis", "Joe Strummer"];
const songs = ["Fools Gold", "Brick by Boring Brick", "Teddy Picker", "A Forest", "Everlong", "Ace of Spades", "Psycho Killer", "Elephant", "Seven Nation Army", "Creep", "Killing in the Name", "This Charming Man", "Love Will Tear Us Apart", "Rock the Casbah"];

let bandIndex = Math.floor(Math.random() * bands.length);
let singerIndex = Math.floor(Math.random() * singers.length);
let songIndex = Math.floor(Math.random() * songs.length);

const bandName = bands[bandIndex];
const leadSinger = singers[singerIndex];
const songTitle = songs[songIndex];
const finalQuote = () => {
  console.log(`Omg, I love ${bandName}. ${leadSinger} is a genius. My favourite song is ${songTitle} :)`);
}
finalQuote();