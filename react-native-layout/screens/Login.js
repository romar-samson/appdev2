import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import loginImage from '../assets/images/login-image.png';

export default function Login() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>

        <Image source={loginImage} style={styles.image} />

        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Enter your credentials to access your account
        </Text>

        <View style={styles.card}>

          {/* Email */}
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={18} color="#6b7280" />
            <TextInput
              placeholder="Email address"
              placeholderTextColor="#9ca3af"
              style={styles.input}
            />
          </View>

          {/* Password */}
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={18} color="#6b7280" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#9ca3af"
              secureTextEntry
              style={styles.input}
            />
          </View>

          {/* Button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.footerText}>
          Don’t have an account? <Text style={styles.link}>Sign up</Text>
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#111827',
  },
  subtitle: {
    textAlign: 'center',
    color: '#6b7280',
    marginTop: 6,
    marginBottom: 28,
    fontSize: 14,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#f9fafb',
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#111827',
  },
  button: {
    backgroundColor: '#111827',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 24,
    color: '#6b7280',
    fontSize: 13,
  },
  link: {
    color: '#111827',
    fontWeight: '600',
  },
});
