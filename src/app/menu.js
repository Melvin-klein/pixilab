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
    { name: 'Artisan', description: 'Faites connaître vos services', href: '#', icon: WrenchScrewdriverIcon },
    { name: 'Hotellerie / Restauration', description: 'Faîtes rêver votre clientèle', href: '#', icon: HomeModernIcon },
    { name: 'Sport', description: 'Fédérez les athlètes à votre projet', href: '#', icon: TrophyIcon },
]