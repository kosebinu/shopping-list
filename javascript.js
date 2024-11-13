const itemInput = document.getElementById("itemInput")
const addItemButton = document.getElementById("addItemButton")
const shoppingList = document.getElementById("shoppingList")


// function to add item to the list
function addItem() {
    const itemText = itemInput.value.trim();

    if(itemText === "") return;

    const listItem = document.createElement("li");

    const itemSpan = document.createElement("span");
    itemSpan.textContent = itemText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"
    deleteButton.style.marginLeft = "30px";

    deleteButton.addEventListener("click", () => {
        shoppingList.removeChild(listItem);
    });

    listItem.appendChild(itemSpan);
    listItem.appendChild(deleteButton);

    shoppingList.appendChild(listItem);

    itemInput.value = "";
    itemInput.focus;

}

// Add event listener to the button to add items
addItemButton.addEventListener("click", addItem);


// Allow pressing "Enter" to add the item
itemInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  });