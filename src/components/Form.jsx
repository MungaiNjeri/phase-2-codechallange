import React, { useState } from 'react';

import Transaction from './Transaction';
const Form = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Transaction 1' },
    
  ]);
  const [newDescription, setNewDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      description: newDescription,
    };
    setTransactions([...transactions, newTransaction]);
    setNewDescription('');
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div >
        <h1>THE ROYAL BANK OF FLATIRON</h1>
        
        <Transaction/>

    
      
    </div>
  );
};

export default Form;
