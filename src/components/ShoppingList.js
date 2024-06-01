import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItems , setSearchedItems] = useState("")
  const [submittedItem , setSubmittedItem] = useState(items)


  function handleSubmit (newItem){
      setSubmittedItem([...submittedItem, newItem])
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = submittedItem.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  function handleSearch(e){
    setSearchedItems(e.target.value.toLowerCase())
  }

  const searchedItem = itemsToDisplay.filter((item)=> {
    if (searchedItems === "") return true;
    return item.name.toLowerCase().includes(searchedItems)
  })



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch}/>
      <ul className="Items">
        {searchedItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
