
import './App.css';
import axios from 'axios';



function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const config ={
    headers:{"Content-Type": "application/json"}
  }

//  axios.request({
//    method: "GET",
//    url: url,
//    ...config
//  }).then((res) =>console.log(res.data))
  
//  axios.get(url,config).then((res) =>console.log(res.data))
  
//  axios.post(url,{title: "DEV Learner", body: "WElCOME my boys"}, config).then((res)=> console.log(res.data)).catch((err) => console.log(err))
  axios.put(`${url}/1`, {title: "API", body: "Today we discuss about API"}, config).then((res)=> console.log(res.data)).catch((err)=> console.log(err))
  axios.delete(`${url}/1`,config).then((res)=> console.log(res.data)).catch((err)=> console.log(err))
  return (
    <div className="app">
      
    </div>
  );
}

export default App;
