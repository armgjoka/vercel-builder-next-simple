import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { builder, Builder } from '@builder.io/react'
import builderConfig from '@config/builder'
builder.init(builderConfig.apiKey)


export default function MyApp({ Component, pageProps }: AppProps) {

/*   useEffect( () => {
    if (Builder.isBrowser) {
      console.log('Set editor options');
      Builder.set({ 
        customInsertMenu: true,
        hideABTab: true, 
      })
      console.log('Settings changed 2!')
    }
  }, []) */

  useEffect(() => {
    if (Builder.isBrowser) {
        Builder.register('editor.settings', {
          hideABTab: true,
          customInsertMenu: true,
        })
    }
  }, []);

  return  <Component {...pageProps} />
}
