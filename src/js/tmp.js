export const getGalleryItemMarkup = ({
    tags,
    webformatURL,
    largeImageURL,
    id,
    views,
    comments,
    likes,
    downloads,
}) => `
  <li class="gallery-item" id="${id}">
    <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
    <div class="info">
      <p class="info-item">
        <span>Views</span>
        <span>${views}</span>
      </p>
      <p class="info-item">
        <span>Comments</span>
        <span>${comments}</span>
      </p>
      <p class="info-item">
        <span>Likes</span>
        <span>${likes}</span>
      </p>
      <p class="info-item">
        <span>Downloads</span>
        <span>${downloads}</span>
      </p>
    </div>
  </li>
  `;
