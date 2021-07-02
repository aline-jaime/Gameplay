import React, {LinkHTMLAttributes} from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import {
  ImageBackground,
  Text,
  View,
  FlatList
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import BannerImg from '../../assets/banner.png';

import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Member } from '../../components/Member';
import { Header } from '../../components/Header';
import { Avatar } from '../../components/Avatar';

export function AppointmentDetails(){

  const navigation = useNavigation();
  
  const members = [
    {
      id: '1',
      username: 'Anfitrião',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-z58HXt8lhe_86dfB0cETB-T9iDlaU-xqg&usqp=CAU://github.com/rodrigorgtic.png',
      status: 'online'
    },
  ]

  function navigateDiscord(){
    navigation.navigate('https://discord.com/');
  }
  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}> 
            Lendários 
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title="Jogador"
        subtitle=""
      />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon 
          title="Entrar na partida"
          
        />
      </View>
    </Background>
  );
}