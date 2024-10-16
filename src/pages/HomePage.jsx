import { FaPlus, FaSearch, FaRegTrashAlt    } from 'react-icons/fa';
import InvestmentBalanceBox from "../components/common/InvestmentBalanceBox";
import Sidebar from "../components/common/SideBar";
import "../assets/styles/HomePage.css";
import ModalNewTransaction from '../components/common/ModalNewTransaction';
import React, { useState } from 'react';
import Table from '../components/common/Table';

export default function Home() {
    const [openModal, setOpenModal] = useState(false);
    const itens = [{transacao: 'compra', investimento: 'criptomoedas', ativo: 'Sol', valor: 100, quantidade: 1, data: '01/01/2024'}, 
                    {transacao: 'compra', investimento: 'criptomoedas', ativo: 'Sol', valor: 100, quantidade: 1, data: '01/01/2024'},
                    {transacao: 'compra', investimento: 'criptomoedas', ativo: 'Sol', valor: 100, quantidade: 1, data: '01/01/2024'},
                    {transacao: 'compra', investimento: 'criptomoedas', ativo: 'Sol', valor: 100, quantidade: 1, data: '01/01/2024'},
                    {transacao: 'compra', investimento: 'criptomoedas', ativo: 'Sol', valor: 100, quantidade: 1, data: '01/01/2024'},];

    return (
        <div className="container_home_page">
            {openModal && <ModalNewTransaction setOpenModal={setOpenModal}/>}
            <Sidebar/>
            <main className="home_page">
                <div className="container_balance_box">
                    <InvestmentBalanceBox title='Saldo Investido' balance='100,00' background='#404040' color='#fff'/>
                    <InvestmentBalanceBox title='Criptomoedas' balance='100,00' background='#fff' color='#000'/>
                    <InvestmentBalanceBox title='Ações' balance='100,00' background='#fff' color='#000'/>
                    <InvestmentBalanceBox title='Fiis' balance='100,00' background='#fff' color='#000'/>
                    <InvestmentBalanceBox title='Dolar' balance='100,00' background='#fff' color='#000'/>
                </div>

                <div className='search_home_page'>
                    <label htmlFor='search' className='icon_home_page'>
                        <FaSearch/>
                    </label>
                    <input type="text" id='search' placeholder='Digite sua transação'/>
                </div>

                <div className='transactions'>
                    <Table transaction='Tipo da Transação' Investment='Tipo de Investimento' Active='Ativo' value='Valor' amount='Quantidade' date='data' thead='thead'/>

                    <div className='transaction_history'>
                        {
                            itens.map((item, index) => (
                                <Table key={index} transaction={item.transacao} Investment={item.investimento} Active={item.ativo} value={item.valor} amount={item.quantidade} date={item.data} trash='trash'/>
                            ))
                        }
                    </div>
                </div>
            </main>

            <div className='btn_add_transaction' onClick={() => setOpenModal(true)}>
               <FaPlus/>
            </div>
        </div>
    )
}