import React from 'react';

export default function TransactionList({ transactions, onUpdate, onDelete }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Transactions</h2>
      <div className="space-y-2">
        {transactions.map((tx) => (
          <div key={tx._id} className="p-3 border rounded flex justify-between items-center">
            <div>
              <span className={`font-bold ${tx.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                {tx.type.toUpperCase()}
              </span>{' '}
              ₹{tx.amount} - {tx.category}
              <div className="text-sm text-gray-600">{tx.description}</div>
            </div>
            <div className="space-x-2">
              <button onClick={() => {
                const amount = prompt("New amount:", tx.amount);
                if (amount) onUpdate(tx._id, { ...tx, amount: parseFloat(amount) });
              }} className="px-2 py-1 bg-yellow-400 rounded">Edit</button>
              <button onClick={() => onDelete(tx._id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
