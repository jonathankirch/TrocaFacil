import styles from './App.module.css'

import Products from './components/Products'

function App() {
	return (
		<div>
			<header className={styles.header}>
				<h1>Troca Fácil</h1>
			</header>

			<main>
				<Products nameProduct="Teste 1" imgProduct="https://via.placeholder.com/100&text=Sem imagem"/>
				<Products nameProduct="Teste 2" imgProduct="https://via.placeholder.com/100&text=Sem imagem" />
				<Products nameProduct="Teste 3" imgProduct="https://via.placeholder.com/100&text=Sem imagem" />
				<Products nameProduct="Teste 4" imgProduct="https://via.placeholder.com/100&text=Sem imagem" />
			</main>

			<section>Informações da Empresa</section>

			<footer>
				<p>Contatos e Redes sociais</p>
			</footer>
		</div>
	)
}

export default App
