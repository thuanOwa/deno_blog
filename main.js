import blog, { ga, redirects } from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "Thuan Pham",
  title: "Thuan Pham",
  description: "Yo! I'm a random nerd, front-end dev, and creator,...",
  avatar: "profile_picture.png",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:thuanowa@gmail.com" },
    { title: "GitHub", url: "https://github.com/thuanOwa" },
    { title: "link in bio/ links", url: "https://bio.link/thuanOwa" },
  ],
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  lang: "en",
  middlewares: [ga("G-4V1R393JHN"), redirects({})],
});
