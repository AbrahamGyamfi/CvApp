import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, TouchableHighlight, ScrollView } from 'react-native';
import Edit from './components/Editcv';

const App = () => {
  const [thewebview, setThewebview] = useState(false);
  const [acatext, setAcatext] =useState(`Expected in 2025• B.Sc. in Computer Science  KNUST(Kumasi)\n• 2023 Asc. degree in Computer Science  \n•2020 Certificate in Computer Fundamentals & Programming Languages( SoloLearn, Google Code, W3School)`);
  const [proftext, setProftext] =useState(`•Microsoft’s Office and Packages, Photoshop, and Coreldraw \n•programming Languages HTML, CSS, C++, JAVASCRIPT, React, SQL, Assembly language, Visual Basic.\nOTHER RELEVANT SKILLS \n• Interpersonal Skills \n• Teamwork, Team building and Potential to Work in Collaboration with Group of People `);
  const [relonevalue, setRelonevalue] =useState('GyabsHelen & Co Shippers');
  const [reltwovalue, setReltwovalue] =useState('STARLIGHT ENTERPRISE LTD');
  const [relthreevalue, setRelthreevalue] =useState('REMOTE Internships');
  const [relonetext, setRelonetext] =useState(`May 2022 - December 2021 A technician at GyabsHelen.`);
  const [reltwotext, setReltwotext] =useState(`May 2019 - June 2021  FrontEnd Developer`);
  const [relthreetext, setRelthreetext] =useState(`• Worked on group Projects on GitHub`);
  
  const [reftext, setReftext] =useState(`CONTACT: \nE-MAIL: \ngyamfiabraham95@gmail.com  \nTELEPHONE: \n+233557849795 \nPOSTAL ADDRESS: \nP.O. Box OH 471, Down Town , Kasoa, Ghana`);



  const webviewSwitch = () => {
    setThewebview(!thewebview);
  };




  return (
      <SafeAreaView style={styles.cont}>
      <StatusBar style={'light'} />


      <View style={styles.modalFirstrow }>
</View>
<View style={styles.modalFirstrow }>
</View>
{/* The WebView and it tenary operator to toggle it */}
{thewebview ? 
//       <View style={styles.webviewview } >
//         <Ionicons name="arrow-back" style={styles.webviewicon } onPress={webviewSwitch}/>
//     <WebView
//   source={{ uri: 'https://github.com/Mongopark' }}
//   style={styles.webview }/>
//   </View>
<Edit onPress={webviewSwitch} acatext={acatext} proftext={proftext} relonevalue={relonevalue} reltwovalue={reltwovalue} relthreevalue={relthreevalue} relonetext={relonetext} reltwotext={reltwotext} relthreetext={relthreetext} reftext={reftext} setAcatext={setAcatext} setProftext={setProftext} setRelonevalue={setRelonevalue} setReltwovalue={setReltwovalue} setRelthreevalue={setRelthreevalue} setRelonetext={setRelonetext} setReltwotext={setReltwotext} setRelthreetext={setRelthreetext} setReftext={setReftext} /> : 

  



      <ScrollView
       style={styles.modal }>
       
        <View style={styles.modalView }>
        <View style={styles.modalHead }>
        <Image source={require('./assets/Ico.png')} style={styles.loadingpng } />
</View>




<View style={styles.modalFirstrow }>
</View>




<View style={styles.modalFourthrow }>
<View style={styles.modalThirdrow }>
            <View style={styles.modalTextwrapper }>
            <Text style={styles.modalThirdtext }>FULL NAME</Text>
            <Text style={styles.modalFourthtext }>Abraham Gyamfi</Text>
            </View>
</View>
<View>              
            <Text style={styles.modalThirdtext }>SLACK USERNAME</Text>
            <Text style={styles.modalFourthtext }>AB</Text>
            </View>
            </View>




<View style={styles.modalFirstrow }>
</View>



<View style={[styles.modalFourthrow,{paddingBottom: 10, }] }>
              <View style={styles.modalIconwrapper }>
            <Text style={styles.modalThirdtext }>GITHUB HANDLE</Text>
            
</View>
            <Pressable onPress={webviewSwitch} style={[styles.modalThirdrow, {paddingBottom: 20, }]}><Text style={styles.modalFourthtext }>https://github.com/AbrahamGyamfi</Text></Pressable>
            </View>

            <View style={ styles.modalFourthrow }>
            <View style={styles.modalTextwrapper }>
            <Text style={styles.modalThirdtext }>BIO</Text>
            <Text style={styles.modalFirsttext }>I am a passionate and driven undergraduate student with a deep interest in the world of mobile app and web development. With a strong foundation in programming and a flair for creativity, 
            I am on a journey to turn innovative ideas into functional and user-friendly digital experiences</Text>
</View>
             </View>





        <View style={styles.modalFirstrow }>
</View>
<View style={styles.cvView }><Text style={styles.cvText }>Curriculum Vitae</Text>
<TouchableHighlight onPress={webviewSwitch} style={styles.modalThirdbutton }>
              <Text style={styles.modalThirdbuttontext } >Edit CV</Text>
              </TouchableHighlight>
</View>
<View style={styles.modalFirstrow }>
</View>




<View style={[styles.modalFourthrow,{paddingBottom: 20, }] }>
<View style={[styles.modalThirdrow,{marginBottom: 20, paddingBottom: 20, }] }>
            <View style={styles.modalTextwrapper }>
            <Text style={styles.modalThirdtext }>Education</Text>
            <Text style={styles.modalFirsttext }>{acatext}</Text>
            </View>
</View>
            <View>
              <View style={styles.modalIconwrapper }>
            <Text style={styles.modalThirdtext }>SKILLS</Text>
</View>
            <Text style={styles.modalFirsttext }>{proftext}</Text>
            </View>
        </View>



        <View style={styles.modalFirstrow }>
</View>





<View style={[styles.modalFourthrow,{paddingBottom: 20, }] }>
<View style={[styles.modalThirdrow,{marginBottom: 20, paddingBottom: 20, }] }>
            <View style={styles.modalTextwrapper }>
            <Text style={styles.modalThirdtext }> WORK EXPERIENCES</Text>
            <Text style={styles.cvText}>{relonevalue}</Text>
            <Text style={styles.modalFirsttext }>
            {relonetext}.</Text>

<Text style={styles.cvText}>{reltwovalue}</Text>
            <Text style={styles.modalFirsttext }>{reltwotext}</Text>
<Text style={styles.cvText}>{relthreevalue}</Text>
            <Text style={styles.modalFirsttext }>{relthreetext}</Text>
            </View>
</View>
            <View>
              <View style={styles.modalIconwrapper }>
            <Text style={styles.modalThirdtext }>REFERENCES:</Text>
</View>
<Text style={styles.cvText}>Available upon request</Text>
            <Text style={styles.modalFirsttext }>{reftext}</Text>
            </View>
        </View>








        </View>

        </ScrollView>
         }





        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex:1,
  },modal: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: 'blue',
  },
  modalView: {
    flex: 3,
    borderRadius: 20,
  },
  modalHead: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    backgroundColor: '#ecda02',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingpng: {
    width: 145,
    height: 145,
    borderRadius: 80,
  },
  modalFirstrow: {
    backgroundColor: 'White',
    height: 20,
    paddingLeft: 20,
  },
  modalThirdrow: {
    borderBottomColor: 'blue',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 1,
    borderRadius: 50,
  },
  modalFourthrow: {
    backgroundColor: '#958002',
  },
    modalTextwrapper: {
      paddingBottom: 10,
    },
    modalFirsttext: {
      fontSize: 13, 
      paddingHorizontal: 18,
      color: 'white',
    },
    modalThirdtext: {
      fontSize: 15, 
      paddingHorizontal: 18,
      color: 'black',
    },
    modalThirdbutton: {
      marginTop: 3,
      borderRadius: 50,
      backgroundColor: 'cyan',
      fontSize: 24, 
      fontWeight: 'bold',
      marginHorizontal: 20,
    },
    modalThirdbuttontext: {
      paddingHorizontal: 14,
      fontSize: 14, 
      fontWeight: 'bold',
      color: '#36454f',
    },
    modalFourthtext: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 18, 
      color: 'white',
    },
    modalIconwrapper: {
      flexDirection: 'row',
    },
    switchcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      justifyContent: 'flex-end',
      backgroundColor: '#36454f',
    },
    switchlabel: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
    },
    switch: {
      trackColor: { false: 'cyan', true: 'blue' },
    },
    webviewview: {
      width: '100%',
      height: '120%',
      backgroundColor: '#36454f',
      },
        webviewicon: {
        paddingHorizontal: 15,
        paddingBottom: 5,
        marginTop: 25,
        fontSize: 24,
        color: 'white',
        },
        webview: { flex: 1,
        backgroundColor: '#36454f',
        },
        cvView: { 
          backgroundColor: '#36455e',
          padding: 10,
          alignItems: 'center',
          },
          cvText: {
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'white',
            },
      })




export default App;