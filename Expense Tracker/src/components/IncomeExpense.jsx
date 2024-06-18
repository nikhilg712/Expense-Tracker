import React from "react";

const IncomeExpense = () => {
  return (
    <div className="mt-6 h-[5rem] flex gap-10 shadow-lg w-full justify-center items-center">
      <div className="text-center">
        <p className="text-xl">INCOME</p>
        <p className="text-green-500 text-xl">Income</p>
      </div>
      <div className="border-l-2 border-gray-400 h-10"></div>
      <div className="text-center">
        <p className="text-xl">EXPENSE</p>
        <p className="text-red-500 text-xl">Expense</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
