import React, { useEffect, useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ClockSvg from '../../../assets/Svgs/Clock.svg';
import { Filters } from '@components/Filters';


import { 
  Container,
  Header,
  Greating,
  Message,
  Options,
  Notifications,
  Recent,
  Settings,
  FilterBar,
  RecentLeftContainer,
  RecentContainer,
} from './styles';
import { RecentCard } from '@components/RecentCard';

export function Home() {

  const [greating, setGreating] = useState('');

 async function getHour(){
    const time = new Date().getHours()
    
    if(time >= 6 && time < 12){
      setGreating('Bom dia')
    }
    else if(time >= 12 && time < 18){
      setGreating('Boa tarde')
    }
    else {
      setGreating('Boa Noite')
    }
  }

  useEffect(() => {
    getHour()
  },[])


  return (
    <Container>
      <Header>
        <Greating>
          <Message>{greating}</Message>
        </Greating>

        <Options>

          <Notifications>
            <Octicons name="bell" size={24} color="white"/>
            </Notifications>
            
          <Recent>
            <ClockSvg height={24} width={24}/>
            </Recent>

          <Settings>
            <Feather name="settings" size={24} color="white"/>
          </Settings>

        </Options>
      </Header>

      <FilterBar horizontal >
      <Filters title='Musica'/>
      <Filters title='Podcasts e programas'/>
      </FilterBar>

      <Recent>

      <RecentContainer>

      <RecentCard 
      image='https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_default.jpg'
       title='Top 50 - Brasil'
       />
      <RecentCard 
      image='https://thisis-images.scdn.co/37i9dQZF1DZ06evO2V6FOw-default.jpg' 
      title='This is Veigh'
      />
      <RecentCard 
      image='https://images.genius.com/aa16e54b922f1716dc8b5c133bbf5b31.300x300x1.png'
       title='This is Justin Bieber' 
       />

      </RecentContainer>


      <RecentContainer>

       <RecentCard 
       image='https://akamai.sscdn.co/letras/360x360/albuns/6/9/2/6/1866381689592694.jpg'
       title='Perdas & Ganhos'
       />
      <RecentCard 
      image='https://akamai.sscdn.co/uploadfile/letras/albuns/1/9/1/7/01673348967.jpg' 
      title='Vida Cara'
      />
      <RecentCard 
      image='https://media.pitchfork.com/photos/638a00f26bff496656dc0b1c/1:1/w_450%2Cc_limit/Metro-Boomin.jpg'
      title='Heroes & Villains'
      />

      </RecentContainer>

      </Recent>
    </Container>
  );
}