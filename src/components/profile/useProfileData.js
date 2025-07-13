import { useEffect, useState } from 'react';
import axios from 'axios';
import githubProfile from 'core/data/profile.json';
import githubMe from 'core/data/me.json';
import { API, base } from 'core/config';

export function useProfileData() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function getProfile() {
      try {
        let me = null;
        if (base.isLocal) {
          const response = JSON.parse(JSON.stringify(githubProfile));
          me = JSON.parse(JSON.stringify(githubMe));
          setProfile({ ...response, ...me });
        } else {
          const meFromGithub = await axios.get(API.me.url);
          const me = meFromGithub.data;
          const res = await axios.get(API.profile.url);
          const completeProfile = { ...res.data, ...me };
          setProfile(completeProfile);
        }
      } catch (err) {
        // Optionally handle error
      }
    }
    getProfile();
  }, []);

  return profile;
}
