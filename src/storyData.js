const storyData = [
  {
    id: 1,
    text: "You wake up in a misty forest. Two paths lie ahead of you.",
    choices: [
      { text: "Take the left path", nextId: 2 },
      { text: "Take the right path", nextId: 3 },
    ],
  },
  {
    id: 2,
    text: "You find an old man who offers you a magic stone.",
    choices: [
      { text: "Take the stone", nextId: 4, setState: { hasStone: true } },
      { text: "Refuse and walk away", nextId: 5 },
    ],
  },
  {
    id: 3,
    text: "A wild bear appears! You have no weapons.",
    choices: [
      { text: "Try to run", nextId: 5 },
      { text: "Climb a tree", nextId: 6 },
    ],
  },
  {
    id: 4,
    text: "The stone glows and shows you a secret path.",
    choices: [
      { text: "Take the secret path", nextId: 7 },
      { text: "Stick to the main trail", nextId: 5 },
    ],
  },
  {
    id: 5,
    text: "You’re lost and the night falls. You hear wolves howling.",
    choices: [{ text: "Restart", nextId: 1 }],
  },
  {
    id: 6,
    text: "You stay hidden until the bear leaves. You survived!",
    choices: [
      { text: "Explore more", nextId: 7 },
      { text: "Head back", nextId: 5 },
    ],
  },
  {
    id: 7,
    text: "You reach a hidden village. The people welcome you!",
    choices: [
      { text: "Stay with them", nextId: 8 },
      { text: "Leave and explore", nextId: 9 },
    ],
  },
  {
    id: 8,
    text: "You found peace in the forest. 🏞️ The End.",
    choices: [{ text: "Play Again", nextId: 1 }],
  },
  {
    id: 9,
    text: "You stumble upon ancient ruins filled with secrets.",
    choices: [
      { text: "Enter the ruins", nextId: 10 },
      { text: "Walk past", nextId: 8 },
    ],
  },
  {
    id: 10,
    text: "A hidden treasure awaits you. You win! 🗝️",
    choices: [{ text: "Play Again", nextId: 1 }],
  },
];

export default storyData;
