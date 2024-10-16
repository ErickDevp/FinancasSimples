import '../../assets/styles/ModalNewTransaction.css';

export default function  ({setOpenModal}) {

    return (
        <div className="modal">
            <div className="modal_transaction">
                <h1>Nova Transação</h1>
                <section>
                    <select>
                        <option value="Tipo de Transação" disabled selected>Tipo de Transação</option>
                        <option value="Compra">Compra</option>
                        <option value="Venda">Venda</option>
                        <option value="Outro">Outro</option>
                    </select>
                    <select name='Tipo de Investimento' >
                        <option value="Tipo de Investimento" disabled selected>Tipo de Investimento</option>
                        <option value="Criptomoedas">Criptomoedas</option>
                        <option value="Ações">Ações</option>
                        <option value="Fiis">Fiis</option>
                        <option value="Dolar">Dolar</option>
                    </select>
                </section>
                <select>
                    <option value="Ativo" disabled selected>Ativo</option>
                    <option value="BTC">BTC</option>
                    <option value="BTC">ETH</option>
                    <option value="BTC">SOL</option>
                </select>
                <div>
                    <input type="number" placeholder='Quantidade'/>
                </div>
                <div>
                    <input type="number" placeholder='Valor'/>
                </div>
                <div>
                    <input type="date"/>
                </div>
                <section>
                    <button className='modal_btn_cancelar' onClick={() => setOpenModal(false)}>Cancelar</button>
                    <button className='modal_btn'>Salvar</button>
                </section>
            </div>
        </div>
    )
}