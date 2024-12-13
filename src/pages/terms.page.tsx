import { useEffect, useState } from 'react'

import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import { useTheme } from 'styled-components'

import { Box } from '../components/Atoms/Box'
import { Container } from '../components/Atoms/Container'
import { Text } from '../components/Atoms/Text'
import { Navbar } from '../components/Molecules/Navbar'
import { Footer } from '../components/Organisms/Footer'
import useMediaQuery from '../hooks/useMediaQuery'

export default function Terms() {
  const theme = useTheme()
  const isSmallMobile = useMediaQuery('(max-width: 576px)')
  const isLargeMobile = useMediaQuery('(min-width: 577px) and (max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <>
      <Head>
        <title>Intelligence Fit</title>
      </Head>
      <Box display='flex' flexDirection='row' style={{ position: 'relative' }}>
        <Container>
          <Box px={isSmallMobile || isLargeMobile ? 0 : 100} pt={48}>
            <Navbar />
            <Fade triggerOnce direction='up' delay={200}>
              <Box mt={isTablet ? 80 : 100} mb={isTablet ? 0 : 100} style={{ zIndex: 5, position: 'relative' }}>
                <Text color={theme.colors.basics.secondary} font={'bold'} size={'medium'} mb={16}>
                  TERMOS E CONDIÇÕES DE USO DO SITE
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  1. Este Termo se refere ao(à) Intelligence Fit. Ao navegar neste site e usar os serviços que são
                  fornecidos, você AFIRMA que LEU, COMPREENDEU e CONCORDA com nossos Termos e Condições. Estes Termos e
                  Condições abrangem todos os aplicativos, serviços de Internet ou extensões dos sites relacionados.
                  Caso você não concorde ou não tenha ficado claro algum ponto, sugere-se que você NÃO NAVEGUE MAIS NELE
                  até que você tenha sanado todas as suas dúvidas. Você poderá ainda, a qualquer tempo, retornar ao
                  site, clicar em termos de uso e reler quantas vezes desejar.
                </Text>
                <Text color={theme.colors.text.primary} font={'bold'} size={'small'} mb={16}>
                  Termos e Condições
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  2. Os Termos e Condições de Intelligence Fit regem o uso deste Site e todo o seu conteúdo
                  (&quot;Site&quot;). Estes Termos descrevem as regras e regulamentos que orientam o uso de Intelligence
                  Fit localizado pelo link URL www.intelligencefit.com. Todos os
                  materiais/informações/documentos/serviços ou todas as outras entidades (coletivamente referidas como
                  &#39;conteúdo&#39;) que aparecem em www.intelligencefit.com serão administrados de acordo com estes
                  Termos e Condições.
                </Text>
                <Text color={theme.colors.text.primary} font={'bold'} size={'small'} mb={16}>
                  ATENÇÃO: Não continue a usar este site se você tiver qualquer objeção a qualquer uma das disposições
                  dos Termos e Condições declarados nesta página.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  3. O site é destinado a usuários com 18 (dezoito) anos de idade ou mais. Se você tem menos de 18
                  (dezoito) anos, não poderá usar ou registrar-se para usar este site ou seus serviços sem a permissão
                  ou consentimento dos pais. Ao concordar com estes Termos e Condições, você tem a capacidade legal
                  necessária para cumprir e ficar vinculado por estes Termos e Condições.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  4. Intelligence Fit faz uso de cookies. Ao acessar nosso site, você concorda em usar cookies nos
                  termos da nossa Política de Cookies. Salienta-se que algum dos nossos parceiros de site podem usar
                  cookies.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  5. Intelligence Fit detém os direitos de propriedade intelectual de todo o conteúdo. Todos os direitos
                  de propriedade intelectual são reservados. Você pode acessar qualquer conteúdo do site para seu uso
                  pessoal, sujeito às restrições definidas nestes termos e condições. Intelligence Fit, por meio deste,
                  determina que o usuário do site não cometa as seguintes ações:
                  <ul>
                    <li>Reproduzir, republicar, duplicar ou copiar qualquer conteúdo de Intelligence Fit;</li>
                    <li>
                      Vender, alugar, sublicenciar e/ou de outra forma comercializar qualquer conteúdo de Intelligence
                      Fit;
                    </li>
                    <li>Executar e / ou exibir publicamente qualquer conteúdo de Intelligence Fit;</li>
                    <li>
                      Usar este site de forma que seja, ou talvez, danifique e/ou afete o acesso do usuário a este site;
                    </li>
                    <li>
                      Usar este site contrário às regras, leis e regulamentos relevantes do seu país de residência, ou
                      de uma maneira que cause, ou possa causar, danos ao site ou a qualquer pessoa ou entidade
                      comercial;
                    </li>
                    <li>
                      Realizar mineração de dados ou qualquer outra atividade semelhante relacionada a este site, ou
                      durante o uso deste site;
                    </li>
                    <li>Usar este site para se envolver em qualquer forma de publicidade ou marketing empresarial.</li>
                  </ul>
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  6. Áreas específicas deste site podem ser restritas ao acesso do usuário, e Intelligence Fit pode
                  estender ainda mais essa restrição a todo o site, a qualquer momento e a seu exclusivo critério.
                  Qualquer identificação de usuário, chave de segurança ou senha que você possa ter neste site são
                  confidenciais e você é responsável por manter a confidencialidade dessas informações.
                </Text>
                <Text color={theme.colors.text.primary} font={'bold'} size={'small'} mb={16}>
                  Link e Hiperlink
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  7. Nós nos reservamos o direito de registrar solicitações para que você remova todos os links ou
                  qualquer link específico criado por você que redirecione para o nosso site, e você aprova a remoção
                  imediata desses links para o nosso site, mediante solicitação.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  8. Podemos alterar os termos e condições desses direitos de vinculação a qualquer momento. Ao
                  conectar-se continuamente ao nosso site, você concorda em se comprometer e seguir os termos desta
                  política de links.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  9. Por favor, entre em contato conosco se encontrar algum link em nosso site que seja ofensivo, e
                  poderemos considerar e analisar solicitações de remoção de tais links.
                </Text>
                <Text color={theme.colors.text.primary} font={'bold'} size={'small'} mb={16}>
                  Link para conteúdo de terceiros
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  10. Este site pode conter links para sites ou aplicativos operados por terceiros. Não controlamos
                  nenhum desses sites ou aplicativos de terceiros ou o operador de terceiros. Este Site, objeto do
                  presente Termos de Uso não é responsável e não endossa quaisquer sites ou aplicativos de terceiros ou
                  sua disponibilidade ou conteúdo.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  Intelligence Fit não se responsabiliza pelos anúncios contidos no site. Você concorda em fazê-lo por
                  sua própria conta e risco ao adquirir quaisquer bens e / ou serviços de terceiros. O anunciante é quem
                  permanece responsável por tais bens e/ou serviços, e se você tiver alguma dúvida ou reclamação sobre
                  eles, você deve entrar em contato com o anunciante.
                </Text>
                <Text color={theme.colors.text.primary} font={'bold'} size={'small'} mb={16}>
                  Conteúdo do usuário
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  11. Importante salientar que o termo usado &quot;Conteúdo do Usuário&quot; significa qualquer áudio,
                  vídeo, texto, imagens ou outro material ou conteúdo que você decida exibir neste Site. Com relação ao
                  conteúdo do usuário, ao exibi-lo, você concede para Intelligence Fit uma licença não exclusiva,
                  mundial, irrevogável, isenta de royalties e sublicenciável para usar, reproduzir, adaptar, publicar,
                  traduzir e distribuir em qualquer mídia.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  12. O Conteúdo do Usuário deve ser seu e não deve infringir os direitos de terceiros. Intelligence Fit
                  reserva-se o direito de remover qualquer parte do seu conteúdo deste site a qualquer momento, sem
                  aviso prévio. Intelligence Fit tem permissão para monitorar suas atividades no site e remover qualquer
                  conteúdo do usuário considerado impróprio, ofensivo, contrário às leis e regulamentos aplicáveis, ou
                  que cause uma violação destes Termos e Condições.
                </Text>
                <Text color={theme.colors.text.primary} font={'bold'} size={'small'} mb={16}>
                  Política de Privacidade
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  13. Ao acessar este Site, informações específicas sobre o Usuário, como endereços de protocolo de
                  Internet (IP), navegação no site, software do usuário e tempo de navegação, juntamente com outras
                  informações semelhantes, serão armazenadas nos servidores de Intelligence Fit. As informações sobre
                  suas identidades, como nome, endereço, detalhes de contato, informações de faturamento e outras
                  informações armazenadas neste site, serão estritamente usadas apenas para fins estatísticos e não
                  serão publicadas para acesso geral. Intelligence Fit, no entanto, não assume nenhuma responsabilidade
                  pela segurança dessas informações.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  14. O site é fornecido, com todas as responsabilidades e não assume compromissos, representações ou
                  garantias expressas ou implícitas de qualquer tipo relacionadas a este site ou ao conteúdo nele
                  contido.
                </Text>
                <Text color={theme.colors.text.primary} font={'bold'} size={'small'} mb={16}>
                  Indenização
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  15. O usuário concorda em indenizar o Site e suas afiliadas em toda a extensão, frente à todas as
                  ações, reclamações, responsabilidades, perdas, danos, custos, demandas e despesas decorrentes do uso
                  deste Site pelo Usuário, incluindo, sem limitação, qualquer reclamação relacionada à violação de
                  qualquer uma das disposições destes Termos e Condições. Se estiver insatisfeito com algum ou todo o
                  conteúdo deste site ou qualquer um ou todos os seus Termos e Condições, o usuário pode interromper o
                  uso deste site.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  16. Em qualquer momento, os usuários podem interromper o uso do Site para isso, no site, estão
                  disponíveis as orientações necessárias. Caso ainda fique algum dúvida, não hesite em enviar um e-mail
                  para intelligencefitia@gmail.com.
                </Text>

                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  17. Nós nos reservamos o direito e critério exclusivo de, e sem aviso prévio ou responsabilidade,
                  negar o acesso e uso do site (incluindo o bloqueio de endereços IP específicos) a qualquer usuário por
                  qualquer motivo, incluindo, mas não se limitando à violação de qualquer representação, garantia ou
                  acordo nestes Termos ou em qualquer lei ou regulamento aplicável.
                </Text>
                <Text color={theme.colors.text.primary} font={'bold'} size={'small'} mb={16}>
                  Disposições gerais
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  18. Os Termos e Condições deste site serão regidos e interpretados de acordo com as leis do país ou
                  estado em que o Site opera. Você, por meio deste, se submete incondicionalmente à jurisdição não
                  exclusiva dos tribunais localizados no Brasil para a resolução de quaisquer disputas.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  19. Este Site reserva-se o direito de revisar estes Termos a qualquer momento conforme julgar
                  adequado. Por isso é fundamental que os seus usuários estejam atentos à essas aleterações.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  20. O Site reserva-se o direito de ceder, transferir e subcontratar seus direitos e/ou obrigações sob
                  este Acordo sem qualquer notificação ou consentimento prévio necessário. Os usuários não terão
                  permissão para atribuir, transferir ou subcontratar qualquer um de seus direitos e/ou obrigações sob
                  estes Termos. Além disso, uma pessoa que não seja parte destes Termos e Condições não terá o direito
                  de fazer cumprir qualquer disposição neles contida.
                </Text>
                <Text color={theme.colors.text.primary} font={'bold'} size={'small'} mb={16}>
                  Política de Reembolso
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  21. Intelligence Fit não oferece reembolso dos valores pagos por seus serviços ou produtos sob nenhuma
                  circunstância, salvo em casos onde for comprovado erro por parte da empresa ou falha em nossos
                  sistemas que impeça o uso adequado do serviço contratado.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  22. Reembolsos não serão concedidos em situações de insatisfação pessoal ou discordância em relação ao
                  conteúdo ou resultado dos serviços oferecidos. Ao concordar com estes Termos, o usuário aceita esta
                  política integralmente.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  23. Estes Termos e Condições, incluindo quaisquer avisos legais e isenções de responsabilidade neste
                  site, constituem o acordo completo entre o Site e você em relação ao uso deste site. Em última
                  análise, este Acordo substitui todos os acordos e entendimentos anteriores relativos ao mesmo.
                </Text>
                <Text color={theme.colors.text.primary} font={'light'} size={'small'} mb={24}>
                  24. Qualquer dúvida, entre em contato por meio do endereço de e-mail:
                  <a href='mailto:support@intelligencefit.com'>support@intelligencefit.com</a>
                </Text>
              </Box>
            </Fade>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
