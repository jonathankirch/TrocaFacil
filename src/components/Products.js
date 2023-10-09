import styles from './Products.module.css'

function Products(props) {
	return (
		<div className={styles.container}>
			<div className={styles.containerIMG}>
				<img src={props.imgProduct} alt="Imagem do Produto" />
			</div>
			<div className={styles.informacoes}>
				<p>{props.nameProduct}</p>
				<a href="https://api.whatsapp.com/send?phone=5551996449577&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20troca%20com%20voc%C3%AA%21">
					Whatsapp
				</a>
			</div>
		</div>
	)
}

export default Products
