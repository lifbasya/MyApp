import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  require("@/assets/images/image-0.png"),
  require("@/assets/images/image-1.png"),
  require("@/assets/images/image-2.png"),
  require("@/assets/images/image-3.png"),
];

export default function UpdateScreen() {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      {/* Bagian atas (AppBar dan form) */}
      <View style={styles.content}>
        <View style={styles.appBar}>
          <Ionicons name="arrow-back" size={24} style={{ color: "#FF5B13" }} />
          <Text style={styles.appBarTitle}>Update Note</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.inputTitle}
            placeholder="Note Title"
            selectionColor="#FF5B13"
          />
          <TextInput
            style={styles.inputContent}
            placeholder="Note Content"
            selectionColor="#FF5B13"
            textAlignVertical="top"
            multiline={true}
          />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 5 }}
          >
            {images.map((img, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.boxImage,
                  selectedImage === index && styles.imageSelected,
                ]}
                onPress={() => setSelectedImage(index)}
              >
                <Image style={styles.image} source={img} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Tombol di bawah */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1, // supaya isi di atas mengisi ruang dan tombol tetap di bawah
  },
  appBar: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginVertical: 16,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputTitle: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  inputContent: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    height: 150,
  },
  form: {
    padding: 10,
  },
  boxImage: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    padding: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageSelected: {
    borderColor: "#FF5B13",
    borderWidth: 1.5,
  },
  updateButton: {
    backgroundColor: "#FF5B13",
    padding: 12,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  updateText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
