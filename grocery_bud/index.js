const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";

const addItem = (e) => {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    //create elment
    const elem = document.createElement("article");
    elem.classList.add("grocery-item");
    //adding attribute
    const attr = document.createAttribute("data-id");
    attr.value = id;
    elem.setAttributeNode(attr);

    elem.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <!-- edit btn -->
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;

    const deleteBtn = elem.querySelector(".delete-btn");
    const editBtn = elem.querySelector(".edit-btn");

    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    list.appendChild(elem);

    // console.log(elem);

    alertItem("Item add success!!!", "success");

    container.classList.add("show-container");

    addToLocalStorage(id, value);
    setBackToDefault();

    // console.log("add item");
  } else if (value && editFlag) {
    editElement.firstChild.innerHTML = value;
    alertItem("Item edited !!!", "success");

    editLocalStorage(editID, value);
    setBackToDefault();

    console.log("editing item");
  } else {
    alertItem("Empty Value", "danger");
    // console.log("empty value");
  }
};

const removeitemList = () => {
  const lists = document.querySelectorAll(".grocery-item");

  if (lists.length > 0) {
    lists.forEach((item) => {
      list.removeChild(item);
    });
  }
  alertItem("Empty List", "danger");
  container.classList.remove("show-container");

  setBackToDefault();

  //   localStorage.removeItem(list)
};

const deleteItem = (e) => {
  const elem = e.currentTarget.parentElement.parentElement;
  const id = elem.dataset.id;

  list.removeChild(elem);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }

  removeLocalStorage(id);
};

const removeLocalStorage = (id) => {
  const items = getLocalStorageItems();

  const newItems = items.filter((item) => {
    return item.id !== id;
  });

  // console.log(newItems);
  localStorage.setItem("list", JSON.stringify(newItems));
};

const addToLocalStorage = (id, value) => {
  const grocery = { id, value };
  const items = getLocalStorageItems();

  // console.log(items);

  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));

  //   console.log("added to local storage");
};

const getLocalStorageItems = () => {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
};

const editLocalStorage = (editId, value) => {
  const items = getLocalStorageItems();

  const newItems = items.map((item) => {
    if (item.id === editID) {
      item.value = value;
    }
    return item;
  });

  // console.log(newItems);
  localStorage.setItem("list", JSON.stringify(newItems));
  // console.log("edit in local storage value");
};
const editItem = (e) => {
  const elem = e.currentTarget.parentElement.parentElement;
  const id = elem.dataset.id;

  editElement = elem;
  editFlag = true;
  editID = id;
  submitBtn.textContent = "Edit";

  grocery.value = editElement.firstChild.innerHTML;

  //   console.log(editElement);
  console.log("edit item");
};

const setBackToDefault = () => {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "Submit";
  //   console.log("set back to default");
};

const alertItem = (text, action) => {
  //instead of this use setTimeout
  // const rem = alert.classList.contains("alert-success");
  // if (rem) {
  //   alert.classList.remove("alert-success");
  // }
  alert.innerText = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.innerText = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
};

form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", removeitemList);
