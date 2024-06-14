import "./App.css";
import Container from "./Components/Container";
import  {useState} from 'react';
const headerStyle = {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "600",
    letterSpacing: "2px",
    fontSize: "3rem",
    paddingTop: "3rem",
  };
export default function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipRate, setTipRate] = useState('');
  const [tipAmount, setTipAmount] = useState(0.0);
  const [totalAmount, setTotalAmount] = useState(0.00)
  
  return (
    <main>
      <h1 style={headerStyle}>Tip Calulator</h1>
      <Container />
      
      
    </main>
  );
}
