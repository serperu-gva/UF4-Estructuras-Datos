//import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'ca-ES',
  title: 'UF5_1',
  description: 'Descripció',
  base: '/UF5/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
  head: [
    //['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    //['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    //['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }],
    //['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
  ],
  themeConfig: {
    siteTitle: 'Vectors',
    logo: '/img/logo.png',
    nav: [
      { text: '🏠 Inici', link: '/' },
      { text: '📋 Objectius', link: '/objectius' },
      { text: '📚 Continguts', items: [
        { text: '1. Introducció', link: '/1-introduccio' },
        { text: '2. Propietats', link: '/2-propietats' },
        { text: '3. Vectors (arrays unidimensionals)', link: '/3-vectors' },
        { text: "4. Matrius (arrays multidimensionals)", link: '/4-matrius' },
        { text: "5. La classe Arrays", link: '/5-classe_arrays' },
        { text: '6. La classe String', link: '/6-classe_string' },
        { text: '7. Cercar amb vectors', link: '/7-cercar' },
        { text: '8. Ordenació de vectors', link: '/8-ordenar' },
        { text: "9. La classe HashMap (Arrays associatius)", link: '/9-hashmap' },
        { text: "10. La classe ArrayList (Arrays redimensionables)", link: '/10-arraylist' },
        { text: 'Exemples', link: '/11-exemples' },
        { text: 'Exercicis', link: '/12-exercicis' },
      ]},
      { text: '📚 Continguts addicionals', items: [
        { text: 'For en format foreach', link: '/13-add_foreach' },
      ]}
    ],
    sidebar: [
      {
        text: '📚 Continguts',
        items: [
          { text: '1. Introducció', link: '/1-introduccio' },
          { text: '2. Propietats', link: '/2-propietats' },
          { text: '3. Vectors (arrays unidimensionals)', link: '/3-vectors' },
          { text: "4. Matrius (arrays multidimensionals)", link: '/4-matrius' },
          { text: "5. La classe Arrays", link: '/5-classe_arrays' },
          { text: '6. La classe String', link: '/6-classe_string' },
          { text: '7. Cercar amb vectors', link: '/7-cercar' },
          { text: '8. Ordenació de vectors', link: '/8-ordenar' },
          { text: "9. La classe HashMap (Arrays associatius)", link: '/9-hashmap' },
          { text: "10. La classe ArrayList (Arrays redimensionables)", link: '/10-arraylist' },
          { text: 'Exemples', link: '/11-exemples' },
          { text: 'Exercicis', link: '/12-exercicis' },
        ]
      },
      { text: '📚 Continguts addicionals', items: [
        { text: 'For en format foreach', link: '/13-add_foreach' },
        { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
        { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
      ]}
    ],
    socialLinks: [
      { icon: 'github', link: '' }
    ],
    footer: {
      message: "CEEDCV - Centre Específic d'Educació a Distància de la Comunitat Valenciana",
      copyright: 'Copyright © 2024-2025'
    },
    outline: {
      label: 'En aquesta pàgina'
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Següent'
    }
  }
})
