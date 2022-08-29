import React, { FC, ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '~assets';

interface HeaderProps {
    title: string;
    buttonLeft?: ReactNode;
    buttonRight?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ title, buttonLeft, buttonRight }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonLeft}>{buttonLeft}</TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.buttonRight}>{buttonRight}</TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 22,
        paddingBottom: 22,
        justifyContent: 'space-between',
    },

    buttonLeft: {
        marginTop: 2,
        marginLeft: 15,

    },
    buttonRight:{
        marginRight: 15,
    },

    title: {
        fontFamily: 'SF UI Text',
        fontSize: 17,
        lineHeight: 20,
        color: COLORS.primary,
    },
});
