import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import Input from '@/components/Input';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import * as theme from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import { useRouter } from 'expo-router';
import * as Icons from 'phosphor-react-native';
import React, { useRef, useState } from 'react';
import { Alert, Pressable, StyleSheet, View } from 'react-native';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert('Login', 'Please fill all the fields');
      return;
    }
    console.log('email', emailRef.current);
    console.log('password', passwordRef.current);
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />

        <View style={{ gap: 5, marginTop: theme.spacingY._20 }}>
          <Typo size={30} fontWeight={'800'}>
            Hey,
          </Typo>
          <Typo size={30} fontWeight={'800'}>
            Welcome back
          </Typo>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Typo size={16} color={theme.colors.textLighter}>
            Login now to track all your expenses
          </Typo>
          <Input
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
            icon={
              <Icons.At
                size={verticalScale(26)}
                color={theme.colors.neutral300}
                weight="fill"
              />
            }
          />
          <Input
            placeholder="Enter your password"
            onChangeText={(value) => (passwordRef.current = value)}
            icon={
              <Icons.Lock
                size={verticalScale(26)}
                color={theme.colors.neutral300}
                weight="fill"
              />
            }
          />
          <Typo
            size={14}
            color={theme.colors.text}
            style={{ alignSelf: 'flex-end' }}
          >
            Forgot Password?
          </Typo>
          <Button onPress={handleSubmit} loading={isLoading}>
            <Typo fontWeight={'700'} color={theme.colors.black} size={21}>
              Login
            </Typo>
          </Button>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Typo size={15}>Don{"'"}t have an account?</Typo>
          <Pressable onPress={() => router.replace('/(auth)/register')}>
            <Typo size={15} fontWeight={'700'} color={theme.colors.primary}>
              Sign up
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: theme.spacingY._30,
    paddingHorizontal: theme.spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  form: {
    gap: theme.spacingY._20,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: '500',
    color: theme.colors.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: verticalScale(15),
  },
});
