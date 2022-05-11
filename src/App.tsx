import { useState } from 'react'
import './App.scss'
import { Header } from './Components/Header'
import { DevTeam } from './Components/DevTeam'
import { DevCard, UserData } from './Components/DevCard'

function App() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    avatar_url: "uepa",
    followers: 70,
    name: "mathola",
    public_gists: 20,
    public_repos: 10
  });

  function onChangeUserData(userData: UserData){
    setUserData(userData) ;
    console.log(userData)
  }

  return (
    <div className="App grid-container">
      <Header onChangeUserData={onChangeUserData}/>
      <DevTeam />
      { userData ?
      //<h1>{userData.name}</h1>
      <>
      try{
        //@ts-ignore
        <DevCard userData={userData}/>
      } catch(error){
        console.error
      }
      </>
        :
        <h1>eh</h1>
      }
    </div>
  )
}

export default App
