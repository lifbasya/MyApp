import { notes } from "@/data/notesdata";
import { Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  description: string;
  date: string;
};

const NoteItem = ({ item }: { item: Note }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push(`/detail/${item.id}`)}>
      <Image source={item.image} style={{ width: 85, height: 85 }} />
      <View style={styles.cardContainer}>
        <View
          style={{
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 4,
              justifyContent: "center",
            }}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
          </View>
          <Text style={styles.cardDate}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/notes-logo.png")}
          style={{ width: 40, height: 40 }}
        />
        <View style={{ gap: 4, flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.kodeinteks}>Kodein</Text>
          <Text style={styles.notesteks}>Notes</Text>
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 5, flexGrow: 1 }}
          ListEmptyComponent={() => <EmptyData />}
        />
      </View>
      <TouchableOpacity style={styles.fab} onPress={() => router.push("/add")}>
        <Ionicons name="add" size={32} style={{ color: "white" }} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const EmptyData = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        source={require("@/assets/images/big-image.png")}
        style={{ width: 160, height: 160 }}
      />
      <Text style={styles.emptyTitle}>Add your first note</Text>
      <Text style={styles.emptyDesc}>
        Save your thoughts, tasks or inspirations
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  content: {
    flex: 1,
  },
  kodeinteks: {
    fontSize: 20,
    fontWeight: 700,
  },
  notesteks: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FF5B13",
  },
  fab: {
    backgroundColor: "#FF5B13",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    position: "absolute",
    right: 25,
    bottom: 60,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: "#000000ff",
    borderWidth: 1,
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
  cardDesc: {},
  cardDate: {
    fontSize: 12,
    opacity: 0.5,
    fontWeight: 500,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
  emptyDesc: {
    fontSize: 16,
    opacity: 0.6,
    fontWeight: 500,
  },
});
