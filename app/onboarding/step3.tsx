import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;

export default function Step3() {
  const navigation = useNavigation();

  const finishOnboarding = async () => {
    await AsyncStorage.setItem("onboardingCompleted", "true");

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "login" }], // 경로는 app/(auth)/login.tsx 파일 구조 기준
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressbar}>
        <View style={styles.bar}></View>
        <View style={styles.bar}></View>
        <View style={styles.bar}></View>
      </View>
      <View style={styles.titlebar}>
        <Text style={styles.titelbarText}>
          필요한 순간,{"\n"}
          가볍게 건네봐요.
        </Text>
      </View>
      <TouchableOpacity style={styles.nextbutton} onPress={finishOnboarding}>
        <Text style={styles.nextbuttonText}>시작하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F5",
  },
  progressbar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "5%",
    left: "6%",
    right: "6%",
    height: "10%",
  },
  bar: {
    width: "30%",
    height: 3,
    backgroundColor: "black",
    marginHorizontal: 3,
  },
  titlebar: {
    position: "absolute",
    top: "25%",
    left: "6%",
    right: "6%",
    height: "30%",
  },
  titelbarText: {
    fontSize: screenWidth * 0.09,
    color: "#222221",
    fontFamily: "NanumSquareNeo",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 45,
    letterSpacing: -0.75,
  },
  nextbutton: {
    position: "absolute",
    bottom: "10%",
    left: "6%",
    right: "6%",
    height: "10%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  nextbuttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
