import Image from "next/image";
import ItemList from "./components/ItemList";
import ShowPath from "./components/ShowPath";
export default function Home() {

  const links = [
    { href: "https://www.bleulibellule.com/", text: "Bleu Libellule" },
    { href: "https://www.manucurist.com/", text: "Manucurist" },
    { href: "https://miasecretspain.es/fr/", text: "Mia Secret Spain" },
    { href: "https://ongle24.com/", text: "Ongle 24" },
    { href: "https://pinkgellac.com/fr-fr?", text: "Pink Gellac" },
    { href: "https://www.laboutiqueducoiffeur.com/", text: "La Boutique du Coiffeur" },
    { href: "https://www.nails.fr/", text: "Nails.fr" },
    { href: "https://www.nailartboutique.fr/", text: "Nail Art Boutique" },
    { href: "https://www.beautynails.com/", text: "Beauty Nails" },
    { href: "https://www.creaongles-distribution.com/fr/", text: "Créa Ongles Distribution" },
    { href: "https://mnails.fr/", text: "M Nails" },
    { href: "https://roxynailsparis.com/", text: "Roxy Nails Paris" },
    { href: "https://www.tartofraises.fr/nail-art/", text: "Tartofraises Nail Art" },
    { href: "https://www.manucureongle.com/boutique/", text: "Manucure & Ongle" },
    { href: "https://www.onglemod.com/", text: "OngleMod" },
    { href: "https://inter-service-esthetique.fr/", text: "Inter Service Esthétique" },
  ];

  return (
    <div className="m-2">
      <div><ShowPath/></div>
      <div><ItemList/></div>
      <div className="m-4 p-4">
        <ul className="list-disc"> 
          {links.map((link, index) => (
            <li key={index} className="mb-2"> {/* Add margin between list items */}
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
/*
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/giblimdev/nextStore.git
git push -u origin main
*/