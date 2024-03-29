import Container from "react-bootstrap/Container";

import { Repos } from "../components/Repos";
import { Banner } from "../components/Banner";
import { ErrorMessage } from "../components/ErrorMessage";

const repos = [
  {
    id: 455600,
    node_id: "MDEwOlJlcG9zaXRvcnk0NTU2MDA=",
    name: "hhvm",
    full_name: "facebook/hhvm",
    private: false,
    owner: {
      login: "facebook",
      id: 69631,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
      avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/facebook",
      html_url: "https://github.com/facebook",
      followers_url: "https://api.github.com/users/facebook/followers",
      following_url:
        "https://api.github.com/users/facebook/following{/other_user}",
      gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/facebook/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/facebook/subscriptions",
      organizations_url: "https://api.github.com/users/facebook/orgs",
      repos_url: "https://api.github.com/users/facebook/repos",
      events_url: "https://api.github.com/users/facebook/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/facebook/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/facebook/hhvm",
    description: "A virtual machine for executing programs written in Hack.",
    fork: false,
    url: "https://api.github.com/repos/facebook/hhvm",
    forks_url: "https://api.github.com/repos/facebook/hhvm/forks",
    keys_url: "https://api.github.com/repos/facebook/hhvm/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/facebook/hhvm/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/facebook/hhvm/teams",
    hooks_url: "https://api.github.com/repos/facebook/hhvm/hooks",
    issue_events_url:
      "https://api.github.com/repos/facebook/hhvm/issues/events{/number}",
    events_url: "https://api.github.com/repos/facebook/hhvm/events",
    assignees_url:
      "https://api.github.com/repos/facebook/hhvm/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/facebook/hhvm/branches{/branch}",
    tags_url: "https://api.github.com/repos/facebook/hhvm/tags",
    blobs_url: "https://api.github.com/repos/facebook/hhvm/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/facebook/hhvm/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/facebook/hhvm/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/facebook/hhvm/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/facebook/hhvm/statuses/{sha}",
    languages_url: "https://api.github.com/repos/facebook/hhvm/languages",
    stargazers_url: "https://api.github.com/repos/facebook/hhvm/stargazers",
    contributors_url: "https://api.github.com/repos/facebook/hhvm/contributors",
    subscribers_url: "https://api.github.com/repos/facebook/hhvm/subscribers",
    subscription_url: "https://api.github.com/repos/facebook/hhvm/subscription",
    commits_url: "https://api.github.com/repos/facebook/hhvm/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/facebook/hhvm/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/facebook/hhvm/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/facebook/hhvm/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/facebook/hhvm/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/facebook/hhvm/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/facebook/hhvm/merges",
    archive_url:
      "https://api.github.com/repos/facebook/hhvm/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/facebook/hhvm/downloads",
    issues_url: "https://api.github.com/repos/facebook/hhvm/issues{/number}",
    pulls_url: "https://api.github.com/repos/facebook/hhvm/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/facebook/hhvm/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/facebook/hhvm/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/facebook/hhvm/labels{/name}",
    releases_url: "https://api.github.com/repos/facebook/hhvm/releases{/id}",
    deployments_url: "https://api.github.com/repos/facebook/hhvm/deployments",
    created_at: "2010-01-02T01:17:06Z",
    updated_at: "2023-03-12T18:40:04Z",
    pushed_at: "2023-03-12T22:39:54Z",
    git_url: "git://github.com/facebook/hhvm.git",
    ssh_url: "git@github.com:facebook/hhvm.git",
    clone_url: "https://github.com/facebook/hhvm.git",
    svn_url: "https://github.com/facebook/hhvm",
    homepage: "https://hhvm.com",
    size: 627583,
    stargazers_count: 17596,
    watchers_count: 17596,
    language: "C++",
    has_issues: true,
    has_projects: false,
    has_downloads: false,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 3048,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 671,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["hack", "hacklang", "hhvm", "php"],
    visibility: "public",
    forks: 3048,
    open_issues: 671,
    watchers: 17596,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
];

// const repos = [];

export const MyRepos = () => {
  return (
    <Container>
      <Banner
        title={"My Repository"}
        subtitle={"See list of my GitHub Repositories"}
      />

      {repos.length === 0 && (
        <ErrorMessage message={"You have no repos in your favourites"} />
      )}
      {repos.length > 0 && <Repos repos={repos} />}
    </Container>
  );
};
