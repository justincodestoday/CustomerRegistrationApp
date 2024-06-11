import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

const RegisterCustomerScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [icNumber, setIcNumber] = useState('');
  const [address, setAddress] = useState('');

  const isValidName = name => /^[A-Za-z\s]+$/.test(name);
  const isValidDay = day =>
    /^\d{1,2}$/.test(day) && parseInt(day, 10) >= 1 && parseInt(day, 10) <= 31;
  const isValidMonth = month =>
    /^\d{1,2}$/.test(month) &&
    parseInt(month, 10) >= 1 &&
    parseInt(month, 10) <= 12;
  const isValidYear = year =>
    /^\d{4}$/.test(year) && parseInt(year, 10) <= new Date().getFullYear() - 18;
  const isValidICNumber = icNumber => /^[0-9]{1,12}$/.test(icNumber);

  const handleRegister = () => {
    if (!isValidName(name)) {
      Alert.alert('Invalid Name', 'Customer name should only contain letters.');
      return;
    }

    if (!isValidDay(day) || !isValidMonth(month) || !isValidYear(year)) {
      Alert.alert(
        'Invalid DOB',
        'Please enter a valid date of birth. Customer must be over 18 years old.',
      );
      return;
    }

    if (!isValidICNumber(icNumber)) {
      Alert.alert(
        'Invalid IC Number',
        'IC Number should be numeric and up to 12 digits.',
      );
      return;
    }

    if (address.length > 100) {
      Alert.alert(
        'Invalid Address',
        'Address should be at most 100 characters long.',
      );
      return;
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.label}>Customer Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <Text style={styles.label}>Date of Birth (YYYY-MM-DD):</Text>
        <View style={styles.dobContainer}>
          <TextInput
            style={[styles.input, styles.dobInput]}
            value={year}
            onChangeText={setYear}
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
          />
          <TextInput
            style={[styles.input, styles.dobInput]}
            value={month}
            onChangeText={setMonth}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
          />
          <TextInput
            style={[styles.input, styles.dobInput]}
            value={day}
            onChangeText={setDay}
            placeholder="DD"
            keyboardType="numeric"
            maxLength={2}
          />
        </View>

        <Text style={styles.label}>IC Number:</Text>
        <TextInput
          style={styles.input}
          value={icNumber}
          onChangeText={setIcNumber}
          keyboardType="numeric"
          maxLength={12}
        />

        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={[styles.input, styles.addressInput]}
          value={address}
          onChangeText={setAddress}
          multiline={true}
          maxLength={100}
        />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  scrollView: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: '#374151',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dobInput: {
    flex: 1,
    marginRight: 10,
  },
  addressInput: {
    minHeight: 60,
    textAlignVertical: 'top',
  },
  footer: {
    padding: 20,
  },
  registerButton: {
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default RegisterCustomerScreen;
