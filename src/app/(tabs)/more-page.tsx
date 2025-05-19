import React, { useState } from 'react';
import {
  LayoutAnimation,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MoreScreen = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>로그인해주세요</Text>
      </TouchableOpacity>

      {/* Accordion Section */}
      {['기본정보', '고객지원'].map((section) => (
        <View key={section} style={styles.accordionBox}>
          <TouchableOpacity
            onPress={() => toggleSection(section)}
            style={styles.accordionHeader}
          >
            <Text style={styles.accordionTitle}>{section}</Text>
            <Text>{expandedSection === section ? '▲' : '▼'}</Text>
          </TouchableOpacity>
          {expandedSection === section && (
            <View style={styles.accordionContent}>
              <Text style={styles.accordionItem}>· {section} 내용 1</Text>
              <Text style={styles.accordionItem}>· {section} 내용 2</Text>
            </View>
          )}
        </View>
      ))}

      {/* Fixed Menu List */}
      {['공지사항', '이용약관', '개인정보처리방침', '오픈소스 라이선스'].map(
        (item) => (
          <TouchableOpacity key={item} style={styles.menuBox}>
            <Text style={styles.menuText}>{item}</Text>
            <Text>{'>'}</Text>
          </TouchableOpacity>
        ),
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  loginButton: {
    borderColor: '#2196F3',
    borderWidth: 1.5,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginText: {
    color: '#2196F3',
    fontWeight: '600',
    fontSize: 16,
  },
  accordionBox: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
    elevation: 1,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  accordionContent: {
    marginTop: 10,
    paddingLeft: 8,
  },
  accordionItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  menuBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default MoreScreen;
