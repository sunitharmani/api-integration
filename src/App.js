import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import DataTableExample from './service'
import DataTableExample  from './datatable';

const App = ()  => {

  const [data, setData] = useState([])
  const returnAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve("Executing")
    }, 3000)
  })

  async function callingAsync() {
     await returnAsync.then((data) => {
      console.log(data)
    })
    console.log("Execution completed")
  }

  callingAsync()


useEffect(() => {
  const url = "https://hn.algolia.com/api/v1/search?query=redux";

  const fetchData = async () => {
      try {
          const response = await axios(url)
          //const response = await fetch(url)
          //const json = response.json()
          setData(json);
      } catch (error) {
          console.log("error", error)
      }
  };

  fetchData();
}, []);
 
console.log(data)

  return (
    <div className="App">
      <DataTableExample />
    </div>
  );
}

export default App;
