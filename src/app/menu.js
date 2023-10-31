import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon
} from "@heroicons/react/24/outline";
import {PhoneIcon, PlayCircleIcon} from "@heroicons/react/20/solid";

export const navigation = [
    { name: 'Accueil', href: '/', id: 'home' },
    { name: 'Étapes de création', href: '/etapes-de-creation', id: 'steps' },
    { name: 'Catalogue', href: '/catalogue', id: 'catalogue' },
]

export const solutions = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
]

export const callsToAction = [
    { name: 'Appelez-moi', href: '#', icon: PlayCircleIcon },
    { name: 'Écrivez-moi', href: '#', icon: PhoneIcon },
]