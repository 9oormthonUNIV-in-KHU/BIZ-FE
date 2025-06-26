import { Entypo, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

const screenWidth = Dimensions.get("window").width;

const sampleCards = [
  { id: '1', name: '홍길동', image: null },
  { id: '2', name: '김승원', image: null },
  { id: '3', name: '이승원', image: null },
  { id: '4', name: '정승원', image: null },
];

export default function HomeHeader() {
  const [menuVisibleId, setMenuVisibleId] = useState(null);
  const [plusMenuVisible, setPlusMenuVisible] = useState(false);

  const toggleCardMenu = (id: any) => {
    setMenuVisibleId(menuVisibleId === id ? null : id);
  };

  const closeMenus = () => {
    setPlusMenuVisible(false);
    setMenuVisibleId(null);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      {/* 배경 터치 시 메뉴 닫기 */}
      {(menuVisibleId || plusMenuVisible) && (
        <TouchableWithoutFeedback onPress={closeMenus}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* 상단 헤더 */}
      <View style={styles.topBar}>
        <Text style={styles.title}>홈</Text>
        <TouchableOpacity onPress={() => setPlusMenuVisible(!plusMenuVisible)}>
          <Ionicons name="add" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* 드롭다운 */}
      {plusMenuVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>명함 템플릿 제작</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>사진 업로드</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 유저 닉네임 */}
      <View style={styles.profileRow}>
        <View style={styles.avatar} />
        <Text style={styles.nickname}>닉네임</Text>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </View>

      {/* 명함 리스트 */}
      <FlatList
        data={sampleCards}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingBottom: 40 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.cardMenu}
              onPress={() => toggleCardMenu(item.id)}
            >
              <Entypo name="dots-three-vertical" size={22} color="gray" />
            </TouchableOpacity>

            {menuVisibleId === item.id && (
              <View style={styles.cardDropdown}>
                <Text style={{ marginBottom: 10 }}>공유하기</Text>
                <Text style={{ marginBottom: 10 }}>URL 복사</Text>
                <Text style={{ marginBottom: 10 }}>QR로 공유</Text>
                <Text style={{ marginBottom: 10 }}>블루투스로 공유</Text>
                <Text style={{ color: 'red' }}>삭제</Text>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfbf7',
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    zIndex: 2,
  },
  title: {
    color: "#222221",
    fontFamily: "NanumSquareNeo",
    fontSize: screenWidth * 0.07,
    fontWeight: "200",
    lineHeight: 50,
    letterSpacing: -0.45,
  },
  dropdown: {
    position: 'absolute',
    top: 100,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 8,
    elevation: 3,
    zIndex: 3,
  },
  dropdownItem: {
    paddingVertical: 6,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
    zIndex: 1,
  },
  avatar: {
    width: 30,
    height: 30,
    backgroundColor: '#ccc',
    borderRadius: 15,
  },
  nickname: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  card: {
    height: 200,
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 12,
    justifyContent: 'center',
  },
  cardMenu: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  cardDropdown: {
    position: 'absolute',
    top: 28,
    right: 8,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 6,
    elevation: 3,
    zIndex: 99,
  },
});
