import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
  {
    id: 1,
    image: require("@/assets/images/image-0.png"),
    title: "Belajar React Native",
    description: "Mempelajari dasar-dasar React Native",
    date: "2023-10-01",
  },
  {
    id: 2,
    image: require("@/assets/images/image-1.png"),
    title: "Membuat Aplikasi Catatan",
    description: "Membangun aplikasi catatan sederhana",
    date: "2023-10-02",
  },
  {
    id: 3,
    image: require("@/assets/images/image-2.png"),
    title: "Menggunakan Expo",
    description: "Memahami cara kerja Expo dalam pengembangan aplikasi",
    date: "2023-10-03",
  },
  {
    id: 4,
    image: require("@/assets/images/image-3.png"),
    title: "Deploy Aplikasi",
    description: "Mempelajari cara deploy aplikasi ke App Store dan Play Store",
    date: "2023-10-04",
  },
  {
    id: 5,
    image: require("@/assets/images/image-3.png"),
    title: "Deploy Aplikasi",
    description: "Mempelajari cara deploy aplikasi ke App Store dan Play Store",
    date: "2023-10-04",
  },
  {
    id: 6,
    image: require("@/assets/images/image-3.png"),
    title: "Deploy Aplikasi",
    description: "Mempelajari cara deploy aplikasi ke App Store dan Play Store",
    date: "2023-10-04",
  },
  {
    id: 7,
    image: require("@/assets/images/image-3.png"),
    title: "Deploy Aplikasi",
    description: "Mempelajari cara deploy aplikasi ke App Store dan Play Store",
    date: "2023-10-04",
  },
  {
    id: 8,
    image: require("@/assets/images/image-3.png"),
    title: "Deploy Aplikasi",
    description: "Mempelajari cara deploy aplikasi ke App Store dan Play Store",
    date: "2023-10-04",
  },
];

type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  description: string;
  date: string;
};