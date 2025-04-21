import "./style.css";
const whoList = [
  "My dog",
  "My sister",
  "My grandma",
  "My bird",
  "My cousing",
  "An alien",
  "My neighbor",
  "A ghost"
];
const actionList = [
  "ate",
  "peed",
  "broke",
  "cooked",
  "set fire to",
  "stole",
  "hid",
  "spilled hot chocolate on"
];
const whatList = [
  "my homeworks",
  "my laptop",
  "the presentation",
  "my code",
  "my class project"
];
const whenList = [
  "before the class",
  "during breakfast",
  "while I was sleeping",
  "last night",
  "while I was praying"
];

const _getRandomIndex = (max) =>{
  const position = Math.floor(Math.random() * max);
  return position;
}

const _getRandomList = (list) =>{return list[_getRandomIndex(list.length)]}

const who = _getRandomList(whoList);
const action = _getRandomList(actionList);
const what = _getRandomList(whatList);
const when = _getRandomList(whenList);

const excuse = () => {return `${who} ${action} ${what} ${when}`}
document.querySelector("#excuse").innerHTML = excuse();
