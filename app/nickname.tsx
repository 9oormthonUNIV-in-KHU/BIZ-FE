import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function NicknameScreen() {
  const [nickname, setNickname] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#222221" />
        </TouchableOpacity>
        <Text style={styles.title}>닉네임</Text>
      </View>

      {/* 입력 */}
      <TextInput
        style={styles.input}
        placeholder="닉네임을 입력해주세요"
        value={nickname}
        onChangeText={setNickname}
        placeholderTextColor="#999"
      />

      {/* 버튼 */}
      <TouchableOpacity
        style={[
          styles.button,
          nickname ? styles.buttonActive : styles.buttonDisabled,
        ]}
        disabled={!nickname}
        onPress={() => {
          router.replace("/(tabs)/home")
        }}
      >
        <Text style={styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfbf7",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    marginTop: 8,
    color: "#222221",
    fontFamily: "NanumSquareNeo",
    fontSize: 30,
    fontWeight: "400",
    lineHeight: 45,
    letterSpacing: -0.75,
  },
  input: {
    height: 48,
    backgroundColor: "#eeeeee",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonActive: {
    backgroundColor: "#222221",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
