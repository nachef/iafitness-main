// Use type safe message keys with `next-intl`
type Messages = typeof import('@langs/en-US.json')
declare interface IntlMessages extends Messages {}
declare const SumUpCard: {
  mount: (config: { id: string; checkoutId: string; onResponse: (type: string, body: any) => void }) => void
}
