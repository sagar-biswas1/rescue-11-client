import React, { useEffect, useState } from "react";
import NoteCard from "../components/noteCard/NoteCard";
import InputForm from "../components/inputForm/InputForm";
import Header from "../components/header/Header";
const Home = () => {
  const [notes, setNotes] = useState([]);

  const [isReload, setIsReload] = useState(true);
  
  useEffect(() => {
    fetch("http://localhost:4000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, [isReload]);

  /*
  1. here there will be a function named handleSearch
  to handle search by query, and it will be passed as props to header
  
    */

const handleFilter=(event)=>{
 event.preventDefault()
 const value = event.target.searchText.value
 
 fetch(`http://localhost:4000/notes?userName=${value}`)
 .then((res) => res.json())
 .then((data) => setNotes(data));
 
}

  /*2. here there will be a function named handleDelete
  to delete a note, and it will be passed as props to NoteCard that will be triggered using delete button.
   */

  /*
  3. there will be a function named handleUpdate
      to update data, and it will be passed as props to NoteCard and 
     later it will be passed to Update modal using props.
   */

  /*
  4.  there will be a function named handlePost
  to post data to backend, and it will be passed as props to InputFrom.
   */

  const handlePost = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const textData = form.textData.value;

    fetch("http://localhost:4000/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, textData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsReload(!isReload)
      });
  };

  return (
    <div>
      <Header handleFilter={handleFilter}/>
      <InputForm handlePost={handlePost} />
      <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
        {notes.map((note) => (
          <NoteCard note={note} setIsReload={setIsReload} isReload={isReload} />
        ))}
      </div>
    </div>
  );
};

export default Home;
