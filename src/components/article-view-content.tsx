import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import tw from "twrnc";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Espera un prop article con los campos: title, imageUrl, category, favoriteCount, content: { introduction, points, conclusion }
export default function ArticleViewContent({ article, onBack }: { article: any, onBack?: () => void }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState<number>(article.favoriteCount);

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => {
      const newState = !prev;
      setFavoriteCount((count: number) => newState ? count + 1 : count - 1);
      return newState;
    });
  };

  return (
    <ScrollView style={tw`flex-1 bg-white`} contentContainerStyle={tw`p-4 pb-12`}> 
      <TouchableOpacity onPress={onBack} style={tw`mb-4 flex-row items-center`}>
        <Text style={tw`text-primary text-lg mr-2`}>←</Text>
        <Text style={tw`text-primary text-base`}>Volver al Panel</Text>
      </TouchableOpacity>
      <Card style={tw`shadow-xl overflow-hidden`}>
        <CardHeader style={tw`p-0 relative`}>
          <Image source={{ uri: article.imageUrl }} style={tw`w-full h-56`} resizeMode="cover" />
          <TouchableOpacity onPress={handleFavoriteClick} style={tw`absolute top-3 right-3 bg-white/80 rounded-full p-2`}>
            <Text style={tw`text-xl`}>{isFavorite ? "❤️" : "🤍"}</Text>
          </TouchableOpacity>
        </CardHeader>
        <CardContent style={tw`p-6`}> 
          <View style={tw`mb-4 flex-row justify-between items-center`}>
            <Badge variant="outline">{article.category}</Badge>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`mr-1`}>{isFavorite ? "❤️" : "🤍"}</Text>
              <Text>{favoriteCount}</Text>
            </View>
          </View>
          <Text style={tw`text-2xl font-bold mb-4 text-primary`}>{article.title}</Text>
          <Text style={tw`mb-6 text-base text-gray-700`}>{article.content.introduction}</Text>
          {article.content.points && article.content.points.length > 0 && (
            <View style={tw`mb-6`}>
              <Text style={tw`text-lg font-semibold mb-2 text-primary`}>Puntos Clave:</Text>
              {article.content.points.map((point: string, idx: number) => (
                <Text key={idx} style={tw`mb-1 ml-2`}>• {point}</Text>
              ))}
            </View>
          )}
          {article.content.conclusion && (
            <Text style={tw`mt-6 border-l-4 border-primary pl-4 italic text-gray-700`}>{article.content.conclusion}</Text>
          )}
          {article.readMoreLink && article.readMoreLink !== '#' && (
            <Button style={tw`w-full mt-8`} onPress={() => article.readMoreLink && Linking.openURL(article.readMoreLink)}>
              Leer Más (Fuente Externa)
            </Button>
          )}
        </CardContent>
      </Card>
    </ScrollView>
  );
}
