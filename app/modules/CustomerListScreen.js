import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import customers from '../models/customers.json';

const CustomerListScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={customers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={[styles.card, styles.shadowProp]}>
            <Text style={styles.label}>
              Name: <Text style={styles.value}>{item.name}</Text>
            </Text>
            <Text style={styles.label}>
              DOB: <Text style={styles.value}>{item.dob}</Text>
            </Text>
            <Text style={styles.label}>
              IC Number: <Text style={styles.value}>{item.icNumber}</Text>
            </Text>
            <Text style={styles.label}>
              Register Date:{' '}
              <Text style={styles.value}>{item.registerDate}</Text>
            </Text>
            <Text style={styles.label}>
              Address: <Text style={styles.value}>{item.address}</Text>
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => navigation.navigate('EditCustomerScreen')}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>

              {/* <Button
                title="Edit"
                onPress={() =>
                  navigation.navigate('EditCustomerScreen', {customer: item})
                }
                color="#1c64f2"
              /> */}
            </View>
          </View>
        )}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('RegisterCustomerScreen')}>
          <Text style={styles.registerButtonText}>Register New Customer</Text>
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
  card: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  value: {
    fontWeight: 'normal',
  },
  buttonContainer: {
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#1c64f2',
    padding: 10,
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
  shadowProp: {
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  footer: {
    padding: 20,
    backgroundColor: '#f3f4f6',
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

export default CustomerListScreen;
