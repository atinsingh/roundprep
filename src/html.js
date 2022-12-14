import React from "react"
import PropTypes from "prop-types"

const themeScript = `
 console.log('I AM RUNNING THIS')
 let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

 function updateTheme(theme) {
   theme = theme ?? window.localStorage.theme ?? 'system'

   if (theme === 'dark' || (theme === 'system' && isDarkMode.matches)) {
     document.documentElement.classList.add('dark')
   } else if (theme === 'light' || (theme === 'system' && !isDarkMode.matches)) {
     document.documentElement.classList.remove('dark')
   }

   return theme
 }

 function updateThemeWithoutTransitions(theme) {
   updateTheme(theme)
   document.documentElement.classList.add('[&_*]:!transition-none')
   window.setTimeout(() => {
     document.documentElement.classList.remove('[&_*]:!transition-none')
   }, 0)
 }

 document.documentElement.setAttribute('data-theme', updateTheme())

 new MutationObserver(([{ oldValue }]) => {
   let newValue = document.documentElement.getAttribute('data-theme')
   if (newValue !== oldValue) {
     try {
       window.localStorage.setItem('theme', newValue)
     } catch {}
     updateThemeWithoutTransitions(newValue)
   }
 }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

 isDarkMode.addEventListener('change', () => updateThemeWithoutTransitions())
`


export default function HTML(props) {
  return (
    <html className="antialiased [font-feature-settings:'ss01']"  {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
      key="theme"
      dangerouslySetInnerHTML={{
        __html: themeScript,
      }}
    />
      </head>
      <body className="bg-white dark:bg-slate-900" data-theme='dark' {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
