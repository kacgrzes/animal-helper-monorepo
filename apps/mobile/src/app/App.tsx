/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Box, NativeBaseProvider, extendTheme, Text } from 'native-base';
import { SafeAreaView } from 'react-native';

export const App = () => {
  const theme = extendTheme({
    colors: {
      primary: {
        50: 'FCFEE8',
        100: 'F9FFC2',
        200: 'F5FF87',
        300: 'F8FF43',
        400: 'FFFC10',
        500: 'EFE203',
        600: 'CEB300',
        700: 'A48104',
        800: '88650B',
        900: '735210',
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Box flex={1} backgroundColor="primary.100">
          <Text>Hello</Text>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
