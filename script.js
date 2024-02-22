const quotes = ["There's no I in Teamocyl, at least not where you'd think", "Take a look at banner Michael!", "There's always money in the banana stand!", "Baby you got a stew going", "I blue myself", "Her?", "She calls it a mayon-egg", "The army had a half day", "It ain't easy being white", "Would anyone like a banger in the mouth?", "I don't care for Gob", "Watch out for that loose seal!", "Steve Holt!", "Say goodbye to these!", "It's one banana, Michael. What can it cost, ten dollars?", "Here's some money, go see a Star War.", "I'm a monster!", "Family love Michael", "Mr. F", "I've made a huge mistake", "Pop-Pop gets a treat?", "AAAAAGGHH Gene Parmesan!", "And that's why you always leave a note", "Marry me!", "There are dozens of us!", "Get me a vodka and a piece of toast."];

const randomIndex = Math.floor(Math.random() * quotes.length);

const pickQuote = () => {
  console.log(quotes[randomIndex]);
}

pickQuote();