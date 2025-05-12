document.addEventListener('DOMContentLoaded', () => {
  const modalEl    = document.getElementById('addToCartModal');
  const modalTitle = document.getElementById('modal-title');
  const modalImg = document.getElementById('modalProductImg');  
  const modalText  = modalEl.querySelector('p');
  const goBtn      = document.getElementById('goToCartBtn');

  // Запоминаем последний элемент-карточку
  let lastCardData = null;

  // При клике на любую кнопку-триггер сохраняем card-данные заранее
  document.querySelectorAll('[data-bs-toggle="modal"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.card');
      if (!card) return;
      lastCardData = {
        title:       card.querySelector('.card-title')?.innerText,
        description: card.querySelector('.card-text')?.innerText,
        img: card.querySelector('img')?.getAttribute('src'),        
        price:       parseInt(card.querySelector('.fw-semibold')?.innerText.replace(/[^\d]/g, '')) || 0
      };
    });
  });

  // Когда модалка открывается
  modalEl.addEventListener('show.bs.modal', (event) => {
    // Сначала попробуем получить через relatedTarget
    console.log('relatedTarget is', event.relatedTarget);
    let data = null;
    if (event.relatedTarget) {
      const card = event.relatedTarget.closest('.card');
      if (card) {
        data = {
          title:       card.querySelector('.card-title')?.innerText,
          description: card.querySelector('.card-text')?.innerText,
          img: card.querySelector('img')?.getAttribute('src'),
          price:       parseInt(card.querySelector('.fw-semibold')?.innerText.replace(/[^\d]/g, '')) || 0
        };
      }
    }
    // Если relatedTarget не дал данных — используем lastCardData
    if (!data) data = lastCardData;
    if (!data) return; // всё-таки нет данных

    modalTitle.textContent   = data.title;
    modalText.textContent    = data.description;
    modalImg.src             = data.img;
    goBtn.dataset.product    = JSON.stringify(data);
  });

  // При клике "Перейти в корзину"
  goBtn.addEventListener('click', () => {
    const product = JSON.parse(goBtn.dataset.product || '{}');
    if (!product.title) return;

    // Размер
    const size = modalEl.querySelector('input[name="size"]:checked')?.value || 'S';
    product.size     = size;
    product.quantity = 1;

    // Запись в localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Переход
    window.location.href = 'cart.html';
  });
});