import { FaRegTrashAlt } from 'react-icons/fa';
import '../../assets/styles/Table.css'

export default function Table({transaction, Investment, Active, value, amount, date, thead, trash}) {
    return (
        <div className='table'>
            <span className={`tbody ${thead}`}>{transaction}</span>
            <span className={`tbody ${thead}`}>{Investment}</span>
            <span className={`tbody table_width ${thead}`}>{Active}</span>
            <span className={`tbody table_width ${thead}`}>{value}</span>
            <span className={`tbody table_width ${thead}`}>{amount}</span>
            <span className={`tbody ${thead}`}>{date}</span>
            <span className={`tbody icon_trash ${trash} ${thead}`}><FaRegTrashAlt/></span>
        </div>
    )
}