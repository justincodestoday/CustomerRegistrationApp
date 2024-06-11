import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

const EditCustomerScreen = ({route, navigation}) => {
  const {customer} = route.params;
  const [icNumber, setIcNumber] = useState(customer.icNumber);
  const [address, setAddress] = useState(customer.address);

  const isValidICNumber = icNumber => /^[0-9]{1,12}$/.test(icNumber);

  const handleEdit = () => {
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
        <Text style={styles.label}>
          Customer Name: <Text style={styles.value}>{customer.name}</Text>
        </Text>
        <Text style={styles.label}>
          DOB: <Text style={styles.value}>{customer.dob}</Text>
        </Text>
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
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.editButtonText}>Save</Text>
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
  value: {
    fontWeight: 'normal',
  },
  input: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  addressInput: {
    minHeight: 60,
    textAlignVertical: 'top',
  },
  footer: {
    padding: 20,
  },
  editButton: {
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default EditCustomerScreen;
