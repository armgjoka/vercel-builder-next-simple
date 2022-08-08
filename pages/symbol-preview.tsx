import { BuilderComponent, Builder } from '@builder.io/react'
import "../components/SvgComponent";
import "../components/Heading";

Builder.register('insertMenu', {
  name: 'Custom Components',
  items: [
    { name: 'Heading' },
    { name: 'Custom SVG' }
  ],
})

export default function Symbol() {
  return <BuilderComponent model="symbol"/>
}
