import { View, Text, Image, ScrollView, TextInput } from "react-native";
import Pessoa from "./Pessoa";

export default function App() {
  return (
    <ScrollView>
      <Text>
        ~{"\n\n\n"}
        Turma IGTI
      </Text>
      <View>
        <Text>Desenvolvedor Mobile</Text>
        <Image
          source={{ uri: "https://avatars.githubusercontent.com/u/73677991?v=4" }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        defaultValue="Insira um texto"
      />
      <Pessoa nome="Tiago Lemes" />
    </ScrollView>
  );
}
