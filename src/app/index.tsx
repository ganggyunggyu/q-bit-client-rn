import { BACKGROUND_COLOR, PRIMARY_COLOR, WHITE } from '@/styles/color';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function Index() {
  const [webviewPath, setWebviewPath] = React.useState('');

  const getTopBg = () => {
    if (webviewPath === '/start') return PRIMARY_COLOR;

    return BACKGROUND_COLOR;
  };

  const getBottomBg = () => {
    if (webviewPath === '/start') return PRIMARY_COLOR;

    if (webviewPath.includes('onboarding')) return BACKGROUND_COLOR;

    return WHITE;
  };
  const topBackgroundColor = getTopBg();
  const bottomBackgroundColor = getBottomBg();
  return (
    <View style={styles.container}>
      <SafeAreaView
        edges={['top']}
        style={{ backgroundColor: topBackgroundColor }}
      />
      <WebView
        style={styles.webView}
        source={{ uri: 'https://q-bit.shop' }}
        startInLoadingState
        javaScriptEnabled
        domStorageEnabled
      />
      <SafeAreaView
        edges={['bottom']}
        style={{ backgroundColor: bottomBackgroundColor }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});
