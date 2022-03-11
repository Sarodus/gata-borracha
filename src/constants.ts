export const CATEGORIES = [
    {
        name: 'Basicos',
        tag: 'basico',
        description: 'Vamoh de trankis',
        image: '/static/cat-logo-open.png'
    },
    {
        name: 'Picante',
        tag: 'picante',
        description: 'Sexy time',
        image: '/static/picante.png'
    },
    {
        name: 'Gamer',
        tag: 'gamer',
        description: 'its in the game',
        image: '/static/gamer.png'
    },
    {
        name: 'Gay',
        tag: 'gay',
        description: 'Proud & Drunk',
        image: '/static/gay.png'
    },
    {
        name: '2020',
        tag: '2020',
        description: '¡sobrevivimos!',
        image: '/static/2020.png'
    }
];
export const CATEGORY_TAGS = CATEGORIES.map(c => c.tag);
