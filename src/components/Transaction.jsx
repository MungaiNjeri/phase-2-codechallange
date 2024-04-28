import React, { useState } from 'react';
import Search from './Search';
const BankTransactions = () => {
  // State for storing transactions and search term
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle form submission and add a new transaction
  const handleAddTransaction = (e) => {
    e.preventDefault();
    // Add new transaction to the transactions state
    const newTransaction = { id: transactions.length + 1, description: e.target.description.value, amount: parseFloat(e.target.amount.value) };
    setTransactions([...transactions, newTransaction]);
    // Clear form fields
    e.target.reset();
  };

  // Function to filter transactions based on search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <Search/>
      
      {/* Form to add a new transaction */}
      <form onSubmit={handleAddTransaction}>
        <input type="text" name="description" placeholder="date" required />
        <input type="number" name="amount" placeholder="Amount" required />
        <button type="submit">Add Transaction</button>
      </form>
      {/* Search bar */}
      <input type="text" placeholder="Search transactions..." onChange={(e) => setSearchTerm(e.target.value)} />
      {/* Table to display transactions */}
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankTransactions;
