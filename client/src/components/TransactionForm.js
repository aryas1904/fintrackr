import React, { useState } from 'react';

export default function TransactionForm({ onAdd }) {
  const [type, setType] = useState('credit');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ type, amount: parseFloat(amount), category, description });
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-gray-100 p-4 rounded">
      <div className="flex gap-4 mb-2">
        <select value={type} onChange={(e) => setType(e.target.value)} className="p-2 border rounded">
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded flex-1"
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded">
          <option>Food</option>
          <option>Travel</option>
          <option>Billing</option>
          <option>Others</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Add Transaction</button>
    </form>
  );
}
