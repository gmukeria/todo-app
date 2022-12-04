import React from "react";
import "./App.css";
import Header from "./componeents/Header";
import List from "./componeents/List";
import Card from "./componeents/Card";

function App() {
  function formatAMPM(date: any) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  let nawTime: string = formatAMPM(new Date());

  return (
    <div className="App">
      <Card>
        <Header time={nawTime} />
        <List time={nawTime} />
      </Card>
    </div>
  );
}

export default App;
