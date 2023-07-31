window.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  searchInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      const searchTerm = searchInput.value.toLowerCase();

      searchResults.innerHTML = '';

      const produtos = document.getElementsByClassName('produto-item');

      for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        const titulo = produto.querySelector('#produto-titulo').textContent.toLowerCase();

        if (titulo.includes(searchTerm)) {
 
          const imagemSrc = produto.querySelector('#produto-img img').src;

          const resultado = document.createElement('div');
          resultado.classList.add('search-result-item');
          const imagem = document.createElement('img');
          imagem.src = imagemSrc;
          const tituloResultado = document.createElement('p');
          tituloResultado.textContent = titulo;

          resultado.appendChild(imagem);
          resultado.appendChild(tituloResultado);

          searchResults.appendChild(resultado);

          resultado.addEventListener('click', function() {
            sessionStorage.setItem('titulo', titulo);
            sessionStorage.setItem('imagem', imagemSrc);

            window.location.href = 'produtos.html';
          });
        }
      }
    }
  });
});

window.addEventListener('DOMContentLoaded', function() {

  const titulo = sessionStorage.getItem('titulo');
  const imagem = sessionStorage.getItem('imagem');
  const preco = sessionStorage.getItem('preco');

  document.getElementById('produto-imagem').src = imagem;
  document.getElementById('produto-titulo').innerText = titulo;
  document.getElementById('produto-preco').innerText = preco;
});

window.addEventListener('DOMContentLoaded', function() {

  const produtos = document.getElementsByClassName('produto-item');

  for (let i = 0; i < produtos.length; i++) {
    produtos[i].addEventListener('click', function() {
      const titulo = this.querySelector('#produto-titulo').innerText;
      const imagem = this.querySelector('#produto-img img').src;
      const preco = this.querySelector('#preco').innerText;

      sessionStorage.setItem('titulo', titulo);
      sessionStorage.setItem('imagem', imagem);
      sessionStorage.setItem('preco', preco);

      window.location.href = 'produtos.html';
    });
  }
});

function back() { 
  window.location = 'home.html'
}

