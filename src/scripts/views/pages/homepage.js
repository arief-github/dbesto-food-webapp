import { createRestoItemTemplate } from '../template/template-creator';
import DataSource from '../../data/restaurant-data';

const Home = {
	async render() {
		return ` 
			<section class="hero">
		      	<picture>
                  <source media="(min-width:900px)" srcset="./images/heros/hero-image_2-large.jpg">
                  <source media="(max-width:899px)" srcset="./images/heros/hero-image_2-small.jpg">
                  <img class="lazyload" src="./images/heros/hero-image_2-large.jpg" alt="Heroes Image">
                </picture>
		        <!--   <div class="headline">
		            <div class="container">
		                <h2>Food has a great taste</h2>
		                <p>Support Cafe Layout</p>
		            </div>
		        </div> -->
		    </section>
		    <!-- item -->
		    <section class="resto" id="main-content" tabindex="0">
		        <h2>Resto</h2>
		        <p>Our Lists Resto</p>
		        <div id="container">
		        </div>
		    </section>`;
	},
	async afterRender() {
		const resto = await DataSource.List();
		const restoContainer = document.getElementById('container');
		if (resto && resto.length > 0) {
			resto.forEach((item) => {
				restoContainer.innerHTML += createRestoItemTemplate(item);
			});
		}
	}
};

export default Home;