export let user = {
  wallpaper: "https://source.unsplash.com/random",
  image: "https://source.unsplash.com/random/?girl",
  name: "Lorem ipsum dolor sit",
  email: "email@gmail.com",
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae dignissimos similique sed accusantium quia sit laborum, sint veritatis soluta autem vero incidunt, repudiandae nihil doloremque? Mollitia officiis optio tempora?",
  storiesRated: [],
  storiesRead: [],
  storiesCommented: [],
};
export let categories = [
  { image: "./IMG/categories/all.png", name: "All", desc: "Tất tần tật các câu chuyện về mọi chủ đề." },
  { image: "./IMG/categories/family-1.png", name: "Family", desc: "Gia đình." },
  { image: "./IMG/categories/kid.png", name: "Kid", desc: "Thiếu nhi." },
  { image: "./IMG/categories/education.png", name: "Education", desc: "Trường học, thầy cô và bạn bè." },
  { image: "./IMG/categories/history-1.png", name: "History", desc: "Lịch sử và truyền thống ở Việt Nam." },
  { image: "./IMG/categories/motivate.png", name: "Motivation", desc: "Những câu chuyện vươn lên và truyền cảm hứng trong cuộc sống." },
  { image: "./IMG/categories/world.png", name: "World", desc: "Khám phá những câu truyện cổ tích khác trên thế giới.." },
];
export let stories = [
  {
    name: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
    categories: ["Kid", "History", "World"],
    date: new Date().toLocaleDateString("vi-VI"),
    views: 100,
    length: "8:30",
    author: {
      image: "https://source.unsplash.com/random/?girl",
      name: "Voluptatum aliquam magni tenetur",
    },
    pages: [
      { image: "https://source.unsplash.com/random/?anime", audio: "" },
      { image: "https://source.unsplash.com/random/?girl", audio: "" },
      { image: "https://source.unsplash.com/random/?nature", audio: "" },
      { image: "https://source.unsplash.com/random/?forest", audio: "" },
      { image: "https://source.unsplash.com/random/?water", audio: "" },
    ],
    avgRating: 5,
    usersRating: [
      { name: "amet harum temporibus possimus", rate: 5 },
      { name: "harum temporibus possimus", rate: 5 },
      { name: "amet harum possimus", rate: 5 },
      { name: "harum temporibus possimus", rate: 4 },
    ],
    comments: [
      {
        user: { image: "https://source.unsplash.com/random", name: "Dignissimos recusandae autem" },
        date: new Date().toLocaleDateString("vi-VI"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
      },
    ],
  },
  {
    name: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
    categories: ["Kid", "History", "World"],
    date: new Date().toLocaleDateString("vi-VI"),
    views: 100,
    length: "8:30",
    author: {
      image: "https://source.unsplash.com/random/?girl",
      name: "Voluptatum aliquam magni tenetur",
    },
    pages: [
      { image: "https://source.unsplash.com/random/?anime", audio: "" },
      { image: "https://source.unsplash.com/random/?girl", audio: "" },
      { image: "https://source.unsplash.com/random/?nature", audio: "" },
      { image: "https://source.unsplash.com/random/?forest", audio: "" },
      { image: "https://source.unsplash.com/random/?water", audio: "" },
    ],
    avgRating: 5,
    usersRating: [
      { name: "amet harum temporibus possimus", rate: 5 },
      { name: "harum temporibus possimus", rate: 5 },
      { name: "amet harum possimus", rate: 5 },
      { name: "harum temporibus possimus", rate: 4 },
    ],
    comments: [
      {
        user: { image: "https://source.unsplash.com/random", name: "Dignissimos recusandae autem" },
        date: new Date().toLocaleDateString("vi-VI"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
      },
    ],
  },
  {
    name: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
    categories: ["Kid", "History", "World"],
    date: new Date().toLocaleDateString("vi-VI"),
    views: 100,
    length: "8:30",
    author: {
      image: "https://source.unsplash.com/random/?girl",
      name: "Voluptatum aliquam magni tenetur",
    },
    pages: [
      { image: "https://source.unsplash.com/random/?anime", audio: "" },
      { image: "https://source.unsplash.com/random/?girl", audio: "" },
      { image: "https://source.unsplash.com/random/?nature", audio: "" },
      { image: "https://source.unsplash.com/random/?forest", audio: "" },
      { image: "https://source.unsplash.com/random/?water", audio: "" },
    ],
    avgRating: 5,
    usersRating: [
      { name: "amet harum temporibus possimus", rate: 5 },
      { name: "harum temporibus possimus", rate: 5 },
      { name: "amet harum possimus", rate: 5 },
      { name: "harum temporibus possimus", rate: 4 },
    ],
    comments: [
      {
        user: { image: "https://source.unsplash.com/random", name: "Dignissimos recusandae autem" },
        date: new Date().toLocaleDateString("vi-VI"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
      },
    ],
  },
  {
    name: "Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
    categories: ["Kid", "History", "World"],
    date: new Date().toLocaleDateString("vi-VI"),
    views: 100,
    length: "8:30",
    author: {
      image: "https://source.unsplash.com/random/?girl",
      name: "Voluptatum aliquam magni tenetur",
    },
    pages: [
      { image: "https://source.unsplash.com/random/?anime", audio: "" },
      { image: "https://source.unsplash.com/random/?girl", audio: "" },
      { image: "https://source.unsplash.com/random/?nature", audio: "" },
      { image: "https://source.unsplash.com/random/?forest", audio: "" },
      { image: "https://source.unsplash.com/random/?water", audio: "" },
    ],
    avgRating: 5,
    usersRating: [
      { name: "amet harum temporibus possimus", rate: 5 },
      { name: "harum temporibus possimus", rate: 5 },
      { name: "amet harum possimus", rate: 5 },
      { name: "harum temporibus possimus", rate: 4 },
    ],
    comments: [
      {
        user: { image: "https://source.unsplash.com/random", name: "Dignissimos recusandae autem" },
        date: new Date().toLocaleDateString("vi-VI"),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
      },
    ],
  },
];

let story = {
  name: "Lorem ipsum dolor sit",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
  categories: ["Kid", "History", "World"],
  date: new Date().toLocaleDateString("vi-VI"),
  views: 100,
  length: "8:30",
  author: {
    image: "https://source.unsplash.com/random/?girl",
    name: "Voluptatum aliquam magni tenetur",
  },
  pages: [
    { image: "https://source.unsplash.com/random/?anime", audio: "" },
    { image: "https://source.unsplash.com/random/?girl", audio: "" },
    { image: "https://source.unsplash.com/random/?nature", audio: "" },
    { image: "https://source.unsplash.com/random/?forest", audio: "" },
    { image: "https://source.unsplash.com/random/?water", audio: "" },
  ],
  avgRating: 5,
  usersRating: [
    { name: "amet harum temporibus possimus", rate: 5 },
    { name: "harum temporibus possimus", rate: 5 },
    { name: "amet harum possimus", rate: 5 },
    { name: "harum temporibus possimus", rate: 4 },
  ],
  comments: [
    {
      user: { image: "https://source.unsplash.com/random", name: "Dignissimos recusandae autem" },
      date: new Date().toLocaleDateString("vi-VI"),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
    },
  ],
};
