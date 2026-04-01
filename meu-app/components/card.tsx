import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CustomCardProps {
  title: string;
  description: string;
  iconName: keyof typeof Ionicons.glyphMap;
}

export function CustomCard({ title, description, iconName }: CustomCardProps) {
  return (
    <View style={styles.card}>
      {}
      <Ionicons name={iconName} size={32} color="#333" style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', 
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center', 
  },
  icon: {
    marginRight: 16,
  },
  content: {
    flex: 1, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});