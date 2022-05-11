import { FormEvent, useState } from "react";
import { UserData } from "../DevCard";
import "./styles.scss";

interface HeaderProps{
    onChangeUserData: (userData: UserData) => void ;
}

export function Header({onChangeUserData}: HeaderProps){
    const [userInput, setUserInput] = useState('');

    async function handleRequestGithub(e: FormEvent){
        e.preventDefault();
        try{
    
        const {avatar_url, followers, name, public_gists, public_repos}: UserData 
        = await fetch(`https://api.github.com/users/${userInput}`).then(response => response.json());
        //JSON.stringify(user);
        
         onChangeUserData({
            avatar_url,
            followers,
            name,
            public_gists,
            public_repos        
            });
        
        } catch(e){
            console.log("Não foi possível concluir a busca");
        }
    }

    return(
        <header>
            <h1> Monte seu time de devs por usuários do GitHub</h1>
            <form className="form" onSubmit={handleRequestGithub}>
                <label> Nome do usuário</label>
                <input 
                required className="user-input" 
                type="text" 
                onChange={(e) => setUserInput(e.target.value)}
                />
                <button className="form-btn" type="submit"> Buscar </button>
            </form>
        </header>
    )
}