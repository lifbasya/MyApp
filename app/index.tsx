import { Text, View, TextInput } from "react-native";

export default function Index() {
  return (
    <View>
      {/* belahar text */}
      <Text style={{
        fontSize: 18,
        marginHorizontal: 20,
        marginVertical: 10,
      }}>Aplikasi data diri saya</Text>

      <Text style={{
        fontSize: 15,
        marginHorizontal: 20,
      }}>Nama:</Text>

      {/* belajar text input */}
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          marginHorizontal: 20,
          marginVertical: 10,
        }}
        defaultValue="Alif Attallah Basya"
      />

      <Text style={{
        fontSize: 15,
        marginHorizontal: 20,
      }}>Kelas:</Text>

      {/* belajar text input */}
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          marginHorizontal: 20,
          marginVertical: 10,
        }}
        defaultValue="Kelas 11"
      />

      <Text style={{
        fontSize: 15,
        marginHorizontal: 20,
      }}>Hobi:</Text>

      {/* belajar text input */}
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          marginHorizontal: 20,
          marginVertical: 10,
        }}
        defaultValue="Bermain Sepak Bola"
      />

      <Text style={{
        fontSize: 15,
        marginHorizontal: 20,
      }}>Terima kasih sudah mengisi data!</Text>
    </View>
  );
}
