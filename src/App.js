import "./styles.css";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");

  const onAddHandler = function () {
    //let newContact = {fname,lname,phone};
    //console.log(newContact);
    let newList = [...contacts, { fname, lname, phone }];
    setContacts(sortContacts(newList));
    setFname("");
    setLname("");
    setPhone("");
    console.log(contacts);
  };
  const sortContacts = function (list) {
    let newList = list;
    newList.sort((a, b) => {
      return a.lname.localeCompare(b.lname);
    });
    return newList;
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <label>firstname</label>
      <input
        type="text"
        id="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <label>LastName</label>
      <input
        type="text"
        id="lname"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <label>Phone</label>
      <input
        type="number"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit" onClick={onAddHandler}>
        Add
      </button>
      <div>
        {contacts.map((contact, index) => {
          return (
            <p key={index}>
              {contact.fname + "  " + contact.lname + " " + contact.phone}
            </p>
          );
        })}
      </div>
    </div>
  );
}
