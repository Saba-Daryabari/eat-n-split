import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
    </div>
  );
}
console.log(initialFriends);


function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return(
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && <p className="red"> you owe {friend.name} ${Math.abs(friend.balance)} </p>}
      {friend.balance > 0 && <p className="green">  {friend.name} owes you ${Math.abs(friend.balance)} </p>}
      {friend.balance === 0 && <p className=""> you and {friend.name} are even </p>}
      <Button>Select</Button>
      
    </li>
  )

}

function Button({children}){
  return <button className="button">{children}</button>

}
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👯‍♀️ Friend name</label>
      <input type="text" placeholder="Friend's name" required />
      <input type="url" placeholder="Friend's image URL" required />
      <button className="button">Add</button>
    </form>
  );
}