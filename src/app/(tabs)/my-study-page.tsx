import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const MyStudyScreen = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(13);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [memo, setMemo] = useState('');

  const handleAddTask = () => {
    if (!task) return;
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>내 스터디</Text>

      {/* 플래너 탭 */}
      <View style={styles.tabRow}>
        <Text style={[styles.tabText, styles.tabActive]}>플래너</Text>
        <Text style={styles.tabText}>통계</Text>
      </View>

      {/* 날짜 + D-day 뱃지 */}
      <View style={styles.dateHeader}>
        <Text style={styles.monthText}>5월</Text>
        <View style={styles.ddayBadge}>
          <Text style={styles.ddayText}>시험 D-4</Text>
        </View>
      </View>

      {/* 날짜 선택 */}
      <View style={styles.weekRow}>
        {[11, 12, 13, 14, 15, 16, 17].map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayBox,
              selectedDate === day && styles.daySelectedBox,
            ]}
            onPress={() => setSelectedDate(day)}
          >
            <Text
              style={[
                styles.dayText,
                selectedDate === day && styles.daySelectedText,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 체크리스트 */}
      <Text style={styles.sectionTitle}>체크리스트</Text>
      <View style={styles.taskInputRow}>
        <TextInput
          style={styles.taskInput}
          placeholder="할 일을 입력하세요"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addBtn} onPress={handleAddTask}>
          <Text style={styles.addText}>＋ 추가</Text>
        </TouchableOpacity>
      </View>
      {tasks.map((t, i) => (
        <Text key={i} style={styles.taskItem}>
          • {t}
        </Text>
      ))}

      {/* 메모 */}
      <Text style={styles.sectionTitle}>메모</Text>
      <TextInput
        style={styles.memoBox}
        placeholder="메모"
        value={memo}
        onChangeText={setMemo}
        multiline
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  tabRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 16,
  },
  tabText: {
    fontSize: 16,
    color: '#888',
    marginRight: 16,
    paddingBottom: 6,
  },
  tabActive: {
    color: '#000',
    fontWeight: '600',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  dateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  monthText: {
    fontSize: 20,
    fontWeight: '600',
  },
  ddayBadge: {
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  ddayText: {
    color: '#EF5350',
    fontSize: 12,
    fontWeight: '600',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  dayBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  daySelectedBox: {
    borderColor: '#2196F3',
    borderWidth: 2,
  },
  dayText: {
    fontSize: 14,
    color: '#333',
  },
  daySelectedText: {
    color: '#2196F3',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  taskInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  taskInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 14,
  },
  addBtn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  addText: {
    color: '#2196F3',
    fontWeight: '600',
  },
  taskItem: {
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 4,
    color: '#555',
  },
  memoBox: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    textAlignVertical: 'top',
  },
});

export default MyStudyScreen;
