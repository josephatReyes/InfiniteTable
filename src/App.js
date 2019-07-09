import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'react-virtualized/styles.css'; // only needs to be imported once
import { FixedSizeList as List } from "react-window";
import { list } from './list';
// Table data as an array of objects

const Row = ({ index, style }) => (
  <table className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
  
    <tbody>
<tr>

  <td style={{width:100}}>
  {list[index].userId}
  </td>
  <td style={{width:100}}>
  {list[index].id}
  </td>
  <td style={{width:200}}>
    {list[index].title}
  </td>
  <td style={{width:200}}>
    {list[index].completed}
  </td>

  <td style={{width:200}}>
    <div className="icon-check-events-gray " onClick={()=>{alert("open modal"+ list[index].userId)}}>

    </div>
    <div className="icon-messaje-events">

    </div>

    <div className="icon-save-events ">

    </div>
    <div className="icon-view-events">

</div>

  </td>
</tr>
    </tbody>
  </table>

);


function App() {

  const [lista, setLista]= useState(list);




  useEffect(()=>{
    console.log(lista)
  },[lista])
  return (
    <div className="App">


<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
  <div>

  <table>

<thead>
<tr>
  <th style={{width:100}}>
    userId
  </th>
  <th style={{width:100}}>
    id
  </th>

  <th style={{width:200}}>
    title
  </th>

  <th style={{width:200}}>
    completed
  </th>
  <th style={{width:200}}>
    Actions
  </th>

  </tr>
</thead>


</table>


<List
  className="List"
  height={150}
  itemCount={list.length}
  itemSize={35}
  width={800}
>
  {Row}
</List>


  </div>
  </Tab>
  <Tab eventKey="profile" title="Profile">
   <div>

   <table>

<thead>
<tr>
  <th style={{width:100}}>
    userId
  </th>
  <th style={{width:100}}>
    id
  </th>

  <th style={{width:200}}>
    title
  </th>

  <th style={{width:200}}>
    completed
  </th>
  <th style={{width:200}}>
    Actions
  </th>

  </tr>
</thead>


</table>


<List
  className="List"
  height={150}
  itemCount={list.length}
  itemSize={35}
  width={800}
>
  {Row}
</List>


     </div>

  </Tab>
  <Tab eventKey="contact" title="Contact" >
<div>


<table>

<thead>
<tr>
  <th style={{width:100}}>
    userId
  </th>
  <th style={{width:100}}>
    id
  </th>

  <th style={{width:200}}>
    title
  </th>

  <th style={{width:200}}>
    completed
  </th>
  <th style={{width:200}}>
    Actions
  </th>

  </tr>
</thead>


</table>


<List
  className="List"
  height={150}
  itemCount={list.length}
  itemSize={35}
  width={800}
>
  {Row}
</List>


  </div>
  </Tab>
</Tabs>




  
    </div>
  );
}

export default App;
