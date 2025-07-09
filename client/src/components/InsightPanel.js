import React from 'react';

export default function InsightPanel({ transactions }) {
  const totalCredit = transactions.filter(tx => tx.type === 'credit')
                                  .reduce((sum, tx) => sum + tx.amount, 0);
  const totalDebit = transactions.filter(tx => tx.type === 'debit')
                                 .reduce((sum, tx) => sum + tx.amount, 0);
  const net = totalCredit - totalDebit;

  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1 p-4 bg-green-100 rounded">
        <h3 className="text-lg font-semibold">Total Credits</h3>
        <p className="text-2xl font-bold text-green-700">₹{totalCredit}</p>
      </div>
      <div className="flex-1 p-4 bg-red-100 rounded">
        <h3 className="text-lg font-semibold">Total Debits</h3>
        <p className="text-2xl font-bold text-red-700">₹{totalDebit}</p>
      </div>
      <div className="flex-1 p-4 bg-blue-100 rounded">
        <h3 className="text-lg font-semibold">Net Balance</h3>
        <p className="text-2xl font-bold text-blue-700">₹{net}</p>
      </div>
    </div>
  );
}
