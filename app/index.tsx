import { Text, View, TextInput } from "react-native";

export default function Index() {
  return (
    <View>
      {/* belahar text */}
      <Text>Hello Alif Basya</Text>

      {/* belajar text input */}
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          marginHorizontal: 20,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
}
