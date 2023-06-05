import Container from "react-bootstrap/Container";

import { Banner } from "../components/Banner";
import { SearchForm } from "../components/SearchForm";
import { ErrorMessage } from "../components/ErrorMessage";
import { useEffect, useState } from "react";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState();

  const [url, setUrl] = useState();

  const handleApiTrigger = (userName) => {
    setUrl(`https://api.github.com/users/${userName}/repos`);
  };

  // useEffect takes a calbak and an array
  // do something only if the url is truthy
  // if url is valid will fetch data
  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        const { data } = await axios.get(url);
      };

      fetchData();
    }
  }, [url]);
  console.log(url);

  return (
    <Container>
      <Banner title={"GitHub Diary"} subtitle={"A GitHub search tool"} />

      <SearchForm handleApiTrigger={handleApiTrigger} />

      <ErrorMessage message={"No repos found, please try again"} />
    </Container>
  );
};
