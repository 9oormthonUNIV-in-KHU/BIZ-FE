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

export default function LoginScreen() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* 헤더 영역 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#222221" />
        </TouchableOpacity>
        <Text style={styles.title}>로그인</Text>
      </View>

      {/* 입력창 영역 */}
      <TextInput
        style={styles.input}
        placeholder="아이디를 입력해주세요"
        placeholderTextColor="#999"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력해주세요"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* 로그인 버튼 */}
      <TouchableOpacity
        style={[
          styles.loginButton,
          id && password ? styles.loginButtonActive : styles.loginButtonDisabled,
        ]}
        disabled={!(id && password)}
      >
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>

      {/* 하단 링크 */}
      <View style={styles.bottomLinks}>
        <Text style={styles.link}>비밀번호 찾기</Text>
        <Text style={styles.linkDivider}> | </Text>
        <Text style={styles.link} onPress={()=>{router.push("/signup")}}>회원가입</Text>
      </View>
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
    fontFamily: "NanumSquareNeo", // 폰트 적용 시
    fontSize: 30,
    fontStyle: "normal",
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
  loginButton: {
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  loginButtonActive: {
    backgroundColor: "#222221",
  },
  loginButtonDisabled: {
    backgroundColor: "#ccc",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
  bottomLinks: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  link: {
    color: "#888",
    fontSize: 14,
  },
  linkDivider: {
    marginHorizontal: 8,
    color: "#aaa",
  },
});
