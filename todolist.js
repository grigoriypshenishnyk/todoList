// person = [
//   { value: "Pants", filter: false, id: "asda" },
//   { value: "Jacket", filter: false, id: "dasda" },
//   { value: "iPhone Charger", filter: true, id: "asd1" },
//   { value: "MacBook", filter: false, id: "2asd1" },
//   { value: "Sleeping Pills", filter: true, id: "2sd1" },
//   { value: "Underwear", filter: false, id: "2ssdfd1" },
//   { value: "Hat", filter: false, id: "2ssdf1" },
//   { value: "T-Shirts", filter: true, id: "2ssdf" },
//   { value: "Belt", filter: false, id: "2qweqwssdf" },
//   { value: "Passport", filter: false, id: "2qeqwssdf" },
//   { value: "Sandwich", filter: false, id: "2qewssdf" },
// ];

// const N = {
//   person: "person",
// };

// const L = {
//   get: () => localStorage.getItem(N.person),
//   set: (data) => localStorage.setItem(N.person, JSON.stringify(data)),
// };

// function start() {
//   const d = L.get();
//   if (d == null) {
//     L.set(person);
//   } else {
//     person = JSON.parse(d);
//   }
// }
// start();

// const maininp = document.querySelector(".main_inp");
// const mainbtn = document.querySelector(".main_btn");

// const todo = document.querySelector(".todo");
// const made = document.querySelector(".made");

// const creatTodo = ({ value, filter, id }) => {
//   const div = document.createElement("div");
//   const button = document.createElement("button");
//   const input = document.createElement("input");
//   const p = document.createElement("p");
//   const span = document.createElement("span")
//   const label = document.createElement("label")

//   button.textContent = "X";
//   p.textContent = value;
//   input.checked = filter;
//   input.type = "checkbox";

//   label.appendChild(input);
//   span.appendChild(label)
//   span.appendChild(p)

//   div.appendChild(span);
//   div.appendChild(button);

//   filter ? made.appendChild(div) : todo.appendChild(div);

//   button.onclick = () => {
//     div.remove();
//     person = person.filter((e) => id !== e.id);
//     L.set(person);
//   };

//   input.onchange = () => {
//     person.find((e) => e.id === id).filter = input.checked;
//     input.checked ? made.appendChild(div) : todo.appendChild(div);
//     localStorage.setItem("person", JSON.stringify(person));
//   };

//   p.ondblclick = () => {
//     const newInp = document.createElement("input");
//     newInp.classList.add("item")
//     newInp.value = value;
//     p.textContent = "";
//     p.appendChild(newInp);
//     newInp.focus();

//     newInp.onblur = () => {
//       console.log(newInp.value);
//       p.textContent = newInp.value;
//       newInp.remove();
//       const elem = person.find((e) => {
//         if (e.id === id) return true;
//         return false;
//       });
//       elem.value = p.textContent;
//       L.set(person);
//     };
//   };
// };

// person.forEach(creatTodo);

// mainbtn.addEventListener("click", () => {
//   const newItem = {
//     value: maininp.value,
//     filter: false,
//     id: "num_" + person.length + Math.random(),
//   };
//   person.push(newItem);
//   creatTodo(newItem);
//   L.set(person);
// });

// person = [
//   { value: "Pants", filter: false, id: "asda" },
//   { value: "Jacket", filter: false, id: "dasda" },
//   { value: "iPhone Charger", filter: true, id: "asd1" },
//   { value: "MacBook", filter: true, id: "2asd1" },
//   { value: "Sleeping Pills", filter: true, id: "2sd1" },
//   { value: "Underwear", filter: false, id: "2ssdfd1" },
//   { value: "Hat", filter: false, id: "2ssdf1" },
//   { value: "T-Shirts", filter: true, id: "2ssdf" },
//   { value: "Belt", filter: false, id: "2qweqwssdf" },
//   { value: "Passport", filter: false, id: "2qeqwssdf" },
//   { value: "Sandwich", filter: false, id: "2qewssdf" },
// ];

// const storage = {
//   get: JSON.parse(localStorage.getItem("person")),
//   set: (data) => localStorage.setItem("person", JSON.stringify(data)),
// };

// const start = () => {
//   storage.get === null ? storage.set(person) : (person = storage.get);
//   console.log(person);
// };
// start();

// const maininp = document.querySelector(".main_inp");
// const mainbtn = document.querySelector(".main_btn");

// const todo = document.querySelector(".todo");
// const made = document.querySelector(".made");

