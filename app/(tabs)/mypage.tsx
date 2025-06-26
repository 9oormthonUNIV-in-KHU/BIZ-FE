import { Ionicons } from '@expo/vector-icons';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function MyPage() {
  return (
    <View style={styles.container}>
      {/* 상단 타이틀 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>마이페이지</Text>
      </View>

      {/* 유저 정보 */}
      <TouchableOpacity style={styles.userBox}>
        <View style={styles.avatar} />
        <Text style={styles.nickname}>닉네임</Text>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>

      {/* 메뉴 항목들 */}
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>내 계정 관리</Text>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>이용약관 동의</Text>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfbf7',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: { // 연보라색 라인
    paddingBottom: 12,
    marginBottom: 20,
  },
  headerText: {
    color: "#222221",
    fontFamily: "NanumSquareNeo",
    fontSize: screenWidth * 0.07,
    fontWeight: "200",
    lineHeight: 50,
    letterSpacing: -0.45,
  },
  userBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  nickname: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  menuText: {
    fontSize: 15,
  },
});
