import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
               <Text span css={{color: '$blue600'}}>
               Soluções
               </Text>
               <Text h3>De acordo com a sua necessidades</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  <Text
                  span>
                     Com a {' '}
                  </Text>
                  <Text
                  span weight={'bold'}
                     css={{
                        color: '$blue600',
                     }}>
                     Metal Sul {' '}
                  </Text>
                  <Text 
                  span>você encontra tudo o que precisa para sua obra com preços competitivos e condições de pagamento facilitadas </Text>
                  
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Soluções personalizadas
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        <Text span weight={'medium'}>Desenvolvemos projetos exclusivos</Text> para cada cliente.
                        Adaptamos cada detalhe do seu projeto às suas necessidades
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Agilidade
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        <Text span weight={'medium'} > Reduza o tempo de obra e entregue seu projeto antes do prazo. </Text> 
                        Nossa produção em fábrica garante maior precisão e menor tempo de instalação,
                        permitindo que você economize tempo e dinheiro.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Sustentabilidade
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        <Text span weight={'medium'} >Construa de forma mais sustentável e eficiente. </Text> 
                        Produzimos com materiais de alta qualidade e processos que minimizam o impacto ambiental.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
