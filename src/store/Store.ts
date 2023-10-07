import { atom, selector } from "recoil";

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
})

export const currentStep = atom<number>({
  key: "currentStep",
  default: 0,
});

export const highestStep = atom<number>({
  key: "highestStep",
  default: 0,
});

export const userData = atom<{
  userName: string;
  lang: string;
  region: string;
  interests: string[];
  submitted: boolean;
}>({
  key: "userData",
  default: {
    userName: "",
    lang: "",
    region: "",
    interests: [],
    submitted: false,
  },
});

export const userMsg = selector({
  key: "userMsg",
  get: ({ get }) => {
    const interests = get(userData).interests;

    if (interests.length < 3) {
      return `Pick ${3 - interests.length} more`;
    }

    return `Submit`;
  },
});

export const userProfile = selector({
  key: "userProfile",
  get: ({ get }) => {
    const un = get(userData).userName;

    if (un.length > 0) {
      const splittedUser = un.split(" ");

      return {
        dummyProfileImage: splittedUser.map(i => i[0]).join("").toUpperCase(),
        email: `${splittedUser.join("-").toLocaleLowerCase()}@wonderland.space`
      };
    }

    return {
      dummyProfileImage: "??",
      email: `your-name@wonderland.space`
    };
  },
});
