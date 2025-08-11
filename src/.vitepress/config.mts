import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default ({
  base: '/UF5_1/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  head: [
  ['link', { rel: 'icon', href: '/img/logo.png' }],
  ],
  locales: {
    root: {
      label: 'Español',
      lang: 'es-ES',
      link: '/',
      title: 'UF5.1 - Estructuras de Datos Dinámicas I',
      description: 'Unidad 5 donde se introducen las estructuras de datos dinámicas.',
      themeConfig: {
        siteTitle: 'Estructuras de Datos Dinámicas I',
        outline: { label: 'En esta página' },
          docFooter: { prev: 'Anterior', next: 'Siguiente' },
          nav: [
            { text: '🏠 Inicio', link: '/' },
            { text: '📚 Contenidos', items: [
              { text: '1. Introducción', link: '/1-introduccio' },
              { text: '2. Propiedades', link: '/2-propietats' },
              { text: '3. Vectores (arrays unidimensionales)', link: '/3-vectors' },
              { text: "4. Matrices (arrays multidimensionales)", link: '/4-matrius' },
              { text: "5. La clase Arrays", link: '/5-classe_arrays' },
              { text: '6. La clase String', link: '/6-classe_string' },
              { text: '7. Buscar con vectores', link: '/7-cercar' },
              { text: '8. Ordenación de vectores', link: '/8-ordenar' },
              { text: '💡Ejemplos', link: '/9-exemples' },
              { text: '✏️Ejercicios', link: '/10-exercicis' },
            ]}
          ]
      }
    },
    ca: {
      label: 'Valencià',
      lang: 'ca-ES',
      link: '/ca/',
      title: 'U5.1 - Estrucutures de Dades Dinàmiques I',
      description: 'Unitat 5.1 on s\'introduïxen les estructures de dades dinàmiques.',
      themeConfig: {
        siteTitle: 'Introducció a la Programació II',
        outline: { label: 'En aquesta pàgina' },
          docFooter: { prev: 'Anterior', next: 'Següent' },
          nav: [
            { text: '🏠 Inici', link: '/ca/index' },
            { text: '📚 Continguts', items: [
              { text: '1. Introducció', link: '/1-introduccio' },
              { text: '2. Propietats', link: '/2-propietats' },
              { text: '3. Vectors (arrays unidimensionals)', link: '/3-vectors' },
              { text: "4. Matrius (arrays multidimensionals)", link: '/4-matrius' },
              { text: "5. La classe Arrays", link: '/5-classe_arrays' },
              { text: '6. La classe String', link: '/6-classe_string' },
              { text: '7. Cercar amb vectors', link: '/7-cercar' },
              { text: '8. Ordenació de vectors', link: '/8-ordenar' },
              { text: '💡Exemples', link: '/9-exemples' },
              { text: '✏️Exercicis', link: '/10-exercicis' },
            ]}
          ]
      }
    }
  },
  // Tema por idioma
  themeConfig: {
    logo: '/img/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GGEdu' }
    ],
    sidebar: {
      '/': [
        { text: '📚 Contenidos', items: [
          { text: '1. Introducción', link: '/1-introduccio' },
          { text: '2. Propiedades', link: '/2-propietats' },
          { text: '3. Vectores (arrays unidimensionales)', link: '/3-vectors' },
          { text: "4. Matrices (arrays multidimensionales)", link: '/4-matrius' },
          { text: "5. La clase Arrays", link: '/5-classe_arrays' },
          { text: '6. La clase String', link: '/6-classe_string' },
          { text: '7. Buscar con vectores', link: '/7-cercar' },
          { text: '8. Ordenación de vectores', link: '/8-ordenar' },
          { text: '💡Ejemplos', link: '/9-exemples' },
          { text: '✏️Ejercicios', link: '/10-exercicis' },
        ]},
        { text: '📚 Contenidos adicionales', items: [
          { text: 'For en formato foreach', link: '/11-add_foreach' },
        ]}      
      ],
      '/ca/': [
        { text: '📚 Continguts', items: [
          { text: '1. Introducció', link: '/1-introduccio' },
          { text: '2. Propietats', link: '/2-propietats' },
          { text: '3. Vectors (arrays unidimensionals)', link: '/3-vectors' },
          { text: "4. Matrius (arrays multidimensionals)", link: '/4-matrius' },
          { text: "5. La classe Arrays", link: '/5-classe_arrays' },
          { text: '6. La classe String', link: '/6-classe_string' },
          { text: '7. Cercar amb vectors', link: '/7-cercar' },
          { text: '8. Ordenació de vectors', link: '/8-ordenar' },
          { text: '💡Exemples', link: '/9-exemples' },
          { text: '✏️Exercicis', link: '/10-exercicis' },
        ]},
        { text: '📚 Continguts addicionals', items: [
          { text: 'For en format foreach', link: '/11-add_foreach' },
        ]}
      ]
    },
    footer: {
      message: '<img src="/img/logo-autor.png" alt="Autor Principal" style="height:60px; margin: 0 auto; display:block;" />',
      copyright: 'Copyright © 2025'
    }
  }
})
