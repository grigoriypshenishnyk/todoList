person = [
  { value: "Buy bread", filter: false, id: "asda" },
  { value: "Buy milk", filter: false, id: "dasda" },
  { value: "Charge Phone", filter: true, id: "asd1" },
  { value: "Fill car with fuel", filter: true, id: "2asd1" },
  { value: "Check average fuel consumption", filter: true, id: "2sd1" },
  { value: "Buy water", filter: false, id: "2ssdfd1" },
  { value: "Change tires", filter: true, id: "2ssdf" },
  { value: "Change timing belt", filter: true, id: "2qweqwssdf" }
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
  if (maininp.value != "") {
      const newItem = {
        value: maininp.value,
        filter: false,
        id: "num_" + person.length + Math.random(),
      };
      maininp.value = ""
      person.push(newItem);
      ToDo(newItem);
      storage.set(person);
  }   
})
