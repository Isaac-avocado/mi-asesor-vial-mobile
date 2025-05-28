import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import tw from "twrnc";
import AiSuggester from "../../components/ai-suggester";
import ArticleCard from "../../components/article-card";
import { Card, CardHeader, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

// Simulación de artículos (puedes reemplazar por fetch real o contexto)
const articles = [
  {
    slug: 'entendiendo-limites-velocidad',
    title: 'Entendiendo los Límites de Velocidad y sus Consecuencias',
    shortDescription: 'Conoce los diferentes límites de velocidad y las posibles multas por excederlos.',
    category: 'Reglamentos e Infracciones',
    imageUrl: 'https://picsum.photos/seed/speeding/600/400',
    favoriteCount: 120,
  },
  {
    slug: 'importancia-semaforos',
    title: 'La Importancia de las Señales del Semáforo',
    shortDescription: 'Descubre por qué los semáforos son esenciales para un flujo vehicular ordenado y para prevenir choques.',
    category: 'Seguridad Vial',
    imageUrl: 'https://picsum.photos/seed/trafficlight/600/400',
    favoriteCount: 95,
  },
  {
    slug: 'practicas-estacionamiento-seguro',
    title: 'Prácticas de Estacionamiento Seguro para Evitar Multas',
    shortDescription: 'Domina las reglas de estacionamiento seguro y legal para evitar infracciones y garantizar la accesibilidad.',
    category: 'Obligaciones',
    imageUrl: 'https://picsum.photos/seed/parking/600/400',
    favoriteCount: 78,
  },
];

// Placeholder icons
const Lightbulb = () => <Text style={tw`text-3xl mr-2`}>💡</Text>;
const Newspaper = () => <Text style={tw`text-3xl mr-2`}>📰</Text>;

export default function DashboardPage() {
  return (
    <ScrollView style={tw`flex-1 bg-white`} contentContainerStyle={tw`p-4 pb-12`}>
      <View style={tw`mb-12`}>
        <View style={tw`flex-row items-center gap-3 mb-6`}>
          <Lightbulb />
          <Text style={tw`text-2xl font-bold text-primary`}>Asesoría con IA</Text>
        </View>
        <Card style={tw`mb-4`}>
          <CardContent>
            <AiSuggester />
          </CardContent>
        </Card>
      </View>
      <View>
        <View style={tw`flex-row items-center gap-3 mb-8`}>
          <Newspaper />
          <Text style={tw`text-2xl font-bold text-primary`}>Artículos Destacados</Text>
        </View>
        {articles.length > 0 ? (
          <FlatList
            data={articles}
            keyExtractor={item => item.slug}
            renderItem={({ item }) => (
              <View style={tw`mb-6`}>
                <ArticleCard article={item} />
              </View>
            )}
            scrollEnabled={false}
          />
        ) : (
          <Text style={tw`text-center text-lg text-primary/80`}>No hay artículos disponibles en este momento.</Text>
        )}
      </View>
    </ScrollView>
  );
}
