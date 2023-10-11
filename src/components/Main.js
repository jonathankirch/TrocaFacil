import boneLacoste from '../img/produtos-img/IMG-20231009-WA0012.jpg'
import colar from '../img/produtos-img/IMG-20231009-WA0013.jpg'
import foneSemFio from '../img/produtos-img/IMG-20231009-WA0014.jpg'
import tenisNike from '../img/produtos-img/IMG-20231009-WA0015.jpg'
import luvaFutebol from '../img/produtos-img/IMG-20231009-WA0016.jpg'
import tapeteAntigo from '../img/produtos-img/IMG-20231009-WA0017.jpg'
import foneDeOuvido from '../img/produtos-img/IMG-20231009-WA0018.jpg'
import canecaMickey from '../img/produtos-img/IMG-20231009-WA0019.jpg'
import Quadro from '../img/produtos-img/IMG-20231009-WA0020.jpg'
import MouseHP from '../img/produtos-img/IMG-20231009-WA0021.jpg'
import relogioAnalogico from '../img/produtos-img/IMG-20231009-WA0022.jpg'
import camisetaNaruto from '../img/produtos-img/IMG-20231009-WA0023.jpg'

import Products from './Products'

function Main() {
	return (
		<main>
			<Products
				nameProduct="Boné Lacoste"
				imgProduct={boneLacoste}
				produtoNameURL="Boné Lacoste"
			/>
			<Products
				nameProduct="Colar"
				imgProduct={colar}
				produtoNameURL="Colar"
			/>
			<Products
				nameProduct="Fone sem fio"
				imgProduct={foneSemFio}
				produtoNameURL="Fone sem fio"
			/>
			<Products
				nameProduct="Tênis Nike"
				imgProduct={tenisNike}
				produtoNameURL="Tênis Nike"
			/>
			<Products
				nameProduct="Luva de Goleiro"
				imgProduct={luvaFutebol}
				produtoNameURL="Luva de Goleiro"
			/>
			<Products
				nameProduct="Tapete Antigo"
				imgProduct={tapeteAntigo}
				produtoNameURL="Tapete Antigo"
			/>
			<Products
				nameProduct="Fone de Ouvido"
				imgProduct={foneDeOuvido}
				produtoNameURL="Fone de Ouvido"
			/>
			<Products
				nameProduct="Caneca Mickey"
				imgProduct={canecaMickey}
				produtoNameURL="Caneca Mickey"
			/>
			<Products
				nameProduct="Quadro"
				imgProduct={Quadro}
				produtoNameURL="Quadro"
			/>
			<Products
				nameProduct="Mouse HP"
				imgProduct={MouseHP}
				produtoNameURL="Mouse HP"
			/>
			<Products
				nameProduct="Relógio Analógico"
				imgProduct={relogioAnalogico}
				produtoNameURL="Relógio Analógico"
			/>
			<Products
				nameProduct="Camiseta Naruto"
				imgProduct={camisetaNaruto}
				produtoNameURL="Camiseta Naruto"
			/>
		</main>
	)
}

export default Main
