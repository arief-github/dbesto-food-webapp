import Home from '../views/pages/homepage';
import Detail from '../views/pages/detailpage';
import Favorite from '../views/pages/favoritepage';

const routes = {
	"/": Home,
	"/favorite": Favorite,
	"/detail/:id": Detail,
};

export default routes;