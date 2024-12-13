import * as deepl from 'deepl-node'

const authKey = process.env.NEXT_PUBLIC_DEEPL_API_KEY || ''
if (!authKey) {
  throw new Error('DeepL API key is not set')
}
const translator = new deepl.Translator(authKey)

;(async () => {
  const result = await translator.translateText('Hello, world!', null, 'en-US')
  console.log(result.text) // Bonjour, le monde !
})()
