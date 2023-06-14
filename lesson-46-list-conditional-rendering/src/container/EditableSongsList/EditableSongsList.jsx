import React, { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";

//assets
import "../../assets/styles/containers/songs-list.scss";


let PLAY_LIST = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

function EditableSongsList() {
 const [authorName, setAuthorName] = useState("new author");
 const [songName, setSongName] = useState("new song");
 const [songsToDisplay, setSongsToDisplay] = useState(PLAY_LIST);

 // ========================== Начало функциии ==========================

 useEffect(() => {
  const savedList = localStorage.getItem("songsTodisplay");
  console.log(savedList);
 }, []);

 useEffect(() => {
 localStorage.setItem("songsToDisplay", JSON.stringify(songsToDisplay));
}, [songsToDisplay]);

  const handleSubmit = (e) => {
   e.preventDefault();

   setSongsToDisplay([      // це ми пушаєм нови пісні в лист
    {                       // це ми пушаєм нови пісні в лист
     author: authorName,
     song: songName,
    },
    ...songsToDisplay,

   ]);

   setAuthorName("");  //очищає інпут піля додавання пісні іі автора
   setSongName("");
  }
   // ========================== Кінець функціі ==========================
  const handleDelete = (index) => {
   const newListToSave = [... songsToDisplay];

   newListToSave.splice(index, 1);
   console.log("handleDelete");

   setSongsToDisplay(newListToSave);

  }

  return (
    <section className="songs-list-wrapper">
      <form 
      className="songs-list__form"
      onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          className="songs-list__input" 
          placeholder="Author" 
          name="author"
          value={authorName}
          onChange= {e => setAuthorName(e.target.value)}
        />
        <input
          type="text"
          className="songs-list__input"
          placeholder="Song name"
          name="song"
          value={songName}
          onChange= {e => setSongName(e.target.value)}
        />
        <button type="submit" className="songs-list__button">
          Add
        </button>
      </form>
      <ul className="songs-list">

        {songsToDisplay.map((item, index) => {

          return (
            <li
              className={`songs-list__item ${
                index % 2 ? "songs-list__item_inactive" : ""
              }`}
              key={`songs-list__item-${index}`}
              // onClick={() => console.log(index)}
            >
              <div>
                <img
                  src={`https://picsum.photos/200/300?${index}`}
                  alt={`image for ${item.song} song`}
                />
              </div>
              <div className="songs-list__item-info">
                <b>{item.author}</b>
                <i>{item.song}</i>
              </div>
              <button 
              className="songs-list__item-delete"
              onClick={() => handleDelete(index)}
              >
                <MdDeleteOutline/>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default EditableSongsList;
