import '../../assets/styles/InvestmentBalanceBox.css'

export default function InvestmentBalanceBox({title, balance, background, color}) {
    return (
        <div className="investment_balance_box" style={{ background: background, color: color}}>
            <p className='title_balance_box'>
                {title}
            </p>
            <p className='balance_box'>
                R$ {balance}
            </p>
        </div>
    )
}