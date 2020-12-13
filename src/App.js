import React, { useState } from "react";
import "./styles.css";
const emojipedia = {
  "🎄": "Christmas Tree",
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🥺": "Pleading Face",
  "🎅": "Santa Claus",
  "🎁": "Wrapped Gift",
  "😂": "Face with Tears of Joy",
  "🔥": "Fire"
};
var emojisWeKnow = Object.keys(emojipedia);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputEmojiHandler(event) {
    var userinput = event.target.value;

    var meaning = emojipedia[userinput];

    if (meaning === undefined) {
      meaning = "we dont have the in our database";
    }
    setMeaning(meaning);
  }
  function emojiClikeHandler(emoji) { 
    var meaning=emojipedia[emoji]
    setMeaning(meaning);
  }

  // console.log(event.target.value);

  return (
    <div className="App">
      <h1> Emotion intepertr</h1>
      <input  onChange={inputEmojiHandler}/>
      <h3> meaning {meaning}</h3>
      <h4>Emoji we have</h4>

      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClikeHandler(emoji)}
            style={{ fontSize: "1.4rem", padding: "0.4rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
