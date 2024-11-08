const pobles = [
  { nom: 'Amposta', descripcio: 'Capital del Montsià, coneguda per la seva agricultura i el riu Ebre.' },
  { nom: 'Ràpita', descripcio: 'Port pesquer amb platges precioses.' },
  { nom: 'Alcanar', descripcio: 'Poble històric amb castells i oliveres mil·lenàries.' },
  { nom: 'Freginals', descripcio: 'Conegut per la seva fira de l’oli.' },
  { nom: 'La Galera', descripcio: 'Petit poble envoltat de natura.' },
  { nom: 'Godall', descripcio: 'Capital del Montsià, coneguda per la seva agricultura i el riu Ebre.' },
  { nom: 'Mas de Barberans', descripcio: 'Port pesquer amb platges precioses.' },
  { nom: 'Masdenverge', descripcio: 'Poble històric amb castells i oliveres mil·lenàries.' },
  { nom: 'Santa Bàrbara', descripcio: 'Conegut per la seva fira de l’oli.' },
  { nom: 'Masdenverge', descripcio: 'Petit poble envoltat de natura.' },
  { nom: 'Sant Jaume', descripcio: 'Petit poble envoltat de natura.' },


    // Afegeix més pobles segons calgui
  ];
  
  function searchPobles() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';
  
    const resultats = pobles.filter(poble => 
      poble.nom.toLowerCase().includes(input)
    );
  
    if (resultats.length > 0) {
      resultats.forEach(poble => {
        const div = document.createElement('div');
        div.classList.add('poble');
        div.innerHTML = `<h3>${poble.nom}</h3><p>${poble.descripcio}</p>`;
        resultContainer.appendChild(div);
      });
    } else {
      resultContainer.innerHTML = '<p>No s\'ha trobat cap resultat.</p>';
    }
  }
  