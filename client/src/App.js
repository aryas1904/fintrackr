import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import InsightPanel from './components/InsightPanel';

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await axios.get('https://fintrackr-nwki.onrender.com/api/transactions');
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const addTransaction = async (transaction) => {
    await axios.post('https://fintrackr-nwki.onrender.com/api/transactions', transaction);
    fetchTransactions();
  };

  const updateTransaction = async (id, updated) => {
    await axios.put(`https://fintrackr-nwki.onrender.com/api/transactions/${id}`, updated);
    fetchTransactions();
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`https://fintrackr-nwki.onrender.com/api/transactions/${id}`);
    fetchTransactions();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Expense Tracker</h1>
      <TransactionForm onAdd={addTransaction} />
      <InsightPanel transactions={transactions} />
      <TransactionList
        transactions={transactions}
        onUpdate={updateTransaction}
        onDelete={deleteTransaction}
      />
    </div>
  );
}

export default App;
