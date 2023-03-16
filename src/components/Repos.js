import { Stack } from "react-bootstrap"

import {Repo} from "../components/Repo"
  

export const Repos = ({repos}) => {
    return <Stack direction="horizontal" className="justify-content-center flex-wrap">
                {
                    repos.map((repo) => <Repo repo={repo}/>)
                }
            </Stack>
}