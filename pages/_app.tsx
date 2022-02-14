import type { AppProps } from 'next/app'

import { builder, Builder } from '@builder.io/react'
import builderConfig from '@config/builder'
builder.init(builderConfig.apiKey)

if (Builder.isBrowser) {
  Builder.set({ 
    customInsertMenu: true,
    hideABTab: true, 
  })
  console.log('Settings changed!')
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
