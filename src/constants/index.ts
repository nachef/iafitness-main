import { t } from 'i18next'

import Icons from '../components/global/icons'

export const BASE_URL = 'https://intelligencefit.com/api'

export const perks = [
  {
    icon: Icons.auth,
    title: `${t('main.how-works-section.card1title')}`,
    info: `${t('main.how-works-section.card1')}`,
  },
  {
    icon: Icons.customize,
    title: `${t('main.how-works-section.card2title')}`,
    info: `${t('main.how-works-section.card2')}`,
  },
  {
    icon: Icons.launch,
    title: `${t('main.how-works-section.card3title')}`,
    info: `${t('main.how-works-section.card3')}`,
  },
]

export const features = [
  {
    icon: Icons.bolt,
    title: t('main.features-section.cards.0.title'),
    info: t('main.features-section.cards.0.description'),
  },
  {
    icon: Icons.palette,
    title: t('main.features-section.cards.1.title'),
    info: t('main.features-section.cards.1.description'),
  },
  {
    icon: Icons.seo,
    title: t('main.features-section.cards.2.title'),
    info: t('main.features-section.cards.2.description'),
  },
  {
    icon: Icons.monitor,
    title: t('main.features-section.cards.3.title'),
    info: t('main.features-section.cards.3.description'),
  },
  {
    icon: Icons.shop,
    title: t('main.features-section.cards.4.title'),
    info: t('main.features-section.cards.4.description'),
  },
  {
    icon: Icons.server,
    title: t('main.features-section.cards.5.title'),
    info: t('main.features-section.cards.5.description'),
  },
]

export const pricingCards = [
  {
    title: 'Starter',
    description: 'Perfect for trying out plura',
    price: 'Free',
    duration: '',
    highlight: 'Key features',
    buttonText: 'Start for free',
    features: ['Limited projects', '1 Team member', 'Basic features'],
    priceId: '',
  },
  {
    title: 'Unlimited Saas',
    description: 'The ultimate agency kit',
    price: '$199',
    duration: 'month',
    highlight: 'Key features',
    buttonText: 'Upgrade to Pro',
    features: ['Unlimited projects', '5 Team members', 'Advanced design tools', 'Customizable domain'],
    priceId: 'price_1OYxkqFj9oKEERu1KfJGWxgN',
  },
  {
    title: 'Enterprise',
    description: 'For serious agency owners',
    price: '$399',
    duration: 'month',
    highlight: 'Everything in Starter, plus',
    buttonText: 'Upgrade to Enterprise',
    features: ['Unlimited projects', 'Unlimited Team members', 'Custom branding', 'Priority support (24/7)'],
    priceId: 'price_1OYxkqFj9oKEERu1NbKUxXxN',
  },
]

export const bentoCards = [
  {
    title: 'Start with Inspiration',
    info: 'Browse our vast library of pre-designed templates or upload your own images.',
    imgSrc: '/assets/bento-1.svg', // Lightbulb or Inspiration icon
    alt: 'Inspiration for website creation',
  },
  {
    title: 'AI Assists Your Vision',
    info: 'Our intelligent AI tailors suggestions and functionalities based on your goals.',
    imgSrc: '/assets/bento1.svg', // AI Assistant icon
    alt: 'AI website building assistant',
  },
  {
    title: 'Drag & Drop Customization',
    info: 'Effortlessly personalize your website with our intuitive drag-and-drop editor.',
    imgSrc: '/assets/bento1.svg', // Drag and Drop icon or hand editing a website
    alt: 'Website customization with drag and drop',
  },
  {
    title: 'Launch & Shine Online',
    info: 'Publish your website with a single click and take your brand to the world.',
    imgSrc: '/assets/bento1.svg', // Rocket launching or website going live
    alt: 'Website launch and publication',
  },
]

export const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
]

export const hypertrophyExercises = [
  {
    image: '/assets/back.gif',
    title: 'Puxada alta com barra máquina',
    reps: '12',
    sets: '4',
    rest: '50 segundos',
  },
  {
    image: '/assets/biceps.gif',
    title: 'Bíceps alternado com halteres',
    reps: '12',
    sets: '4',
    rest: '40 segundos',
  },
]

export const weightLossExercises = [
  {
    image: '/assets/run.gif',
    title: 'Corrida na esteira',
    reps: '30 minutos',
    sets: '-',
    rest: '-',
  },
  {
    image: '/assets/abs.gif',
    title: 'Abdominais',
    reps: '15',
    sets: '3',
    rest: '30 segundos',
  },
]

export const sexualDysfunctionExercises = [
  {
    image: '/assets/pelvic.gif',
    title: 'Elevaçao pélvica',
    reps: '10',
    sets: '3',
    rest: '30 segundos',
  },
  {
    image: '/assets/pelvic2.gif',
    title: 'Abdominal "Crunch"',
    reps: '15',
    sets: '3',
    rest: '30 segundos',
  },
]

export const stepTitles = ['Objetivo', 'Nome e Email', 'Características', 'Dias de Treino']

export const stepDescriptions = [
  'Escolha o que você tem como foco principal em seu corpo!',
  'Calma, não precisa por seu nome real se não quiser, porém o email precisa ser válido para enviarmos seu site!',
  'Coloque suas características físicas para que possamos montar um treino personalizado para você!',
  'Precisamos saber um pouco mais sobre sua rotina de treino para montar um planejamento que se encaixe nela!',
]
