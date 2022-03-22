import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { builder, Builder } from '@builder.io/react'
import builderConfig from '@config/builder'
builder.init(builderConfig.apiKey)


export default function MyApp({ Component, pageProps }: AppProps) {
  const [inUseEffect, setinUseEffect] = useState('default');
  
  useEffect(() => {
    setinUseEffect('use effect');
    if (Builder.isBrowser) {
      setinUseEffect('browser');
      console.log('Set editor options: ', inUseEffect);
      Builder.set({ 
        customInsertMenu: true,
        hideABTab: true, 
      })
    }
  }, [inUseEffect])

  return  <div>
    <p>Component rendered {inUseEffect}</p>
    <Component {...pageProps} />
    </div>
}
