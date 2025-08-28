// https://vitepress.dev/guide/custom-theme
//import Layout from './Layout.vue'
import type { Theme, EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import customEnhanceApp from './enhanceApp'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp?.(ctx)
    enhanceAppWithTabs(ctx.app)
    customEnhanceApp(ctx)
    
    if (typeof window !== 'undefined') {
      let diagramCounter = 0; // Contador global para IDs únicos
      
      const initMermaid = async () => {
        try {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize({
            startOnLoad: false,
            theme: 'default'
          });
          
          const renderDiagrams = () => {
            document.querySelectorAll('.language-mermaid:not([data-processed])').forEach((el) => {
              const code = el.textContent?.replace(/^mermaid\s*/i, '').trim();
              if (code) {
                el.setAttribute('data-processed', 'true');
                const uniqueId = `mermaid-diagram-${Date.now()}-${++diagramCounter}`;
                
                mermaid.render(uniqueId, code).then(result => {
                  const div = document.createElement('div');
                  div.innerHTML = result.svg;
                  div.className = 'mermaid-container';
                  el.parentNode?.insertBefore(div, el);
                  (el as HTMLElement).style.display = 'none';
                }).catch(error => {
                  console.error(`Error rendering diagram ${uniqueId}:`, error);
                  // Mostrar el código original si hay error
                  (el as HTMLElement).style.display = 'block';
                  el.removeAttribute('data-processed');
                });
              }
            });
          };
          
          renderDiagrams();
          new MutationObserver(renderDiagrams).observe(document.body, { childList: true, subtree: true });
        } catch (error) {
          console.error('Mermaid error:', error);
        }
      };
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMermaid);
      } else {
        initMermaid();
      }
    }
  }
} satisfies Theme
