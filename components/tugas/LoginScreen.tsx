import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Login
      </Text>
      <View
        style={{
          width: "80%",
          padding: 20,
          borderRadius: 10,
          backgroundColor: "white",
        }}
      >
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 15, marginBottom: 5 }}>Email</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 5,
              padding: 8,
              marginTop: 5,
            }}
          >
            Masukkan email
          </TextInput>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 15, marginBottom: 5 }}>Password</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 5,
              padding: 8,
              marginTop: 5,
            }}
          >
            Masukkan password
          </TextInput>
        </View>
        <Button title="Login"></Button>
      </View>
    </View>
  );
}
