import { BracketsCurly, UsersThree } from "phosphor-react";
import "./styles.scss";

export type UserData = {
    avatar_url: string,
    followers: number,
    name: string, 
    public_gists: number
    public_repos: number,
}

interface DevCardProps extends UserData {}

export function DevCard({avatar_url, followers, name, public_gists, public_repos}: UserData){
    //const userDataInfo = userData;
    return(
        <div className="main-content">
            <div className="user-github">
                <h2 className="h2-user-github">{name}</h2>

                <img className="avatar-photo" src={avatar_url}></img>

                <div className="user-github-info">
                    <UsersThree size={28} />
                    <span>{followers} Followers</span>
                    <BracketsCurly size={28} />
                    <span>{public_repos} repositórios publicados</span>
                </div>

                    <button id="add-button">+</button>
            </div>
        </div>
    )
}