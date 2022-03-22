import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { builder, Builder } from '@builder.io/react'
import builderConfig from '@config/builder'
builder.init(builderConfig.apiKey)


export default function MyApp({ Component, pageProps }: AppProps) {
    if (Builder.isBrowser) {
      console.log('Set editor options');
      Builder.set({ 
        customInsertMenu: true,
        hideABTab: true, 
      })
      console.log('Settings changed 2!')
    }
  return <Component {...pageProps} />
}
