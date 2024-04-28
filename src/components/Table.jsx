
import Row from "./Row";

export default function Table() {
    const transactions = [
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

    return (
        <>
            <table className="table table-light">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Action</th>                    
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <Row
                            key={index} 
                            date={transaction.date}
                            description={transaction.description}
                            category={transaction.category}
                            amount={transaction.amount}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
}
