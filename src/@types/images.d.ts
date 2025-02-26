/// <reference types="react" />

declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react'

  const content: React.FC<SVGProps<SVGElement>>
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare module '*.mp4' {
  const content: any
  export default content
}
