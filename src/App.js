import { useState } from "react";

function App() {
  const [bill, setbill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [custom, setCustom] = useState(0);
  const tipAmunt = (bill * tip) / people;
  const totle = bill / people + tipAmunt;
  const tipAmuntCustom = (bill * custom) / people;
  const totlecustom = bill / people + tipAmuntCustom;

  return (
    <div className="app">
      <div className="continer">
        <div className="rigth-form">
          <div className="label">
            <label>bill</label>
            <input
              type="number"
              value={bill}
              onChange={(e) => setbill(Number(e.target.value))}
            />
          </div>
          <p>selected tip</p>
          <SelectedBtn
            tip={tip}
            setTip={setTip}
            coustom={custom}
            setCustom={setCustom}
          />
          <label>Number of people</label>
          <br />
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
          />
        </div>
        <div className="leftForm">
          <Leftform
            tipAmunt={tipAmunt}
            totle={totle}
            bill={bill}
            people={people}
            tip={tip}
            setbill={setbill}
            setTip={setTip}
            setPeople={setPeople}
            custom={custom}
            setCustom={setCustom}
            tipAmuntCustom={tipAmuntCustom}
            totlecustom={totlecustom}
          />
        </div>
      </div>
    </div>
  );
}
function SelectedBtn({ tip, setTip, custom, setCustom }) {
  return (
    <div className="btn-contener">
      <button
        className="btn-select"
        value={0.05}
        onClick={(el) => setTip(Number(el.target.value))}
      >
        5%
      </button>
      <button
        className="btn-select"
        value={0.1}
        onClick={(el) => setTip(Number(el.target.value))}
      >
        10%
      </button>
      <button
        className="btn-select"
        value={0.15}
        onClick={(el) => setTip(Number(el.target.value))}
      >
        15%
      </button>
      <button
        className="btn-select"
        value={0.25}
        onClick={(el) => setTip(Number(el.target.value))}
      >
        25%
      </button>
      <button
        className="btn-select"
        value={0.5}
        onClick={(el) => setTip(Number(el.target.value))}
      >
        50%
      </button>
      <input
        type="number"
        placeholder="Custom"
        className="btn-select custom"
        value={custom}
        onChange={(e) => setCustom(Number(e.target.value))}
      />
    </div>
  );
}
function Leftform({
  tipAmunt,
  totle,
  bill,
  people,
  tip,
  setPeople,
  setbill,
  setTip,
  custom,
  setCustom,
  totlecustom,
  tipAmuntCustom,
}) {
  function reset() {
    setbill(0);
    setPeople(0);
    setTip(0);
    setCustom(0);
  }
  return (
    <div>
      <div className="amount">
        <p style={{ color: " hsl(189, 41%, 97%)" }}>
          <strong style={{ color: " hsl(0, 0%, 100%)" }}>Tip Amount</strong>
          <br />
          /person
        </p>
        <h2>
          $
          {custom > 0 && bill > 0 && people > 0
            ? tipAmuntCustom
            : bill > 0 && people > 0 && tip > 0
            ? tipAmunt
            : "0"}
        </h2>
      </div>
      <div className="amount">
        <p style={{ color: " hsl(189, 41%, 97%)" }}>
          <strong style={{ color: " hsl(0, 0%, 100%)" }}>totle</strong>
          <br />
          /person
        </p>
        <h2>
          $
          {custom > 0 && bill > 0 && people > 0
            ? tipAmuntCustom
            : bill > 0 && people > 0 && tip > 0
            ? totlecustom
            : "0"}
        </h2>
      </div>
      <button className="btn-reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
