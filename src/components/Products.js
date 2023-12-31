import styles from './Products.module.css'

import iconWhats from '../img/icon/whatsapp.png'

function Products(props) {
	const mensagem = `Olá, gostaria de fazer uma troca com você!\n\nEstou interessado no(a) *${props.produtoNameURL}*.\n\nPodemos negociar?`
	const link = `https://api.whatsapp.com/send?phone=5551996449577&text=${encodeURIComponent(
		mensagem
	)}`

	return (
		<div className={styles.container}>
			<div className={styles.containerIMG}>
				<img src={props.imgProduct} alt="Imagem do Produto" />
			</div>
			<div className={styles.informacoes}>
				<p>{props.nameProduct}</p>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<p className={styles.trocaBTN}>
						Trocar
						<img
							className={styles.iconWhats}
							src={iconWhats}
							alt="Whatsapp Icon"
							title="Entrar em contato"
						/>
					</p>
				</a>
			</div>
		</div>
	)
}

export default Products
