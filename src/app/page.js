"use client";

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  GlobeAltIcon,
  ArrowPathRoundedSquareIcon,
  CheckIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  BuildingStorefrontIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { navigation, solutions } from  '@/app/menu'
import Footer from '@/components/Footer'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]

const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

const features1 = [
  {
    name: 'Élargissez votre clientèle',
    description:
        'Votre site facilite le bouche à oreille en permettant à tous vos client de le partager facilement via les SMS ou les réseaux sociaux.',
    icon: UsersIcon,
  },
  {
    name: 'Parlez de votre activité',
    description:
        'Cest le lieu idéal pour parler de vous et informer, sans aucune limite, vos clients de l\'ensemble de vos prestations.',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Facilitez la prise de contact',
    description:
        'Les sites vitrines que je vous propose peuvent être équipés de formulaires qui facilitent la prise de contact par le client.',
    icon: ChatBubbleLeftRightIcon,
  },
]

const features = [
  {
    name: 'Nom de domaine en .fr offert',
    description:
        'Le nom de domaine est l\'adresse de votre site web. C\'est ce que vos client taperont dans la barre de recherche.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Format adaptatif',
    description:
        'Tous mes sites web s\'adaptent aux écrans de téléphone, de tablette ou d\'ordinateur. Essayez avec celui-ci par exemple.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Protégé par HTTPS',
    description:
        'Tous mes sites web utilisent le protocole HTTPS. Ainsi votre site aura le petit cadenas affiché dans le navigateur.',
    icon: LockClosedIcon,
  },
  {
    name: 'Evolutif',
    description:
        'À tout moment, vous avez la possibilité de me contacter pour modifier des textes ou des images ou bien ajouter de nouvelles pages.',
    icon: ArrowPathRoundedSquareIcon,
  },
]

const tiers = [
  {
    name: 'Conception',
    id: 'tier-conception',
    href: '#',
    priceMonthly: '380,00 €',
    description: "Tarif pour la conception de votre site vitrine incluant une page.",
    features: [
      'Une page web',
      '1 rendez-vous de conception',
      '1 rendez-vous de validation',
      'Nom de domaine .fr offert',
      'Accès à tout le catalogue de blocs',
      'Blocs illimités par pages',
      'Disponibilité téléphonique',
    ],
    featured: true,
  },
  {
    name: 'Maintenance',
    id: 'tier-maintenance',
    href: '#',
    priceMonthly: '16,00 €',
    description: 'Abonnement pour assurer la mise en ligne et la maintenance de votre site.',
    features: [
      'Hébergement et maintenance de votre site web',
      'Renouvellement de votre nom de domaine',
      'Protégé par HTTPS',
      '1 modification par semaine des textes, images et couleurs gratuite',
      'Disponibilité téléphonique',
    ],
    featured: false,
  },
]

