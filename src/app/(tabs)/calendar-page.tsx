import { PRIMARY_COLOR } from '@/shared/styles/color.style';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState<string>('2025-05-17');

  const handleDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  const markedDates = {
    '2025-05-15': { selected: true, selectedColor: PRIMARY_COLOR },
    '2025-05-16': { selected: true, selectedColor: PRIMARY_COLOR },
    '2025-05-17': {
      selected: true,
      selectedColor: '#FFFFFF',
      selectedTextColor: PRIMARY_COLOR,
      customStyles: {
        container: {
          borderColor: PRIMARY_COLOR,
          borderWidth: 1.5,
          borderRadius: 16,
        },
        text: {
          color: '#000',
        },
      },
    },
    '2025-05-18': {
      marked: true,
      dots: [
        { key: 'apply', color: '#EF5350' },
        { key: 'exam', color: '#EF9A9A' },
      ],
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: 'flex',
        }}
      >
        <Text style={styles.yearText}>2025년</Text>
        <Text style={styles.monthText}>5월</Text>
      </View>

      <Calendar
        current={'2025-05-01'}
        onDayPress={handleDayPress}
        markingType={'custom'}
        markedDates={markedDates}
        theme={{
          calendarBackground: '#fff',
          todayTextColor: PRIMARY_COLOR,
          arrowColor: PRIMARY_COLOR,
          textDayFontWeight: '500',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '600',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
        style={styles.calendar}
      />

      {selectedDate === '2025-05-18' && (
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>접수일</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>시험</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  yearText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#999',
  },
  monthText: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
  },
  calendar: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
    paddingHorizontal: 4,
  },
  badge: {
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
  },
  badgeText: {
    color: '#E53935',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default CalendarScreen;
