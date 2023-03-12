import Container from 'react-bootstrap/Container';

import {Banner} from "../components/Banner"
import {SearchForm} from "../components/SearchForm"
import {ErrorMessage} from "../components/ErrorMessage"

export const Home = () => {
    return <Container>
        <Banner title={"GitHub Diary"}
        subtitle={"A GitHub search tool"}/>

        <SearchForm />

        <ErrorMessage message={"No repos found, please try again"}/>
    </Container>
}