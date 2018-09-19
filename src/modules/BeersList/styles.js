import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    listItemText: {
        fontSize: 18,
        fontWeight: '200'
    },
    loadingButton: {
        paddingVertical: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        fontSize: 15,
        color: 'gray'
    }
})