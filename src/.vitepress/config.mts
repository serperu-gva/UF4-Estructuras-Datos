import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default ({
  base: '/UF5_1-sgzDe10yeRTVD1eSVNKd/',
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
        siteTitle: 'Estructuras de </br>Datos Dinámicas I',
        outline: { label: 'En esta página' },
          docFooter: { prev: 'Anterior', next: 'Siguiente' },
          nav: [
            { text: '🏠 Inicio', link: '/' },
            { text: '📚 Contenidos', items: [
              { text: '1. Introducción', link: '/1-introduccio' },
              { text: '2. Propiedades', link: '/2-propietats' },
              { text: '3. Vectores (arrays unidimensionales)', link: '/3-vectors' },
              { text: "4. Matrices (arrays multidimensionales)", link: '/4-matrius' },
              { text: '5. Buscar con vectores', link: '/5-cercar' },
              { text: '6. Ordenación de vectores', link: '/6-ordenar' },
              { text: '7. ArrayList', link: '/7-arraylist' },
              { text: '💡Ejemplos', link: '/8-exemples' },
              { text: '✏️Ejercicios', link: '/9-exercicis' },
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
        siteTitle: 'Estrucutures de </br>Dades Dinàmiques I',
        outline: { label: 'En aquesta pàgina' },
          docFooter: { prev: 'Anterior', next: 'Següent' },
          nav: [
            { text: '🏠 Inici', link: '/ca/index' },
            { text: '📚 Continguts', items: [
              { text: '1. Introducció', link: '/ca/1-introduccio' },
              { text: '2. Propietats', link: '/ca/2-propietats' },
              { text: '3. Vectors (arrays unidimensionals)', link: '/ca/3-vectors' },
              { text: "4. Matrius (arrays multidimensionals)", link: '/ca/4-matrius' },
              { text: '5. Cercar amb vectors', link: '/ca/5-cercar' },
              { text: '6. Ordenació de vectors', link: '/ca/6-ordenar' },
               { text: '7. ArrayList', link: '/7-arraylist' },
              { text: '💡Exemples', link: '/ca/8-exemples' },
              { text: '✏️Exercicis', link: '/ca/9-exercicis' },
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
          { text: '5. Buscar con vectores', link: '/5-cercar' },
          { text: '6. Ordenación de vectores', link: '/6-ordenar' },
          { text: '7. ArrayList', link: '/7-arraylist' },
          { text: '💡Ejemplos', link: '/8-exemples' },
          { text: '✏️Ejercicios', link: '/9-exercicis' },
        ]},
        { text: '📚 Contenidos adicionales', items: [          
          { text: "La clase Arrays", link: '/10-classe_arrays' },
          { text: 'La clase String', link: '/11-classe_string' },
          { text: 'For en formato foreach', link: '/12-add_foreach' },
          { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
          { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
        ]}      
      ],
      '/ca/': [
        { text: '📚 Continguts', items: [
          { text: '1. Introducció', link: '/ca/1-introduccio' },
          { text: '2. Propietats', link: '/ca/2-propietats' },
          { text: '3. Vectors (arrays unidimensionals)', link: '/ca/3-vectors' },
          { text: "4. Matrius (arrays multidimensionals)", link: '/ca/4-matrius' },
          { text: '5. Cercar amb vectors', link: '/ca/5-cercar' },
          { text: '6. Ordenació de vectors', link: '/ca/6-ordenar' },
          { text: '7. ArrayList', link: '/7-arraylist' },
          { text: '💡Exemples', link: '/ca/8-exemples' },
          { text: '✏️Exercicis', link: '/ca/9-exercicis' },
        ]},
        { text: '📚 Continguts addicionals', items: [          
          { text: "La classe Arrays", link: '/ca/10-classe_arrays' },
          { text: 'La classe String', link: '/ca/11-classe_string' },
          { text: 'For en format foreach', link: '/ca/12-add_foreach' },
          { text: '<img src="../img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
          { text: '<img src="../img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
        ]}
      ]
    },
    footer: {
      message: '<img src="/img/logo-autor.png" alt="Autor Principal" style="height:60px; margin: 0 auto; display:block;" />',
      copyright: 'Copyright © 2025'
    }
  }
})
