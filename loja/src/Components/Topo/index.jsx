import './Topo.css'
import logo from '../../assets/logoLoja.png';

export default function Topo() {
    return (
        <header>
            <div className='anuncio'>
                <div className='anuncio-conteudo'>
                    <p>Tudo em 10x sem juros!</p>
                </div>
            </div>

            <div className='topo'>
                <picture>
                    <a href='#'>
                        <img src={logo} alt="Logo da loja" />
                    </a>
                </picture>

                <nav>
                    <a href='#'>Home</a>
                    <a href='#'>Produtos</a>
                    <a href='#'>Lançamentos</a>
                    <a href='#'>Contato</a>
                </nav>
            </div>
        </header>
    )
}