const quotes = [
  "Some feelings cannot be explained — they’re meant to be felt.",
  "Sometimes, silence speaks louder than a thousand words.",
  "Your emotions are valid, even if no one else understands them.",
  "It's okay to feel deeply. It means you are beautifully human.",
  "The strongest hearts are the ones that have felt the most pain.",
  "Behind every smile is a story only the soul knows.",
  "Feelings are like waves — you can't stop them, but you can learn to ride.",
  "Tears aren't weakness, they're words the heart can't say.",
  "Every emotion is a chapter in your story — feel it, live it.",
  "Healing begins when we stop hiding our feelings."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
