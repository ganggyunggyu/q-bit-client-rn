import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const certificates = [
  {
    id: 1,
    title: '자격증 이름',
    agency: '시행기관',
    tag: '공인민간자격증',
    dday: 12,
  },
  {
    id: 2,
    title: '자격증 이름',
    agency: '시행기관',
    tag: '공인민간자격증',
    dday: 12,
  },
];

const MyCertificatesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>내 자격증</Text>

      <View style={styles.tabRow}>
        <Text style={[styles.tabText, styles.activeTab]}>리마인드</Text>
        <Text style={styles.tabText}>찜</Text>
      </View>

      {certificates.map((cert) => (
        <View key={cert.id} style={styles.card}>
          <Text style={styles.cardTitle}>{cert.title}</Text>
          <Text style={styles.cardAgency}>{cert.agency}</Text>

          <View style={styles.tag}>
            <Text style={styles.tagText}>{cert.tag}</Text>
          </View>

          <View style={styles.ddayBox}>
            <Text style={styles.ddayLabel}>시험까지</Text>
            <Text style={styles.ddayValue}>D-{cert.dday}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tabText: {
    fontSize: 16,
    color: '#999',
    marginRight: 20,
    paddingBottom: 6,
  },
  activeTab: {
    color: '#000',
    fontWeight: '600',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardAgency: {
    fontSize: 13,
    color: '#777',
    marginBottom: 8,
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0F2F1',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 12,
  },
  tagText: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: '600',
  },
  ddayBox: {
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ddayLabel: {
    fontSize: 13,
    color: '#555',
  },
  ddayValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1976D2',
  },
});

export default MyCertificatesScreen;
