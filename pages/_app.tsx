import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { builder, Builder } from '@builder.io/react'
import builderConfig from '@config/builder'
builder.init(builderConfig.apiKey)


export default function MyApp({ Component, pageProps }: AppProps) {

  const [settings, setSettings] = useState('');
  
  Builder.settingsChange.subscribe(r => setSettings(JSON.stringify(r, null, 2)))
  
  Builder.register('editor.settings', {
    hideABTab: true,
  })
  

  return  <div>
    <p>Component rendered {settings}</p>
    <Component {...pageProps} />
    </div>
}
