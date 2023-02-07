import { BuilderComponent, Builder } from '@builder.io/react'
import "../components/SvgComponent";
import "../components/Heading";

export default function Symbol() {
  return <BuilderComponent model="symbol" options={{ includeRefs: true, }}/>
}
