export const API = {
  profile: {
    url: "https://api.github.com/users/hidaytrahman",
  },
  repo: {
    url: "https://api.github.com/users/hidaytrahman/repos",
  },
};

export const base = {
  isLocal: false && window.location.hostname === "localhost",
};
