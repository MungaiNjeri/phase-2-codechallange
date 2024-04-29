import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import Search from './components/Search';
import { useState } from'react';
function App() {
  const data = [
    {
        date: "15/July/2025",
        description: "Withdraw",
        category: "Income",
        amount: "5000",
    },
    {
        date: "25/agust/2020",
        description: "Personal-use",
        category: "Food",
        amount: "3500",
    },
    {
        date: "15/April/2022",
        description: "Vacation",
        category: "Travel",
        amount: "10000",
    },
    {
        date: "16/January/2024",
        description: "Fees",
        category: "Education",
        amount: "8000",
    }
];
const [transactions, setTransactions] = useState(data);
const [searchTerm, setSearchTerm] = useState('');

const handleSearch = (term) => {
  setSearchTerm(term);
};
const filteredTransactions = transactions.filter(item=>{
  if(searchTerm.length>0){
    return item.description.toLowerCase().includes(searchTerm.toLowerCase())
  }
  else{
    return true
  }
  })


const addTransaction = (transaction) => {
  setTransactions([...transactions, transaction]);
};
const handleDelete = (index) =>{
  setTransactions(transactions.filter((item, i) => i!== index))
}
  return (
    <>
         <h1 style={{ backgroundColor: "#0a84ff",textAlign:"center" }}>THE ROYAL BANK OF FLATIRON</h1>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <Form addTransaction={addTransaction} />
      <Table transactions={filteredTransactions} handleDelete={handleDelete} />

    </>
  );
}

export default App;
