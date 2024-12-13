import { NextApiRequest, NextApiResponse } from 'next'

import { MercadoPagoConfig } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '',
})

export default async function checkPaymentStatus(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { paymentId } = req.query

    try {
      const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
        },
      })

      const paymentStatus = await response.json()

      res.status(200).json({ status: paymentStatus })
    } catch (error) {
      console.error('Erro ao verificar status do pagamento:', error)
      res.status(500).json({ error: 'Erro ao verificar status do pagamento' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
