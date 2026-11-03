import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default ({
  base: '/UF4-Estructuras-Datos/',
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
      title: 'UF4 - Estructuras de Datos Dinámicas',
      description: 'Unidad 4 donde se introducen las estructuras de datos dinámicas.',
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
              { text: '✏️Ejercicios', link: '/9-exercicis' }
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
          { text: '✏️Ejercicios', link: '/9-exercicis' }
        ]},
        { text: '📚 Contenidos adicionales', items: [          
          { text: "La clase Arrays", link: '/10-classe_arrays' },
          { text: 'For en formato foreach', link: '/12-add_foreach' },
          { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' }
        ]}      
      ]
    },
    footer: {
      message: '<img src="/img/logo-autor.png" alt="Autor Principal" style="height:60px; margin: 0 auto; display:block;" />',
      copyright: 'Copyright © 2025'
    }
  }
})
