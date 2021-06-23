import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import '../assets/styles/auth.css';

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração para perguntas e respostas"/>

                <strong>Crie salas de Q&amp;A ao-vivos</strong>
                <p>Tire dúvidas de sua audiência ao vivo</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Let me ask" />

                    <button className="create-room">
                        <img src={googleIcon} alt="Logo da Google" />
                        Crie sua sala com Google
                    </button>

                    <div className="separator">Ou entre em uma sala</div>

                    <form action="">
                        <input type="text" placeholder="Digite o código da sala"/>

                        <button type="submit">Entra na sala</button>
                    </form>
                </div>
            </main>
        </div>
    );
}