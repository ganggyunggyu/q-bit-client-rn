import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeScreen = () => {
  const categories = [
    '사업관리',
    '경영, 회계',
    '교육',
    '보건',
    '사무',
    '사회과학',
    '문화, 예술',
    '법률',
    '경찰',
    '소방',
    '경제',
    '더보기',
  ];

  const popularCerts = [
    '컴퓨터활용능력',
    '정보처리기사',
    '산업안전기사',
    '전자상거래관리사',
    '세무회계 자격증',
  ];

  const upcomingCerts = [
    { name: '삼림어업자격증', dday: 7 },
    { name: '임상병리사', dday: 2 },
    { name: '사회복지사', dday: 1 },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Qbit</Text>
        <Ionicons name="notifications-outline" size={24} color="#555" />
      </View>

      {/* Search */}
      <TextInput
        style={styles.search}
        placeholder="찾고있는 자격증을 검색해보세요."
        placeholderTextColor="#999"
      />

      {/* 카테고리 */}
      <View style={styles.categoryGrid}>
        {categories.map((name, idx) => (
          <TouchableOpacity key={idx} style={styles.categoryBtn}>
            <Ionicons name="folder-open" size={24} color="#1976D2" />
            <Text style={styles.categoryText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 인기 자격증 */}
      <Text style={styles.sectionTitle}>
        <Text style={{ color: '#2196F3', fontWeight: '600' }}>20대</Text>에게
        가장 인기 많은 자격증
      </Text>
      {popularCerts.map((cert, i) => (
        <View key={i} style={styles.popularItem}>
          <Text style={styles.popularRank}>{i + 1}.</Text>
          <Text style={i === 0 ? styles.popularTop : styles.popularText}>
            {cert}
          </Text>
        </View>
      ))}

      {/* 접수 임박 */}
      <Text style={styles.sectionTitle}>접수까지 일주일!</Text>
      {upcomingCerts.map((c, i) => (
        <View key={i} style={styles.ddayItem}>
          <Text style={styles.ddayName}>{c.name}</Text>
          <Text style={styles.ddayText}>D-{c.dday}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1976D2',
  },
  search: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D0D7DE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 20,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  categoryBtn: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
    color: '#444',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 12,
  },
  popularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  popularRank: {
    fontSize: 14,
    width: 20,
    fontWeight: '600',
    color: '#666',
  },
  popularTop: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1976D2',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    fontSize: 14,
    color: '#333',
  },
  ddayItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E3F2FD',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  ddayName: {
    fontSize: 14,
    color: '#333',
  },
  ddayText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1565C0',
  },
});

export default HomeScreen;
