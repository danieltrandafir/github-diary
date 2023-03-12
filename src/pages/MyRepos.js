import Container from 'react-bootstrap/Container';


import {Repos} from '../components/Repos';
import { Banner } from "../components/Banner"
import { ErrorMessage } from "../components/ErrorMessage"


export const MyRepos = () => {
    return <Container>
        <Banner title={"My Repository"}
        subtitle={"See list of my GitHub Repositories"}/>
        <ErrorMessage message={"You have no repos in your favourites"} />
        <Repos />
        
    </Container>
}