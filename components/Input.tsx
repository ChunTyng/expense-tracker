import * as theme from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { TInput } from './types/types';

const Input = (props: TInput) => {
  return (
    <View style={[styles.container, props.containerStyle && props]}>
      {props.icon && props.icon}
      <TextInput
        style={[styles.input, props.inputStyle]}
        placeholderTextColor={theme.colors.neutral400}
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(54),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.neutral300,
    borderRadius: theme.radius._17,
    borderCurve: 'continuous',
    paddingHorizontal: theme.spacingX._15,
    gap: theme.spacingX._10,
  },
  input: {
    flex: 1,
    color: theme.colors.white,
    fontSize: verticalScale(14),
  },
});
