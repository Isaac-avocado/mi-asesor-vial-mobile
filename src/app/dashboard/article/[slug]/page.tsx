import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import ArticleViewContent from "../../../../components/article-view-content";
import { View, Text } from "react-native";

// Simulación de artículos (puedes reemplazar por fetch real o contexto)
const articles = [
  {
    slug: 'entendiendo-limites-velocidad',
    title: 'Entendiendo los Límites de Velocidad y sus Consecuencias',
    shortDescription: 'Conoce los diferentes límites de velocidad y las posibles multas por excederlos.',
    category: 'Reglamentos e Infracciones',
    imageUrl: 'https://picsum.photos/seed/speeding/600/400',
    favoriteCount: 120,
    content: {
      introduction: 'Los límites de velocidad son cruciales para la seguridad vial...',
      points: [
        'Límites de velocidad en zona urbana vs. carretera.',
        'Factores que afectan los cambios de límite de velocidad (zonas escolares, construcción).',
        'Multas y puntos en la licencia por exceso de velocidad.',
        'Impacto del exceso de velocidad en la gravedad de los accidentes.',
      ],
      conclusion: 'Respetar los límites de velocidad es una responsabilidad...'
    },
    readMoreLink: '#',
  },
  // ...otros artículos...
];

export default function ArticleDetailPage() {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const { slug } = route.params || {};
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ef4444', marginBottom: 16 }}>Artículo No Encontrado</Text>
        <Text style={{ fontSize: 16, color: '#888', marginBottom: 24 }}>Lo sentimos, no pudimos encontrar el artículo que estás buscando.</Text>
        <Text style={{ color: '#0081A7', fontWeight: 'bold' }} onPress={() => navigation.goBack()}>Volver al Panel Principal</Text>
      </View>
    );
  }

  return <ArticleViewContent article={article} onBack={() => navigation.goBack()} />;
}
