import { API, base } from "core/config";
import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  Image,
  Link,
  Section,
  Skill,
} from "../styled/Core.styled";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import RepoCard from "../common/RepoCard";
import Typography from "../common/Typography";
import axios from "axios";
import { applyColor, colors } from "core/utils";
import githubProfile from "core/data/profile.json";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [repos, setRepos] = useState([]);

  const getProfile = async () => {
    const meFromGithub = await axios.get(
      "https://raw.githubusercontent.com/hidaytrahman/hidaytrahman/main/me.json"
    );

    const me = meFromGithub.data;

    try {
      if (base.isLocal) {
        console.warn("The data is not coming from github");
        const response = JSON.parse(JSON.stringify(githubProfile));

        console.log(" me ", me);
        setProfile({ ...response, ...me });
      } else {
        const res = await axios.get(API.profile.url);
        const completeProfile = { ...res.data, ...me };
        setProfile(completeProfile);
      }
    } catch (_) {}
  };

  const getRepos = async () => {
    if (base.isLocal) {
    } else {
      const res = await axios.get(API.repo.url);
      console.log("res ", res);
      setRepos(res.data);
    }
  };

  useEffect(() => {
    getProfile();
    getRepos();
  }, []);

  return (
    <>
      <Header profile={profile} />

      <Container padding="2rem">
        <Flex>
          <Box>
            <Typography variant="h3" margin="5px 0">
              Skillset
            </Typography>
            <Flex wrap="wrap">
              <Box>
                {profile?.skills?.primary &&
                  profile?.skills?.primary.map((skill, index) => (
                    <Skill
                      src={`https://img.shields.io/badge/-${
                        skill.title
                      }-${applyColor(
                        colors,
                        index
                      )}?style=flat&logo=${skill.title.toLocaleLowerCase()}`}
                      key={index}
                    />
                  ))}
              </Box>

              <Box>
                {profile?.skills?.frameworks &&
                  profile?.skills?.frameworks.map((skill, index) => (
                    <Skill
                      src={`https://img.shields.io/badge/-${
                        skill.title
                      }-${applyColor(
                        colors,
                        index
                      )}?style=flat&logo=${skill.title.toLocaleLowerCase()}`}
                      key={index}
                    />
                  ))}
              </Box>

              <Box>
                {profile?.skills?.secondary &&
                  profile?.skills?.secondary.map((skill, index) => (
                    <Skill
                      src={`https://img.shields.io/badge/-${
                        skill.title
                      }-${applyColor(
                        colors,
                        index + 2
                      )}?style=flat&logo=${skill.title.toLocaleLowerCase()}`}
                      key={index}
                    />
                  ))}
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>

      <Container>
        <Divider margin="1rem" />
      </Container>

      <Container padding="2rem">
        <Flex>
          <Box width="100%">
            <Typography variant="h3">Responsibilities</Typography>
            <ul>
              {profile.responsibilities &&
                profile.responsibilities.map((item, index) => (
                  <li key={index}>
                    <Typography variant="body2">{item}</Typography>
                  </li>
                ))}
            </ul>
          </Box>

          <Box maxWidth="370px" dividerLeft={true}>
            <Typography variant="h3">Domains</Typography>
            {profile.domains &&
              profile.domains
                .split(",")
                .map((item, index) => <Badge key={index}>{item}</Badge>)}
          </Box>
        </Flex>
      </Container>

      <Section variant="secondary">
        <Container padding="20px">
          <Typography variant="h3">Stats</Typography>
          <Flex>
            <Image
              margin="10px"
              height="137px"
              src="https://stackoverflow-card.vercel.app/?userID=2927228&theme=solarizedlight"
            />

            <Image
              margin="10px"
              height="137px"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=hidaytrahman&layout=compact"
            />

            <Image
              margin="10px"
              height="137px"
              src="https://github-readme-stats.vercel.app/api?username=hidaytrahman&theme=buefy&show_icons=true&count_private=true"
            />
          </Flex>
        </Container>
      </Section>

      {repos && repos.length > 0 && (
        <Container padding="20px">
          <Typography variant="h3">Open Source Projects</Typography>
          <Flex wrap="wrap">
            {repos
              .filter(
                (item) =>  profile.fav_repos?.includes(item.name))
              .map((item, index) => (
                // <RepoCard
                //   key={index}
                //   bg={theme.colors.secondary}
                //   padding="20px"
                //   margin="10px"
                //   width="50%"
                //   item={item}
                // ></RepoCard>
                <Link href={item.html_url} target="_blank" key={index}>
                  <Image
                    height="100px"
                    margin="10px"
                    src={`https://github-readme-stats.vercel.app/api/pin/?username=hidaytrahman&repo=${item.name}`}
                  />
                </Link>
              ))}
          </Flex>
        </Container>
      )}

      
  {/* 
      <Container>
        <Divider margin="1rem" />
      </Container>

    <Container padding="20px">
        <Image src="https://github-readme-medium-card.vercel.app/getMediumBlogs?username=hidaytrahman&theme=light&limit=2" />
      </Container> */}

      <Footer profile={profile} />
    </>
  );
};

export default Profile;
