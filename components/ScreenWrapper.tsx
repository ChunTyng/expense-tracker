import { TScreenWrapper } from '@/components/types/types';
import { colors } from '@/constants/theme';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({ style, children }: TScreenWrapper) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        { paddingTop: insets.top, flex: 1, backgroundColor: colors.neutral900 },
        style,
      ]}
    >
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
