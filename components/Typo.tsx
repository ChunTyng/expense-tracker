import { TTypo } from '@/components/types/types';
import { colors } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import React from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';

const Typo = ({
  color = colors.text,
  fontWeight = '400',
  size,
  children,
  style,
  textProps = {},
}: TTypo) => {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };
  return (
    <View>
      <Text style={[textStyle, style]} {...textProps}>
        {children}
      </Text>
    </View>
  );
};

export default Typo;

const styles = StyleSheet.create({});
