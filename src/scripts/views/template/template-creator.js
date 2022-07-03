import ENDPOINT from '../../globals/api-endpoint';
import CONFIG from '../../globals/config';

const createRestoItemTemplate = (data) => ` 
       <div id=${data.id} class="card" tabindex="0" alt=" ${data.city} ${data.rating}">
               <div class="card-header">
                    <picture>
                      <source data-srcset="${CONFIG.BASE_IMAGE_URL}${data.pictureId}" type="image/webp" media="all and (max-width: 600px)" />        
                      <source data-srcset="${CONFIG.BASE_IMAGE_URL}${data.pictureId}" type="image/jpeg" media="all and (max-width: 600px)" />
                      <source data-srcset="${CONFIG.BASE_IMAGE_URL_MD}${data.pictureId}" type="image/webp" media="all and (min-width: 601px) and (max-width: 960px)" />    
                      <source data-srcset="${CONFIG.BASE_IMAGE_URL_MD}${data.pictureId}" type="image/jpeg" media="all and (min-width: 601px) and (max-width: 960px)" />
                      <source data-srcset="${CONFIG.BASE_IMAGE_URL_LG}${data.pictureId}" type="image/webp" media="all and (min-width: 961px)" />        
                      <source data-srcset="${CONFIG.BASE_IMAGE_URL_LG}${data.pictureId}" type="image/jpeg" media="all and (min-width: 961px)" />
                      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${data.pictureId}" alt="${data.name.replace(/\s+/g, '-').toLowerCase()}-big-img-header"/>
                    </picture>
               </div>
        <div class="card-body">
          <span class="tag tag-red">${data.city}</span>
          <h3><a href="${`/#/detail/${data.id}`}">${data.name}</a></h3>
        </div>
        <div class="card-footer">
           <div class="user__info">
              <h5>Rating : </h5>
              <small>⭐${data.rating}</small>
            </div>
        </div>
    </div>
 `;

const createRestoDetailTemplate = (data) => `
    <div class="resto-detail" tabindex="0" id="resto-detail">
      <h2>${data.name}</h2>
                 <picture>
                      <source data-srcset="${CONFIG.BASE_IMAGE_URL}${data.pictureId}" type="image/webp" media="all and (max-width: 600px)" />        
                      <source data-srcset="${CONFIG.BASE_IMAGE_URL}${data.pictureId}" type="image/jpeg" media="all and (max-width: 600px)" />
                      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${data.pictureId}" alt="${data.name.replace(/\s+/g, '-').toLowerCase()}-big-img-header"/>
                </picture>
    <div class="resto-info">
      <h3>Information</h3>
      <h4>City</h4> :  <p>${data.city}</p>
      <h4>Address</h4> : <p>${data.address}</p>
      <h4>Rating</h4> : <p>${data.rating}</p>
    </div>
    <div class="resto-description">
      <h3>Description</h3>
      <p>${data.description}</p>
    </div>
    </div>
    <div class="menu">
      <h2 class="menu-group-heading">Food</h2>
      <div class="menu-group"> 
             ${data.menus.foods
           .map(
                 (food, i) => `
                 <div class="menu-item">
                   <img class="menu-item-image" src="https://source.unsplash.com/600x400/?food" alt="Bruschetta">
                   <div class="menu-item-text">
                     <h3 class="menu-item-heading">
                     <span class="menu-item-name">${food.name}</span>
                      </h3>
                      </div>
                  </div>     
                        `,
                 )
      .join('')
      }  
      </div>
      <h2 class="menu-group-heading">Drink</h2>
      <div class="menu-group"> 
             ${data.menus.drinks
           .map(
                 (drink, i) => `
                 <div class="menu-item">
                   <img class="menu-item-image" src="https://source.unsplash.com/600x400/?drink" alt="Bruschetta">
                   <div class="menu-item-text">
                     <h3 class="menu-item-heading">
                     <span class="menu-item-name">${drink.name}</span>
                      </h3>
                      </div> 
                  </div>    
                        `,
                        )
           .join('')
         }
      </div>
      <h2 class="menu-group-heading">Review</h2>
      <div class="menu-group">
        <p>Oleh ${data.customerReviews[0].name} : </p>
        <p>${data.customerReviews[0].review}</p>
        <p>Pada ${data.customerReviews[0].date}</p>
      </div>
    </div>`;

const createLikeButtonTemplate = () => ` 
      <button aria-label="like this restaurant" id="likeButton" class="like">
         <i class="fa fa-heart-o" aria-hidden="true"></i>
      </button>
 `;

const createLikedButtonTemplate = () => ` 
      <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
`;
  
export {
 createRestoItemTemplate, createRestoDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate 
};