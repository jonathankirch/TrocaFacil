import Main from './components/Main'
import styles from './App.module.css'

import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

function App() {
	return (
		<div>
			<header className={styles.header}>
				<h1>Troca Fácil</h1>
			</header>

			<Main />

			<section className={styles.section}>
				<h2>Sobre nossa empresa:</h2>
				<p>
					O Troca Fácil foi fundado em 2023 com a missão de tornar a
					troca de produtos mais acessível e sustentável. Estamos
					comprometidos em criar uma comunidade de troca confiável e
					eficiente.
				</p>

				<h3>Onde você pode nos encontrar?</h3>
				<p>
					Estamos localizados na &#8658;
					<a href="https://maps.app.goo.gl/ottF5F1RnD26o68z5">
						Rodovia RS 453, Nr 15276, Teutônia - RS, 95890-000
					</a>
				</p>
			</section>

			<footer className={styles.rodape}>
				<h3>Entre em Contato</h3>
				<p>
					Entre em contato pelo nosso <a href="mailto:jonathankirch101@gmail.com?subject=Olá, gostaria de entrar em contato para falar sobre a empresa Troca Fácil!">E-mail</a>, ou por nossas redes
					socias:
				</p>
				<div className={styles.icons}>
					<ul>
						<li>
							<a href="/">
								<FaFacebook color="black" />
								@trocafacil
							</a>
						</li>
						<li>
							<a href="/">
								<FaInstagram color="black" />
								@trocafacil_oficial
							</a>
						</li>
						<li>
							<a href="/">
								<FaWhatsapp color="black" />
								Troca Fácil
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	)
}

export default App
