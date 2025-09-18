import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

export default function AdScreen() {
  const [adId, setAdId] = useState<string | null>(null);

  useEffect(() => {
    DeviceInfo.getUniqueId()
      .then((id: string) => setAdId(id))
      .catch(() => setAdId('권한 거부 또는 지원 안됨'));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>광고 ID</Text>
      {Platform.OS === 'ios' ? (
        <View style={styles.adUnitBox}>
          <Text style={styles.adUnitLabel}>iOS 광고 단위 ID:</Text>
          <Text style={styles.adUnitValue}>
            ca-app-pub-1875469413982562/4070571826
          </Text>
        </View>
      ) : (
        <View style={styles.adUnitBox}>
          <Text style={styles.adUnitLabel}>Android 광고 단위 ID:</Text>
          <Text style={styles.adUnitValue}>
            ca-app-pub-1875469413982562/6637326738
          </Text>
        </View>
      )}
      <Text style={styles.id}>
        {adId
          ? Platform.OS === 'ios'
            ? 'iOS입니다'
            : 'Android입니다'
          : '로딩 중...'}
      </Text>
      <Text style={styles.info}>
        앱 광고 ID는 개인정보 보호 정책에 따라 안전하게 관리됩니다.
      </Text>
      <View style={styles.bannerContainer}>
        <BannerAd
          unitId={
            __DEV__
              ? TestIds.BANNER // 개발 환경
              : Platform.OS === 'ios'
              ? 'ca-app-pub-1875469413982562/4070571826' // iOS 배포용
              : 'ca-app-pub-1875469413982562/6637326738' // Android 배포용
          }
          size={BannerAdSize.ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  adUnitBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  adUnitLabel: {
    fontSize: 13,
    color: '#555',
    fontWeight: 'bold',
    marginRight: 6,
  },
  adUnitValue: {
    fontSize: 13,
    color: '#007AFF',
    fontFamily: 'monospace',
  },
  id: { fontSize: 16, color: '#333', marginBottom: 8 },
  info: { fontSize: 12, color: '#888', textAlign: 'center', marginBottom: 16 },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
