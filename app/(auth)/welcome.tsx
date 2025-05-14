import Button from '@/components/Button';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import * as theme from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { Shadow } from 'react-native-shadow-2';

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* sign In & image */}
        <View>
          <TouchableOpacity
            onPress={() => router.push('/(auth)/login')}
            style={styles.loginButton}
          >
            <Typo fontWeight={'500'}>Sign in</Typo>
          </TouchableOpacity>

          <Animated.Image
            entering={FadeIn.duration(500)}
            source={require('../../assets/images/welcome.png')}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>

        {/* footer */}
        <Shadow
          distance={5}
          startColor={'#ffffff'}
          offset={[1, -1]}
          paintInside={false}
        >
          <View style={styles.footer}>
            <Animated.View
              entering={FadeInDown.duration(500).springify().damping(12)}
              style={{ alignItems: 'center' }}
            >
              <Typo
                size={30}
                fontWeight={'800'}
                style={{ textAlign: 'center' }}
              >
                Always take control of your finances
              </Typo>
            </Animated.View>

            <Animated.View
              entering={FadeInDown.duration(1000)
                .delay(300)
                .springify()
                .damping(12)}
              style={{ alignItems: 'center' }}
            >
              <Typo
                size={17}
                color={theme.colors.textLight}
                style={{ textAlign: 'center' }}
              >
                Fiances must be arranged to set a better lifestyle in future
              </Typo>
            </Animated.View>

            <Animated.View
              entering={FadeInDown.duration(1000)
                .delay(500)
                .springify()
                .damping(12)}
              style={styles.buttonContainer}
            >
              <Button onPress={() => router.push('/(auth)/register')}>
                <Typo
                  size={22}
                  color={theme.colors.neutral900}
                  fontWeight={'600'}
                >
                  Get Started
                </Typo>
              </Button>
            </Animated.View>
          </View>
        </Shadow>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: theme.spacingY._7,
  },
  welcomeImage: {
    width: '100%',
    height: verticalScale(300),
    alignSelf: 'center',
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: 'flex-end',
    marginRight: theme.spacingX._20,
  },
  footer: {
    backgroundColor: theme.colors.neutral900,
    alignItems: 'center',
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    paddingHorizontal: theme.spacingX._20,
    gap: theme.spacingY._20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: theme.spacingX._25,
  },
});
