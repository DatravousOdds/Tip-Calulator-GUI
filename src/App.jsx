import "./App.css";
import Container from "./Components/Container";

const headerStyle = {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "600",
    letterSpacing: "2px",
    fontSize: "3rem",
    paddingTop: "3rem",
  };
export default function App() {
  
  
  return (
    <main>
      <h1 style={headerStyle}>Tip Calulator</h1>
      <Container />
      
      
    </main>
  );
}
