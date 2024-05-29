// import logo from "./logo.svg";
import "./App.css";
import Nav from "./comp/nav";
import Car from "./comp/Car";
import contacts from "./comp/contacts";
function App() {
  const prof=contacts.map(i=>{
    return(<Car name={i.name} img={i.imgURL} company={i.company} phone={i.phone} email={i.email}/>)
  })
  return (
    <div>
      <Nav />
      <div className="card-list">{prof}</div>
    </div>
  );
}

export default App;
