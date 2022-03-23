import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { builder, Builder } from '@builder.io/react'
import builderConfig from '@config/builder'
builder.init(builderConfig.apiKey)


export default function MyApp({ Component, pageProps }: AppProps) {
  const builderEnv = builder.env;
  useEffect(() => {
      Builder.set({ 
        customInsertMenu: true,
        hideABTab: true, 
      })
  }, [])

  return  <div>
    <p>Component rendered {builderEnv}</p>
    <Component {...pageProps} />
    </div>
}
