import React from 'react'
import {View, Button} from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return(
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button title="Opções" onPress={() => {
                    props.navigation.openDrawer() //abrir drawer
                    setTimeout(() => {
                        props.navigation.closeDrawer() // fechar drawer
                        // setInterval(()=>{
                        //     props.navigation.toggleDrawer() //toggleDrawer vai ficar alternando, entre fechado e aberto
                        // },1000)
                    },3000)}}/>
            </View>
            <View style={{flex: 1}}>
                <TextoCentral corFundo='#33fa72' corTexto='#000'>
                    Tela D
                </TextoCentral>            
            </View>
        </View>
    )
}