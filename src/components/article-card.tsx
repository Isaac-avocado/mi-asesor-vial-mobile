import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Espera un prop article con los campos: slug, title, shortDescription, category, imageUrl, favoriteCount
export default function ArticleCard({ article }: { article: any }) {
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
    <Card style={tw`overflow-hidden shadow-lg`}>
      <CardHeader style={tw`p-0`}>
        <Image
          source={{ uri: article.imageUrl }}
          style={tw`w-full h-40`}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={handleFavoriteClick}
          style={tw`absolute top-2 right-2 bg-white/80 rounded-full p-2`}
        >
          <Text style={tw`text-xl`}>{isFavorite ? "❤️" : "🤍"}</Text>
        </TouchableOpacity>
      </CardHeader>
      <CardContent style={tw`p-4`}>
        <View style={tw`mb-2 flex-row justify-between items-center`}>
          <Badge variant="secondary">{article.category}</Badge>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`mr-1`}>{isFavorite ? "❤️" : "🤍"}</Text>
            <Text>{favoriteCount}</Text>
          </View>
        </View>
        <Text style={tw`text-xl font-bold mb-2`}>{article.title}</Text>
        <Text style={tw`text-sm text-gray-600 mb-2`}>
          {article.shortDescription}
        </Text>
        <Button style={tw`w-full`}>Ver Detalles</Button>
      </CardContent>
    </Card>
  );
}
