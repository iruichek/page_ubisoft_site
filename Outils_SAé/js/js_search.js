const pages = [
    {
      titre: "Environnement",
      contenu: "Neutralité carbone, économie circulaire, énergie verte, gestion de l’eau, mobilité durable, emissions CO2, .",
      lien: "page_Ibtisseme.html"
    },
    {
      titre: "Social",
      contenu: "Fournisseurs, services, concurrents, impact social, accessibilité, revendeurs, visites, divertissement pour tous.",
      lien: "page_Sammy.html"
    },
    {
      titre: "Accueil",
      contenu: "carousel, image, accueil, entrée.",
      lien: "index.html"
    },
    {
      titre: "Franchises",
      contenu:"franchises, jeux, combien de jeux ubisoft, ",
      lien: "page2_Ibtisseme.html "
    }, 
    {
      titre:"Economie",
      contenu:"Economie, part, marché, part de marché, chiffre d'affaires, investissement ",
      lien:"page_Omeyya.html"
    }, 
    {
      titre:"Histoire",
      contenu:"création, internationalisation, premières sortis, date sortie, Histoire",
      lien:"page_Dylan.html"

    }
  ];

  // Configuration de Fuse.js
  const fuse = new Fuse(pages, {
    keys: ["titre", "contenu"],
    threshold: 0.6 // Plus c’est bas, plus la recherche est stricte
  });

  // Sélection des éléments du formulaire
  const input = document.querySelector('input[type="search"]');
  const form = document.querySelector('form[role="search"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const query = input.value.trim();

    if (!query) return;

    const resultats = fuse.search(query);

    if (resultats.length > 0) {
      // Redirige vers la première page correspondante
      window.location.href = resultats[0].item.lien;
    } else {
      alert("Aucun résultat trouvé 😕");
    }
  });
