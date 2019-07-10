import React from "react";
import "./styles.css";

function Directions(props) {
  return (
    <>
      <div class="center">
        <p id="directions">
          Directions: Click on an image in space, make sure to only sure to
          remember which ones have been clicked because one double click you
          lose!
        </p>
      </div>
    </>
  );
}

var text = document.getElementById("text");
var newDom = "";
var animationDelay = 6;

function fade(props){
for (let i = 0; i < text.innerText.length; i++) {
  newDom +=
    '<span class="char">' +
    (text.innerText[i] == " " ? "&nbsp;" : text.innerText[i]) +
    "</span>";
}

text.innerHTML = newDom;
var length = text.children.length;

for (let i = 0; i < length; i++) {
  text.children[i].style["animation-delay"] = animationDelay * i + "ms";
}
        var text = document.getElementById('text');
        var newDom = '';
        var animationDelay = 6;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }

      }

export default Directions;
