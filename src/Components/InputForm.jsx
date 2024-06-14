import { useState } from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';

const InputForm = () => {
  // this.setVariables = this.setVariables.bind(This)
  const [billAmount, setBillAmount] = useState();

  const [tipRate, setTipRate] = useState();

  const [buttonClicked, setButtonClicked] = useState(false);

  const [tipAmount, setTipAmount] = useState(0.0);

  const [totalAmount, setTotalAmount] = useState(0.0);

  const handleBillAmountChange = (event) => {
    setBillAmount(event.target.value);
  };

  const handleTipRateChange = (event) => {
    setTipRate(event.target.value);
  };

  // The logic to calculate the tip amount
  const calculateTip = () => {
    const tip = (parseFloat(billAmount) * parseFloat(tipRate)) / 100;
    return tip;
  };

  // The logic to calculate the total amount
  const calculateTotal = () => {
    const tip = calculateTip();
    const total = parseFloat(billAmount) + tip;
    return total;
  };

  const handleBtnClicked = () => {
    const tip = calculateTip();
    const total = calculateTotal();
    setTipAmount(tip);
    setTotalAmount(total);
    setButtonClicked(true);
  };

  return (
    <div className="inputContainer">
      <div className="preface">
        <label className="billAmount" htmlFor="billAmount">
          Bill Amount:
        </label>
        <input
          value={billAmount}
          onChange={handleBillAmountChange}
          type="text"
          name="billAmount"
          className="bill"
          id="billAmount"
        />
      </div>

      <div className="preface">
        <label className="tipRate" htmlFor="tipRate">
          Tip Rate:
        </label>
        <input
          value={tipRate}
          onChange={handleTipRateChange}
          type="text"
          name="tipRate"
          className="tip"
          id="tipRate"
        />
      </div>

      <button
        className={`btn ${buttonClicked ? "btn-active" : ""}`}
        onClick={handleBtnClicked}
      >
        Calculate
      </button>
      <div id="display">
        <h1>Tip: ${billAmount && tipAmount ? tipAmount.toFixed(2) : " "}</h1>
        <h1>Total: ${billAmount && tipAmount ? totalAmount.toFixed(2) : " "}</h1>
      </div>
    </div>
  );
};

export default InputForm;
