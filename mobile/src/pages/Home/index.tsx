import React, {useState, useEffect, ChangeEvent} from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { StyleSheet, View, Image, Text, ImageBackground, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface Uf {
  label: string;
  value: string;
}

const Home = () => {
  // const [uf, setUf] = useState('');
  // const [city, setCity] = useState('');


  const [ufs, setUfs] = useState<Uf[]>([]);
  const [cities, setCities] = useState<Uf[]>([]);
  const [selectedUf, setSelectedUf]= useState<string>('');
  const [selectedCity, setSelectedCity] = useState('0');
  

  const navigation = useNavigation();


  useEffect( () => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados/').then( response => {

    // console.log(response.data);
      const ufInitials = response.data.map(uf => { return {label: uf.sigla, value: uf.sigla } });
      setUfs(ufInitials);
      
    })
  }, [] );


  useEffect( () => {
    
    console.log('identificou atualizacao de UF', selectedUf);
    //carregar as cidades sempre que a uf mudar
    if(selectedUf === '') {
      return;
    }
    console.log('here', selectedUf);

    // console.log('change uf');
    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then( response => {
      // const cityNames = response.data.map( city =>  city.nome );
      const cityNames = response.data.map(city => { return {label: city.nome, value: city.nome } });
      setCities(cityNames);
      // console.log(response.data);
    });


  },[selectedUf] );

  function handleSelectUf( uf: string ) {

    setSelectedUf(uf);
  }

  function handleSelectCity(city: string) {
    // const city = event.target.value;

    setSelectedCity(city);
  }


  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf: selectedUf,
      city: selectedCity
    });
  }

  return (
  <KeyboardAvoidingView  style={{flex: 1}} behavior={ Platform.OS === 'ios' ? 'padding' : undefined }>
    <ImageBackground  
      source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{width: 274, height: 368}}
      
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <View>


          <Text style={styles.title}>Seu marketplace de coleata de resíduos</Text>
          <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coelta de forma eficiente.</Text>
        </View>
      </View>
      <View >
            
        <RNPickerSelect 
            placeholder={{
              label: 'Selecione a UF',
              value: null,
              // color: 'red',
            }}

            style={{
              iconContainer: {
                top: 20,
                right: 10,
              },
              placeholder: {
                // color: 'purple',
                fontSize: 16,
                fontWeight: 'bold',
              },
              inputIOS: {
                height: 60,
                backgroundColor: '#FFF',
                borderRadius: 10,
                marginBottom: 8,
                paddingHorizontal: 24,
                fontSize: 16,
              },
            }}
            onValueChange={(value) => handleSelectUf(value)}
            // onDonePress={(value) => handleSelectUf(value)}
            value={selectedUf} 
            // onValueChange={(handleSelectUf)}
            
            items={ufs}
        />


          <RNPickerSelect 
            placeholder={{
              label: 'Selecione a cidade',
              value: null,
              // color: 'red',
            }}

            style={{
              iconContainer: {
                top: 20,
                right: 10,
              },
              placeholder: {
                // color: 'purple',
                fontSize: 16,
                fontWeight: 'bold',
              },
              inputIOS: {
                height: 60,
                backgroundColor: '#FFF',
                borderRadius: 10,
                marginBottom: 8,
                paddingHorizontal: 24,
                fontSize: 16,
              },
            }}
            onValueChange={(value) => handleSelectCity(value)}
            // onDonePress={(value) => handleSelectUf(value)}
            value={selectedCity} 
            // onValueChange={(handleSelectUf)}
            
            items={cities}
          />

      </View>

      <View style={styles.footer}>
        {/* <TextInput style={styles.input} maxLength={2} autoCapitalize="characters" autoCorrect={false} value={uf} onChangeText={ text => setUf(text) } placeholder="Digite a UF" /> */}
        {/* <TextInput style={styles.input} value={city} autoCorrect={false} onChangeText={ setCity }  placeholder="Digite a cidade" /> */}
          
        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color='#fff' size={24}/>
              </Text>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>

        </RectButton>
      </View>

    </ImageBackground>
  </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  selectItem: {
    backgroundColor: '#444',
    borderRadius: 10,
    marginBottom: 10,
    width: 100,
    height: 60,


  },

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },


});


export default Home;