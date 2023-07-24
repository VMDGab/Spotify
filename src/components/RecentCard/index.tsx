import React from 'react';
import { 
    Container,
    PlaylistPhoto, 
    PlaylistTitle,
 } from './styles';

 interface props{
    image: string,
    title: string,
 }
export function RecentCard({image, title}: props) {
  return (
    <Container>
        <PlaylistPhoto source={{uri : image}}/>

        <PlaylistTitle>
            {title}
        </PlaylistTitle>
    </Container>
  );
}