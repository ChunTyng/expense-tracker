import { TCustomButton } from '@/components/types/types';
import * as theme from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Loading from './Loading';

const Button = ({
  style,
  onPress,
  loading = false,
  children,
}: TCustomButton) => {
  if (loading) {
    return (
      <View style={[styles.button, style, { backgroundColor: 'transparent' }]}>
        <Loading />
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius._17,
    borderCurve: 'continuous',
    height: verticalScale(52),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
