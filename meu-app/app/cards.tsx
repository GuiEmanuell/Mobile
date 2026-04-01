import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CustomCard } from '../components/card';

export default function CardsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomCard 
        title="Card 1" 
        description="Descrição simples do primeiro card do sistema." 
        iconName="star" 
      />
      <CustomCard 
        title="Card 2" 
        description="Aqui temos informações relevantes do segundo card." 
        iconName="rocket" 
      />
      <CustomCard 
        title="Card 3" 
        description="Por fim, os detalhes do terceiro e último card." 
        iconName="heart" 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    flexGrow: 1, 
  },
});