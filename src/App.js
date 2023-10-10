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
				<div className={styles.divSection}>
					<h2>Sobre nossa empresa:</h2>
					<p>
						O Troca Fácil foi fundado em 2023 com a missão de tornar
						a troca de produtos mais acessível e sustentável.
						Estamos comprometidos em criar uma comunidade de troca
						confiável e eficiente.
					</p>

					<h3>Onde você pode nos encontrar?</h3>
					<p>
						Estamos localizados na &#8658;
						<a
							href="https://maps.app.goo.gl/ottF5F1RnD26o68z5"
							target="_blank"
							rel="noopener noreferrer"
						>
							Rodovia RS 453, Nr 15276, Teutônia - RS, 95890-000
						</a>
					</p>
				</div>
			</section>

			<footer className={styles.rodape}>
				<h3>Entre em Contato</h3>
				<p>
					Entre em contato pelo nosso{' '}
					<a href="mailto:jonathankirch101@gmail.com?subject=Olá, gostaria de entrar em contato para falar sobre a empresa Troca Fácil!">
						E-mail
					</a>
					, ou por nossas redes socias:
				</p>
				<div className={styles.icons}>
					<ul>
						<li>
							<a href="/">
								<FaFacebook size={30} color="#fb3640" />
							</a>
						</li>
						<li>
							<a
								href="https://instagram.com/alan_caye?igshid=MWZjMTM2ODFkZg=="
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaInstagram size={30} color="#fb3640" />
							</a>
						</li>
						<li>
							<a href="https://api.whatsapp.com/send?phone=5551996449577&text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20para%20falar%20sobre%20sua%20empresa%20Troca%20F%C3%A1cil%21%0A%0AAssunto%3A%0A">
								<FaWhatsapp size={30} color="#fb3640" />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	)
}

export default App
