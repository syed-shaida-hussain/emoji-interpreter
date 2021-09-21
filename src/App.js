import React, { useState } from "react";

import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😂": "Laughing",
  "😁": " Beaming Face with Smiling Eyes",
  "❤": "A classic love heart emoji",
  "👍": "thumbs up",
  "🤣": " Rolling on the Floor Laughing",
  "😉": "Winking Face",
  "😇 ": "Smiling Face with Halo",
  "🤩 ": "Star-Struck",
  "😜": " Winking Face with Tongue"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt</h1>

      <input
        placeholder="enter any emoji here to check its meaning"
        onChange={emojiInputHandler}
      />

      <h2>{meaning}</h2>

      <h3>emojis we Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
