import './Home.css';
import home from './../../../src/assets/home.svg';

export function Home() {
    return (
        <main>
            <div className='container'>
                <h1 className='h1home'>Bem-vindo!</h1>
                <h2>Este é o nosso web site de divulgação de Perfis</h2>
                <p>Use a barra de navegação para acessar as informações c:</p>
            </div>
            <div className='homepic'><img src={home} alt="pic home" className='Homepic' /></div>
        </main>
    );
}