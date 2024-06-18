import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
function App() {
  return (
    <div className=" flex flex-col w-[300px] mx-auto">
      {/* <Header /> */}
      <Balance />
      <IncomeExpense />
      <History />
      <NewTransaction/>
    </div>
  );
}

export default App;
