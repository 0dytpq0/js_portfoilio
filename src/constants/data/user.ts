export interface User {
  name: { first: string; last: string };
  phone: string;
  email: string;
  gitHub: string;
  blog: string;
}

export const user: User = {
  name: { first: "Joseph", last: "Park" },
  phone: "010-3146-0962",
  email: "rkfnahs12e@gmail.com",
  gitHub: "https://github.com/0dytpq0",
  blog: "https://velog.io/@0dytpq0/posts",
};