// const ToDo = (personItem) => {
//   const div = document.createElement("div");
//   const button = document.createElement("button");
//   const input = document.createElement("input");
//   const p = document.createElement("p");
//   const span = document.createElement("span");
//   const label = document.createElement("label");

//   button.textContent = "X";
//   p.textContent = personItem.value;
//   input.checked = personItem.filter;
//   input.type = "checkbox";

//   label.appendChild(input);
//   span.appendChild(label);
//   span.appendChild(p);
//   div.appendChild(span);
//   div.appendChild(button);

//   personItem.filter ? made.appendChild(div) : todo.appendChild(div);

//   button.onclick = () => {
//     div.remove();
//     person = person.filter((e) => e.id !== personItem.id);
//     storage.set(person);
//   };

//   input.onchange = () => {
//     person.find((e) => e.id === personItem.id).filter = input.checked;
//     input.checked ? made.appendChild(div) : todo.appendChild(div);
//     storage.set(person);
//   };

//   p.ondblclick = () => {
//     const newInp = document.createElement("input");
//     newInp.classList.add("item");
//     newInp.value = personItem.value;
//     p.textContent = "";
//     p.appendChild(newInp);
//     newInp.focus();

//     newInp.onblur = () => {
//       p.textContent = newInp.value;
//       newInp.remove();
//       personItem.value = newInp.value;
//       storage.set(person);
//     };
//   };
// };

// person.forEach(ToDo);

// mainbtn.addEventListener("click", () => {
//     const newItem = {
//       value: maininp.value,
//       filter: false,
//       id: "num_" + person.length + Math.random(),
//     };
//     person.push(newItem);
//     ToDo(newItem);
//     storage.set(person);
//   })



person = [
  { value: "Pants", filter: false, id: "asda" },
  { value: "Jacket", filter: false, id: "dasda" },
  { value: "iPhone Charger", filter: true, id: "asd1" },
  { value: "MacBook", filter: true, id: "2asd1" },
  { value: "Sleeping Pills", filter: true, id: "2sd1" },
  { value: "Underwear", filter: false, id: "2ssdfd1" },
  { value: "Hat", filter: false, id: "2ssdf1" },
  { value: "T-Shirts", filter: true, id: "2ssdf" },
  { value: "Belt", filter: false, id: "2qweqwssdf" },
  { value: "Passport", filter: false, id: "2qeqwssdf" },
  { value: "Sandwich", filter: false, id: "2qewssdf" },
];

const storage = {
  get: JSON.parse(localStorage.getItem("person")),
  set: (data) => localStorage.setItem("person", JSON.stringify(data)),
};

const start = () => {
  storage.get === null ? storage.set(person) : (person = storage.get);
  console.log(person);
};
start();

const maininp = document.querySelector(".main_inp");
const mainbtn = document.querySelector(".main_btn");

const todo = document.querySelector(".todo");
const made = document.querySelector(".made");

const ToDo = (personItem) => {
  const div = document.createElement("div");
  const button = document.createElement("button");
  const input = document.createElement("input");
  const p = document.createElement("p");
  const label = document.createElement("label");

  button.textContent = "X";
  p.textContent = personItem.value;
  input.checked = personItem.filter;
  input.type = "checkbox";

  label.appendChild(input);
  div.appendChild(label);
  div.appendChild(p);
  div.appendChild(button);

  personItem.filter ? made.appendChild(div) : todo.appendChild(div);

  button.onclick = () => {
    div.remove();
    person = person.filter((e) => e.id !== personItem.id);
    storage.set(person);
  };

  input.onchange = () => {
    person.find((e) => e.id === personItem.id).filter = input.checked;
    input.checked ? made.appendChild(div) : todo.appendChild(div);
    storage.set(person);
  };

  p.ondblclick = () => {
    const newInp = document.createElement("input");
    newInp.classList.add("item");
    newInp.value = personItem.value;
    p.textContent = "";
    p.appendChild(newInp);
    newInp.focus();

    newInp.onblur = () => {
      p.textContent = newInp.value;
      newInp.remove();
      personItem.value = newInp.value;
      storage.set(person);
    };
  };
};

person.forEach(ToDo);

mainbtn.addEventListener("click", () => {
    const newItem = {
      value: maininp.value,
      filter: false,
      id: "num_" + person.length + Math.random(),
    };
    maininp.value = ""
    person.push(newItem);
    ToDo(newItem);
    storage.set(person);
  })