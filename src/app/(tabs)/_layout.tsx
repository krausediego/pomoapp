/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import { AuthProvider } from '@/contexts';
import { darkTheme } from '@/styles/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Device from 'expo-device';
import * as NavigationBar from 'expo-navigation-bar';
import { Tabs } from 'expo-router';

import * as S from './styles';

if (Device.osName === 'Android') {
  NavigationBar.setBackgroundColorAsync(darkTheme.background);
}

const AuthLayout: React.FC = () => {
  return (
    <AuthProvider>
      <S.Container>
        <S.TabsStyle>
          <Tabs.Screen
            name="pomodoro"
            options={{
              tabBarIcon: ({ size, color, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? 'clock-time-five' : 'clock-time-five-outline'}
                  size={size}
                  color={color}
                />
              ),
              title: 'Pomodoro',
            }}
          />
          <Tabs.Screen
            name="manager"
            options={{
              tabBarIcon: ({ size, color, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
                  size={size}
                  color={color}
                />
              ),
              title: 'Gerenciar',
            }}
          />
          <Tabs.Screen
            name="calendar"
            options={{
              tabBarIcon: ({ size, color, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? 'calendar-month' : 'calendar-month-outline'}
                  size={size}
                  color={color}
                />
              ),
              title: 'Calendário',
            }}
          />
          <Tabs.Screen
            name="report"
            options={{
              tabBarIcon: ({ size, color, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? 'chart-box' : 'chart-box-outline'}
                  size={size}
                  color={color}
                />
              ),
              title: 'Relatório',
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              tabBarIcon: ({ size, color, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? 'cog' : 'cog-outline'}
                  size={size}
                  color={color}
                />
              ),
              title: 'Configurações',
            }}
          />
        </S.TabsStyle>
      </S.Container>
    </AuthProvider>
  );
};

export default AuthLayout;
