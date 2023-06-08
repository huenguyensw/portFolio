import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export default function PortFolio() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Hello</Text>
            <Image style={styles.image} source={require('../assets/profile.png')} />
            <View style={styles.content}>
                <View style={styles.aboutme}>
                    <Text style={styles.titleAboutMe}>About me</Text>
                    <Text>----------------------------------</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
                <View style={styles.skill}>
                    <Text style={styles.titleAboutMe}>Skills</Text>
                    <Text>----------------</Text>
                    <FlatList data={[
                        { key: 'HTML' },
                        { key: 'CSS' },
                        { key: 'JavaScript' },
                        { key: 'Node/Express' },
                        { key: 'Git & Github' },
                        { key: 'React' },
                        { key: 'React Native' },
                    ]}
                        renderItem={({ item }) => {
                            return (
                                <View >
                                    <Text>{item.key}</Text>
                                </View>
                            );
                        }} />
                </View>
            </View>
            <View style={styles.footer}>
                <Entypo name="facebook" size={24} color="white" />
                <Entypo name="instagram" size={24} color="white" />
                <Entypo name="linkedin" size={24} color="white" />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#99ffff',
        alignItems: 'center',
        justifyContent: 'space-around',
        rowGap: 10,
        alignContent: 'center',

    },
    titleText: {
        flex: 1,
        fontFamily: 'GreatVibes-Regular',
        fontSize: 40,
        color: 'red',
        paddingTop: 50,
    },
    image: {
        flex: 3,
        width: 350,
        borderRadius: 10,
        opacity: 1,
    },
    content: {
        flex: 5,
        color: 'black',
        flexDirection: 'row',
        columnGap: 30,
        paddingLeft: 40,
        alignItems: 'flex-start',
    },
    aboutme: {
        flex: 2,
    },
    skill:{
        flex: 1,
    },
    titleAboutMe:{
        fontSize: 25,
    },
    footer:{
        flex: 1,
        backgroundColor: '#FF5144',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }

});
