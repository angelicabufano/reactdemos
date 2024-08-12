//songs exercise

// const { useState, useEffect } = React;
// const songs = [
//   {
//     songID: 1,
//     title: "Levitating",
//     artist: "Dua Lipa",
//     album: "Future Nostalgia",
//     year: 2020,
//     genre: "Pop",
//     durationInSeconds: 203,
//   },
//   {
//     songID: 2,
//     title: "Blinding Lights",
//     artist: "The Weeknd",
//     album: "After Hours",
//     year: 2019,
//     genre: "Synthpop",
//     durationInSeconds: 200,
//   },
//   {
//     songID: 3,
//     title: "Good 4 U",
//     artist: "Olivia Rodrigo",
//     album: "SOUR",
//     year: 2021,
//     genre: "Pop Punk",
//     durationInSeconds: 178,
//   },
//   {
//     songID: 4,
//     title: "Stay",
//     artist: "The Kid LAROI, Justin Bieber",
//     album: "F*ck Love 3: Over You",
//     year: 2021,
//     genre: "Pop",
//     durationInSeconds: 141,
//   },
//   {
//     songID: 5,
//     title: "Montero (Call Me By Your Name)",
//     artist: "Lil Nas X",
//     album: "Montero",
//     year: 2021,
//     genre: "Pop Rap",
//     durationInSeconds: 137,
//   },
// ];

// const songAPI = {
//   list() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(songs);
//       }, 1000);
//     });
//   },
// };

// function App() {
//   return (
//     <div className="container">
//       <SongList />
//     </div>
//   );
// }

// function SongList() {
//   const [songs, setSongs] = useState([]);
//   const [busy, setBusy] = useState(false);

//   async function loadSongs() {
//     setBusy(true);
//     let data = await songAPI.list();
//     setSongs(data);
//     setBusy(false);
//   }

//   useEffect(function () {
//     loadSongs();
//   }, []);

//   return (
//     <div>
//       <header>
//         <h1>Songs</h1>
//       </header>
//       <div className="list">
//         {busy && <div>Loading...</div>}
//         {songs.map((song) => (
//           <div className="card" key={song.songID}>
//             <strong>{song.title}</strong>
//             <div>{song.artist}</div>
//             <small>{song.year}</small>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// exercise 5
// function App() {
//   // const [user, setUser] = React.useState(undefined);
//    const [user, setUser] = React.useState({
//     first: "James",
//     last: "Roday"
//    });
//   return <AccountHeader user={user} />;
// }
// function AccountHeader({ user }) {
//   return user ? (
//     <span>
//       {user.first} {user.last}
//     </span>
//   ) : (
//     <a href="sign-in.html">Sign In</a>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// exercise 6

// const { useState } = React;

// function FruitListItem(props) {
//   return (
//     <li>
//       {props.fruit.name} | <button onClick={props.onRemove}>Delete</button>
//     </li>
//   );
// }

// function FruitList() {
//   const [fruits, setFruits] = useState([
//     { id: 1, name: "apple" },
//     { id: 2, name: "orange" },
//     { id: 3, name: "blueberry" },
//     { id: 4, name: "banana" },
//     { id: 5, name: "kiwi" },
//   ]);

//   function removeFruit(fruit) {
//       let updatedFruits = fruits.filter((f) => f.id !== fruit.id);
//       setFruits(updatedFruits);
//     };

//   return (
//     <ul>
//       {fruits.map((fruit) => (
//         <FruitListItem key={fruit.id} fruit={fruit} onRemove={() => removeFruit(fruit)} />
//       ))}
//     </ul>
//   );
// }

// function App() {
//   return <FruitList />;
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// const { useState } = React;

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
//   function loadData() {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setData([1, 2, 3, 4]);
//     }, 3000);
//   }

//   return (
//     <>
//       {loading && <p>Loading...</p>}
//       <pre>{JSON.stringify(data, null, ' ')}</pre>
//       <button onClick={loadData}>Load Data</button>
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//if
// function DropdownMenu() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleClick = () => {
//     setIsOpen((currentIsOpen) => !currentIsOpen);
//   };
//   let menu;
//   if (isOpen) {
//     menu = (
//       <ul>
//         <li>Edit</li>
//         <li>Remove</li>
//         <li>Archive</li>
//       </ul>
//     );
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Actions</button>
//       {menu}
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<DropdownMenu />);

// //&&
// function DropdownMenu() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleClick = () => {
//     setIsOpen((currentIsOpen) => !currentIsOpen);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Actions</button>
//       {isOpen && (
//         <ul>
//           <li>Edit</li>
//           <li>Remove</li>
//           <li>Archive</li>
//         </ul>
//       ) }
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<DropdownMenu />);

// //?
// function DropdownMenu() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleClick = () => {
//     setIsOpen((currentIsOpen) => !currentIsOpen);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Actions</button>
//       {isOpen ? (
//         <ul>
//           <li>Edit</li>
//           <li>Remove</li>
//           <li>Archive</li>
//         </ul>
//       ) : null}
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<DropdownMenu />);

// import React, { useState } from "react";

// function Loading() {
//   let [message, setMessage] = useState("");
//   function display() {
//         setMessage("Loading");
//        }
//        function reset() {
//         setMessage("")

//        }
// return(
//   <div>
//   <button onMouseOver={display} onMouseOut={reset}>
//     Display</button>
//   </div>
// )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Loading />);

//  import React, { useState } from "react";

// function App() {
//   function display() {
//     alert("Boo");
//   }
//   let [message, setMessage] = React.useState("");
//   let displayMessage = () => {
//     setMessage("Message in the bottle");
//   };
//   return (
//     <div>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat obcaecati corporis, tenetur a hic facere
//         consequatur accusamus dolorum eligendi laboriosam non quidem eos labore dicta ullam enim. Nisi, nihil dolor.
//       </p>
//       <button onClick={display}>Display</button>
//       <p>{message}</p>
//     </div>
//   );

// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// function Greeter({first, last, age}) {
//   return <h2>Hello, {first} {last}. He is {age}. </h2>;
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Greeter first="Kanye" last="West" age="47"/>);

// function handleClick() {
//   console.log('clicked');
// }

// function App() {
//   return <button onClick={handleClick}>Click Me!</button>;
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// function addMinutes(date, minutes) {
//   //we multiply minutes by 60000 is to convert minutes to milliseconds
//   return new Date(date.getTime() + minutes * 60000);
// }

// function Clock() {
//   const [time, setTime] = React.useState(new Date());

//   const handleClick = () => {
//     setTime(addMinutes(time, 10));
//   };

//   return (
//     <div>
//       <p>{time.toLocaleTimeString()}</p>
//       <button onClick={handleClick}>+ 10 Minutes</button>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Clock />);

// function FruitListItem(props) {
//   function handleClick(id) {
//     console.log(`removed ${id}`);
//   }

//   return <li onClick={() => handleClick(props.fruit.id)}>{props.fruit.name} </li>
// }

// function FruitList(props) {
//   const fruitListItems = props.fruits.map((fruit) => (
//     <FruitListItem key={fruit.id} fruit={fruit} />
//   ));
//   return <ul>{fruitListItems}</ul>;
// }

// const data = [
//   { id: 1, name: 'apple' },
//   { id: 2, name: 'orange' },
//   { id: 3, name: 'blueberry' },
//   { id: 4, name: 'banana' },
//   { id: 5, name: 'kiwi' },
// ];

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <FruitList fruits={data} />
// );
