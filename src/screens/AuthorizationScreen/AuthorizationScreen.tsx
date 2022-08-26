import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '~assets';
import {Login} from './Login';
import {Registration} from './Registration';

export const AuthorizationScreen = () => {
  const [activeTab, setActiveTab] = useState('Login');

  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Authorization</Text>
          <View style={styles.tabs}>
            <TouchableOpacity
              style={activeTab === 'Login' ? styles.activeTab : styles.tab}
              onPress={() => setActiveTab('Login')}>
              <Text
                style={
                  activeTab === 'Login'
                    ? styles.activeTabTitle
                    : styles.tabTitle
                }>
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                activeTab === 'Registration' ? styles.activeTab : styles.tab
              }
              onPress={() => setActiveTab('Registration')}>
              <Text
                style={
                  activeTab === 'Registration'
                    ? styles.activeTabTitle
                    : styles.tabTitle
                }>
                Registration
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          {activeTab === 'Login' && <Login />}

          {activeTab === 'Registration' && <Registration />}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },

  header: {
    width: '100%',
    fontFamily: 'SF UI Text',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },

  title: {
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    paddingTop: 22,
    paddingBottom: 28,
    color: COLORS.black,
  },

  tabs: {
    flexDirection: 'row',
    fontSize: 13,
    lineHeight: 16,
  },

  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
  },

  activeTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.lightBlue,
    paddingBottom: 16,
  },

  tabTitle: {
    color: COLORS.lightGray,
  },

  activeTabTitle: {color: COLORS.lightBlue},
});
