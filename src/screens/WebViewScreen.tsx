import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text
          style={styles.title}
          accessibilityRole="header"
          accessibilityLabel="컨텐츠 페이지"
        >
          컨텐츠
        </Text>
      </View>
      <View style={[styles.webviewContainer, { width, height: height - 60 }]}>
        <WebView
          source={{ uri: 'https://www.tistory.com/' }}
          style={styles.webview}
          javaScriptEnabled
          scalesPageToFit
          startInLoadingState
          allowsFullscreenVideo
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  webviewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
