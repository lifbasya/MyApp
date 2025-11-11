import { notes } from "@/data/notesdata";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const note = notes.find((n) => n.id === Number(id));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} style={{ color: "#FF5B13" }} />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Note Details</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.fullContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={note?.image as any}
              style={{ width: 220, height: 220 }}
            />
          </View>
          <View style={styles.content}>
            <View style={{ flexDirection: "column", gap: 4 }}>
              <Text style={styles.title}>{note?.title}</Text>
              <Text style={styles.date}>{note?.date}</Text>
            </View>
            <Text style={styles.desc}>{note?.description}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
         
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  appBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginBottom: 16,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  fullContainer: {
    flexDirection: "column",
    gap: 16,
  },
  imgContainer: {
    width: "100%",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  date: {
    opacity: 0.4,
    fontSize: 12,
  },
  desc: {
    textAlign: "justify",
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 0,
    gap: 10,
    marginBottom: 10,
  },
  updateButton: {
    flex: 1,
    backgroundColor: "#FF5B13",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#FF0000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
