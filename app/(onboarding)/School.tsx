import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown'
import colors from '@/constants/colors'
import { useOnboarding } from '@/context/onboardingContext'
import { Href, router } from 'expo-router'

const schoolLevels = [
    {label: 'Primary', value: '1'},
    {label: 'Secondary', value: '2'},
]

const School = () => {
    const {setSchoolLevel, schoolLevel} = useOnboarding()
    const [value, setValue] = useState('');

    const MoveToNextSection = () => {
        setSchoolLevel(value)
        
        console.log("School Level", schoolLevel)
        

        // TODO: Add school level to user profile
        router.push('/(onboarding)/Grade' as Href)
    }

    return (
        <SafeAreaView 
                style={{backgroundColor: colors.PRIMARY}}
                className='flex h-full items-center justify-between py-3 pb-10'
            >
            <View className='flex pl-3 items-start gap-y-14 w-full'>
                <Text 
                className='text-start p-3 pl-5 font-bold text-white text-3xl'
                >
                Smart Learning
                </Text>

                <View className='w-full pl-3 flex gap-3'>
                    <Text className='pl-1 text-white font-semibold text-lg'>
                        What is your schooling level?
                    </Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        data={schoolLevels}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select item"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                            console.log(value)
                            setValue(item.value);
                        }}
                    />
                </View>
            </View>

                <View className='w-full gap-y-5 flex flex-col items-center'>
                    <TouchableOpacity
                        className='flex items-center justify-center bg-white px-4 p-4 rounded-full mt-[-25%] w-[70%]' 
                        onPress={() => MoveToNextSection()}
                        onPressIn={() => setSchoolLevel(value)}
                    >
                        <Text
                            style={{color: colors.PRIMARY}}
                            className='font-bold text-lg'
                        >
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
    )
}

export default School

const styles = StyleSheet.create({
    dropdown: {
      paddingLeft: 5,
      margin: 16,
      height: 50,
      borderBottomColor: 'white',
      borderBottomWidth: 0.5,
      marginTop: 10,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
      color: 'white',
    },
    selectedTextStyle: {
      fontSize: 16,
      color: 'white',
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
});