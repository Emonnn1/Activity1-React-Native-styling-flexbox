import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

const Picture = () => {
  return(
    <View>
       <Image source={{ uri: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.6435-9/180948184_2976607119235489_6928912161954544799_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFLgQ0LF2KCrqM4WUOzYHy6-G_CK5DSA1X4b8IrkNIDVd9h7Jrd9bO0fXEK6TlQy6NUrT4M1sSxJ6GVPfnbqf4s&_nc_ohc=C9U_i-GF6KsAX9V2ddQ&_nc_ht=scontent.fceb2-2.fna&_nc_e2o=f&oh=00_AfDy5EOhhdRiX7aX3IcYWZ5g8hW1fWylI2Sr5y6aJmUNRw&oe=651D1375'}} style ={styles.Picture} />
     </View>
  ) 
};
const BioData = () =>{
  return(
    <View> 
<Text style ={styles.name}> Raymond Buñol </Text>
<Text style={styles.course}> BS Information Technology 3</Text> 
</View>
  )
}

const SubjectLabel = () =>{
  return(
    <View>
      <Text style={styles.label}> My Subjects </Text>
    </View>
  )
}
const SubjectOfferings = ()=>{
  return(
     
       <View style = {styles.subjectContainer}>
  <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>ELEC 2</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescript}>Web Development/Web Enterprise</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>ELEC 3</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescript}>Mobile Application</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 311</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescript}>Software Engineering</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 312</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescript}>Information Assurance and security 2</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 313</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Quantitative Methods</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    </View>
  )
}

export default function App() {
  return (
   <View style = {styles.containerForAll}> 
    <View style={styles.container}>
      
    <View style={styles.profile}>
      <Picture />
      <BioData />
      </View>

      
      <View style ={styles.label}>
      <SubjectLabel/> 
      </View>

      
      <SubjectOfferings/>
      
       
      </View>

      <View>
        <Text style={styles.seeMore}>Click here to see more</Text>
      </View>

    <StatusBar style="auto" />
    </View>
     
     );
}
 
const styles = StyleSheet.create({
  container:{
    alignItems: 'left',
  },
 
  profile: {
    backgroundColor: '#24469C',
    alignItems: 'left',
    width: 350,
    height: 260,
    marginBottom:'40px',
    marginTop:'40px',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
     
  },

  Picture: {
    marginLeft: '20px',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  
  name:{
    color: '#fff',
    fontSize: '20px',
    marginLeft: '20px', 
  },
  course: {
    color: '#fff',
    marginLeft: '20px',
  },

 label:{
  backgroundColor: '#ffOOff',
  color: '#ffOOff',
  marginLeft: 10,
 },

 subjectOfferings:{
 flex: 1,
flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'center',
with: 150,
backgroundColor: '#DCDCDC',
borderTopRightRadius: 5,
borderTopLeftRadius: 5,
borderBottomRightRadius: 5,
borderBottomLeftRadius: 5,
marginBottom:'4px',
marginTop:'4px',
},

 subjectCode:{
  fontSize: '15px', 
  padding:5,
  fontWeight:'bold',
  marginLeft:'20px',
   
},

subjectDescript:{
  marginLeft:'40px',
  fontSize: '11px',
  borderBottomRightRadius: 50,
},

subjectUnits:{
  marginLeft:'40px',
  fontSize: '11px',
  borderBottomRightRadius: 50,
},

subjectContainer:{
  marginLeft: '10px',
marginRight: '10px',
 },

 containerForAll:{
marginLeft: '10px',
marginRight: '10px',
backgroundColor: 'white',
 },

seeMore:{
  color:'#24469C',
  marginBottom:'40px',
  marginTop:'10px',
  marginLeft:'185px',
  fontSize: '15px',  
}
});