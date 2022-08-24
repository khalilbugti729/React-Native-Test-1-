import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomCard from '../Components/CustomCard'
import DividerByHeight from '../Components/DividerByHeight'
import { HomeApi } from '../../Services/apis/home'
import { FlashList } from '@shopify/flash-list'

const Home = () => {
    const [homeData, setHomeData] = React.useState([]);
    // This function is for calling api
    const getData = async () => {
        try {
            const response = await HomeApi();
            console.log("computer222", response.data[0]["title"])
            setHomeData(response.data);
        } catch (error) {
            console.log("error", error);
        }
    }
    //When screen start its get data from api
    useEffect(() => {
        getData();
    }, [])

    const renderCard = ({ item }: any) => {
        if (homeData[0]) {
            return <CustomCard >
                <Text style={styles.title}>{item.title}</Text>
                <DividerByHeight />
                <Text style={styles.body}>{item.body}</Text>
            </CustomCard>
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* Render efficiently 60fps old device by shopify */}
            <FlashList
                estimatedItemSize={50}
                data={homeData}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>)
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 15
    },
    body: {
        fontSize: 25
    }
})