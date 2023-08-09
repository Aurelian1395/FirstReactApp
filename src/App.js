import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses= [
    {
      id: "e1",
      title: "Auto comprata",
      amount: 12900.0,
      date: new Date(2022, 12, 14),
    },
    {
      id: "e2",
      title: "Microonde",
      amount: 125.0,
      date: new Date(2022, 10, 25),
    },
    {
      id: "e3",
      title: "Lavatrice",
      amount: 400.0,
      date: new Date(2022, 1, 10),
    },
  ];
 

  return (
   <Expenses item={expenses}/>
  );
}

export default App;
