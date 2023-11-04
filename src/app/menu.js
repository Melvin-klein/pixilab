import {
    TrophyIcon,
    WrenchScrewdriverIcon,
    HomeModernIcon
} from "@heroicons/react/24/outline";
import {PhoneIcon, PlayCircleIcon} from "@heroicons/react/20/solid";

export const navigation = [
    { name: 'Accueil', href: '/', id: 'home' },
    //{ name: 'Étapes de création', href: '/etapes-de-creation', id: 'steps' },
    //{ name: 'Catalogue', href: '/catalogue', id: 'catalogue' },
]

export const solutions = [
    { name: 'Artisan', description: 'Proposez vos services grâce à votre site.', href: 'https://artisan.demo.pixilab.fr', icon: WrenchScrewdriverIcon },
    //{ name: 'Hotellerie / Restauration', description: 'Faîtes rêver votre clientèle', href: '#', icon: HomeModernIcon },
    //{ name: 'Sport', description: 'Fédérez les athlètes à votre projet', href: '#', icon: TrophyIcon },
]