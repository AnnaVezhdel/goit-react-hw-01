import s from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    const tableData = items.map (({ id, type, amount, currency }) =>
        <tr className={s.tableRow} key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        </tr>
    );
return (
<table className={s.table}>
    <thead className={s.tableHead}>
    <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
    </tr>
    </thead>

    <tbody>{tableData}</tbody>
</table>
)
}

export default TransactionHistory