const faqs = [
  {
    question: "Combien de pages sont incluses dans le tarif de base ?",
    answer:
        "Le tarif de base à 380,00€ comprend une unique page avec un nombre illimité de blocs. Si vous souhaitez ajouter d'autres pages, cela est possible en ajoutant 140,00€ par page.",
  },
  {
    question: "Est-il possible de personnaliser le site web ?",
    answer:
        "Il est possible de personnaliser à votre guise les textes, les images et les couleurs de votre site web. Il est également possible de mixer les éléments présents dans les différents blocs pour en faire de nouveaux. Cependant, je ne réalise pas de développement sur-mesure.",
  },
  {
    question: "Est-il possible de ne pas souscrire à l'abonnement ?",
    answer:
        "Vous n'êtes pas obligé de souscrire à l'abonnement que je vous propose. Néanmoins, cela implique que je vous fournirai le code de votre site web et je ne pourrais donc m'occuper de la mise en ligne et de la maintenance de votre site.",
  },
  {
    question: "À qui appartient le code du site web ?",
    answer:
        "Le code du site web vous appartient. Il vous suffira de me demander le code pour que je vous l'envoie.",
  },
  {
    question: "Est-il possible de travailler avec un autre développeur une fois le site fini ?",
    answer:
        "Bien sûr, le code du site web vous appartient, vous êtes libre de travailler avec un autre développeur que moi.",
  },
  {
    question: "Comment récupérer la gestion de mon nom de domaine ?",
    answer:
        "Il vous suffira de me le demander et je vous le transfererai.",
  },
  {
    question: "Comment arrêter l'abonnement ?",
    answer:
        "Il vous suffit de me le signaler en m'envoyant un message ou en m'appelant, je ferai les changements dans les plus brefs délais.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                      <PhoneIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Contactez-moi 😀
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          N'hésitez pas à m'envoyer un mail ou à m'appeler directement pour que je puisse répondre à vos questions. Me contacter ne vous engage dans aucun processus.
                        </p>
                        <p className="mt-5 text-sm text-gray-500">
                          melvine.nargeot@pixilab.fr
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                          06 13 72 89 62
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpen(false)}
                    >
                      Fermer
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="bg-gray-900">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="flex items-center -m-1.5 p-1.5">
                <span className="sr-only">Pixilab</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <span className="ml-3 text-lg font-bold">Pixilab</span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                  <a key={item.name} href={item.href} className={`py-2 text-sm font-semibold leading-6 text-white${item.id === 'home' ? ' border-b border-indigo-500' : ''}`}>
                    {item.name}
                  </a>
              ))}
              <Popover className="relative">
                <Popover.Button className="inline-flex items-center gap-x-1 py-2 text-sm font-semibold leading-6 text-white">
                  <span>Exemples</span>
                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                </Popover.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {solutions.map((item) => (
                            <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                              </div>
                              <div>
                                <a href={item.href} className="font-semibold text-gray-900">
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">{item.description}</p>
                              </div>
                            </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button type="button" className="flex items-center text-sm font-semibold leading-6 text-white" onClick={() => setOpen(true)}>
                Écrivez-moi <ChatBubbleLeftRightIcon className="h-4 w-4 ml-2 text-white" aria-hidden="true" />
              </button>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt=""
                  />
                </a>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                        >
                          {item.name}
                        </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <button type="button" onClick={() => setOpen(true)}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      Écrivez-moi
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative isolate overflow-hidden">
          <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
          >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>
          <div className="flex flex-col justify-center mx-auto max-w-2xl min-h-screen py-32">
            {/*<div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                De nouveaux blocs sont disponibles.{' '}
                <a href="#" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Voir le catalogue <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>*/}
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Créons votre site vitrine <span className="text-indigo-500">ensemble</span>.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Je créé des sites vitrines pour les entreprises, associations et particuliers en proposant une procédure simple et rapide, avec un service
                humain et une qualité professionnelle.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button type="button" onClick={() => setOpen(true)}
                    className="flex items-center rounded-md bg-indigo-500 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Écrivez-moi <ChatBubbleLeftRightIcon className="h-4 w-4 ml-2 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
          >
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Votre présence sur internet</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Donnez-vous de la visibilité sur Google.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Les sites vitrines sont votre carte de visite sur le web.
              Ils présentent votre activité à vos futurs clients et vous aident à gagner en visibilité.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features1.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                      <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Ma prestation</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choisissez la simplicité.</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Vous n'avez besoin d'aucune compétence technique. De la conception à l'hébergement, en passant par la gestion de votre nom de domaine,
                  je m'en occupe pour vous. Nous n'aurons qu'à définir ensemble la structure de votre site web
                  en choisissant les blocs qui le composent et leurs couleurs pour que je puisse le concevoir.
                  De même, lorsque votre site est en ligne, j'effectue sa surveillance et sa maintenance sans que vous ayez à vous en préoccuper.
                </p>
              </div>
            </div>
            <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2672&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
            />
          </div>
        </div>
      </div>
      <div className="bg-white pb-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Votre temps est précieux.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Le processus de création ne comprend que 3 étapes.
                </p>
              </div>
              <img
                  src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product screenshot"
                  className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                  width={2432}
                  height={1442}
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  <div className="relative">
                    <dt className="ml-9 inline-block font-semibold text-white">
                      <UsersIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                      Rendez-vous de conception :
                    </dt>{' '}
                    <dd className="inline">Nous définissons ensemble la structure de votre site web en choisissant dans mon catalogue les blocs prédéfinis et les couleurs à utiliser.</dd>
                  </div>
                  <div className="relative">
                    <dt className="ml-9 inline-block font-semibold text-white">
                      <PencilSquareIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                      Rédaction du contenu :
                    </dt>{' '}
                    <dd className="inline">Pendant que je réalise votre site, vous me fournissez les textes et les images qui prendront place dans les blocs.</dd>
                  </div>
                  <div className="relative">
                    <dt className="ml-9 inline-block font-semibold text-white">
                      <UsersIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                      Rendez-vous de validation :
                    </dt>{' '}
                    <dd className="inline">Je vous présente le résultat et nous effectuons les dernières corrections avant la mise en ligne.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div
                className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
                aria-hidden="true"
            >
              <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
                  style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-900">
        <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
              alt=""
          />
          <svg
              viewBox="0 0 926 676"
              aria-hidden="true"
              className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
                fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
                fillOpacity=".4"
                d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            />
            <defs>
              <linearGradient
                  id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                  x1="926.392"
                  x2="-109.635"
                  y1=".176"
                  y2="321.024"
                  gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Mon accompagnement</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">L'humain avant tout</p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              L'humain est au cœur de mon processus de conception et de maintenance.
              C'est à dire que quelque soit l'étape de vie de votre site,
              vous pouvez me contacter par téléphone ou par mail. C'est avec plaisir que je réponds à vos questions
              ou que j'apporte des modifications à votre site.
              Ainsi, quoi qu'il se passe, vous êtes toujours accompagné(e) d'un développeur (moi 👨‍💻).
            </p>
            <div className="mt-8">
              <button type="button" onClick={() => setOpen(true)}
                  className="flex items-center rounded-md bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ecrivez-moi <ChatBubbleLeftRightIcon className="h-4 w-4 ml-2 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Vos avantages</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pourquoi choisir Pixilab ?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En plus de l'aspect humain et de la simplicité qui sont l'essence de Pixilab, je vous propose d'autres avantages.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pensé pour être accessible.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Je mets un point d'honneur à respecter les bonnes pratiques en matière d'accessibilité, d'expérience utilisateur et d'optimisation du code pour les moteurs de recherche.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button type="button" onClick={() => setOpen(true)}
                  className="flex items-center rounded-md bg-white px-10 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Écrivez-moi <ChatBubbleLeftRightIcon className="h-4 w-4 ml-2 text-gray-900" aria-hidden="true" />
              </button>
            </div>
            <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="relative isolate bg-white px-6 py-24 lg:px-8">
        <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
          <div
              className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Tarifs</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Une tarification simple et unique.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Ma prestation comprend un paiement pour la conception ainsi qu'un abonnement pour la mise en ligne et la maintenance de votre site.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
              <div
                  key={tier.id}
                  className={classNames(
                      tier.featured ? 'relative bg-white shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                      tier.featured
                          ? ''
                          : tierIdx === 0
                              ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                              : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                      'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
                  )}
              >
                <h3 id={tier.id} className="text-base font-semibold leading-7 text-indigo-600">
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                  {tier.id !== 'tier-conception' && (<span className="text-base text-gray-500">/mois</span>)}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
                  {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                        {feature}
                      </li>
                  ))}
                </ul>
              </div>
          ))}
          <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 mt-20 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
            <div className="lg:min-w-0 lg:flex-1">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Ajouter d'autres pages</h3>
              <p className="mt-1 text-base leading-7 text-gray-600">
                Que ce soit pour la première commande ou à n'importe quel autre moment de la vie de votre site web, vous avez la possibilité d'ajouter de nouvelles pages à votre site web.
              </p>
            </div>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-3xl font-bold tracking-tight text-gray-900">+ 140,00 €</span>
              <span className="text-base text-gray-500">/pages</span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 mt-10 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
            <div className="lg:min-w-0 lg:flex-1">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Ajouter des blocs aux pages déjà existantes</h3>
              <p className="mt-1 text-base leading-7 text-gray-600">
                À n'importe quel moment de la vie de votre site web, vous avez la possibilité de modifier vos pages.
              </p>
            </div>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-3xl font-bold tracking-tight text-gray-900">+ 20,00 €</span>
              <span className="text-base text-gray-500">/blocs</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl divide-y divide-white/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Questions fréquement posées</h2>
            <dl className="mt-10 space-y-6 divide-y divide-white/10">
              {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                        <>
                          <dt>
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                              <span className="text-base font-semibold leading-7">{faq.question}</span>
                              <span className="ml-6 flex h-7 items-center">
                          {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                          </Disclosure.Panel>
                        </>
                    )}
                  </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/*<div className="relative isolate bg-white px-6 pb-12 pt-24 sm:pt-32 lg:px-8">
        <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
        >
          <defs>
            <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                x="50%"
                y={-64}
                patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
            <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Vous avez des questions ou souhaitez démarrer votre projet ? Contactez-moi 😀</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Me contacter ne vous engage dans aucun processus. N'hésitez pas à m'envoyer un message via ce formulaire ou appelez-moi directement pour que je puisse répondre à toutes vos questions.
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form action="#" method="POST" className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Prénom
                  </label>
                  <div className="mt-2.5">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Nom
                  </label>
                  <div className="mt-2.5">
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                        id="budget"
                        name="budget"
                        type="text"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-semibold leading-6 text-gray-900">
                    Téléphone
                  </label>
                  <div className="mt-2.5">
                    <input
                        type="url"
                        name="website"
                        id="website"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Posez-moi vos question ou décrivez votre projet
                  </label>
                  <div className="mt-2.5">
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                  />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Parlons ensemble
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-500">
                Votre adresse mail et/ou numéro de téléphone ne seront <span className="text-indigo-500 font-bold">jamais</span> divulgués, revendus ou utilisés pour du démarchage commercial.
              </p>
            </form>
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Pixilab</h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>melvine.nargeot@test.fr</p>
                  <p>06 00 00 00 00</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
      <Footer />
    </>
  )
}
