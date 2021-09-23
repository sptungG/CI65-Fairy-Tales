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
    id: "00",
    name: "Chuông gió kẹo ngọt 00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
    categories: ["Kid", "Education"],
    date: new Date().toLocaleDateString("vi-VI"),
    views: 100,
    length: "8:30",
    author: {
      image: "https://source.unsplash.com/random/?girl",
      name: "Tân Việt",
    },
    pages: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FCover%2Fbia_b.jpg?alt=media&token=a4c21838-2378-47a6-acfc-3fb02fe84f9d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage1%2F1b.jpg?alt=media&token=ca9ed783-611a-4083-b10b-47c5e69ba5b5",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage2%2F2a.jpg?alt=media&token=0fc50a7c-93e8-439c-88e8-a156b3a29d6d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage2%2F2b.jpg?alt=media&token=b318bdf1-3f91-45a8-bb24-de5465ca4689",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage3%2F3a.jpg?alt=media&token=d07d2d29-8e1a-4b63-a886-f494f4b9c2d0",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage3%2F3b.jpg?alt=media&token=12920a4f-78bd-4e3e-ad3d-f02f98979a4a",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage4%2F4a.jpg?alt=media&token=5be77b88-f959-44b0-8ce7-730a1a093607",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage4%2F4b.jpg?alt=media&token=4c0125e6-26e8-4f71-bc97-ef6749dc6489",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage5%2F5a.jpg?alt=media&token=4c2ec405-7b38-4645-819c-ce5384fc5787",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage5%2F5b.jpg?alt=media&token=5bcdbaa7-ee21-4ad3-bc1e-16db539dbc719",
      },

      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage6%2F6a.jpg?alt=media&token=f0b8f8ba-27da-47a2-8758-27ccf8a1dd2d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage6%2F6b.jpg?alt=media&token=704cdd86-903f-4daa-aa6c-e6e5fed7de8b",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage7%2F7a.jpg?alt=media&token=1b1dd18f-4c5b-4358-8bda-386e6a6f8b85",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage7%2F7b.jpg?alt=media&token=88a7f50a-1624-4da4-afb4-ce5167270ede",
      },
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
    id: "01",
    name: "Chuông gió kẹo ngọt 01",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
    categories: ["Kid", "Education", "World"],
    date: new Date().toLocaleDateString("vi-VI"),
    views: 100,
    length: "8:30",
    author: {
      image: "https://source.unsplash.com/random/?girl",
      name: "Tân Việt",
    },
    pages: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FCover%2Fbia_b.jpg?alt=media&token=a4c21838-2378-47a6-acfc-3fb02fe84f9d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage1%2F1b.jpg?alt=media&token=ca9ed783-611a-4083-b10b-47c5e69ba5b5",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage2%2F2a.jpg?alt=media&token=0fc50a7c-93e8-439c-88e8-a156b3a29d6d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage2%2F2b.jpg?alt=media&token=b318bdf1-3f91-45a8-bb24-de5465ca4689",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage3%2F3a.jpg?alt=media&token=d07d2d29-8e1a-4b63-a886-f494f4b9c2d0",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage3%2F3b.jpg?alt=media&token=12920a4f-78bd-4e3e-ad3d-f02f98979a4a",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage4%2F4a.jpg?alt=media&token=5be77b88-f959-44b0-8ce7-730a1a093607",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage4%2F4b.jpg?alt=media&token=4c0125e6-26e8-4f71-bc97-ef6749dc6489",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage5%2F5a.jpg?alt=media&token=4c2ec405-7b38-4645-819c-ce5384fc5787",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage5%2F5b.jpg?alt=media&token=5bcdbaa7-ee21-4ad3-bc1e-16db539dbc719",
      },

      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage6%2F6a.jpg?alt=media&token=f0b8f8ba-27da-47a2-8758-27ccf8a1dd2d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage6%2F6b.jpg?alt=media&token=704cdd86-903f-4daa-aa6c-e6e5fed7de8b",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage7%2F7a.jpg?alt=media&token=1b1dd18f-4c5b-4358-8bda-386e6a6f8b85",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage7%2F7b.jpg?alt=media&token=88a7f50a-1624-4da4-afb4-ce5167270ede",
      },
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
    id: "02",
    name: "Chuông gió kẹo ngọt 02",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
    categories: ["Kid", "Education"],
    date: new Date().toLocaleDateString("vi-VI"),
    views: 100,
    length: "8:30",
    author: {
      image: "https://source.unsplash.com/random/?girl",
      name: "Tân Việt",
    },
    pages: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FCover%2Fbia_b.jpg?alt=media&token=a4c21838-2378-47a6-acfc-3fb02fe84f9d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage1%2F1b.jpg?alt=media&token=ca9ed783-611a-4083-b10b-47c5e69ba5b5",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage2%2F2a.jpg?alt=media&token=0fc50a7c-93e8-439c-88e8-a156b3a29d6d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage2%2F2b.jpg?alt=media&token=b318bdf1-3f91-45a8-bb24-de5465ca4689",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage3%2F3a.jpg?alt=media&token=d07d2d29-8e1a-4b63-a886-f494f4b9c2d0",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage3%2F3b.jpg?alt=media&token=12920a4f-78bd-4e3e-ad3d-f02f98979a4a",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage4%2F4a.jpg?alt=media&token=5be77b88-f959-44b0-8ce7-730a1a093607",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage4%2F4b.jpg?alt=media&token=4c0125e6-26e8-4f71-bc97-ef6749dc6489",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage5%2F5a.jpg?alt=media&token=4c2ec405-7b38-4645-819c-ce5384fc5787",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage5%2F5b.jpg?alt=media&token=5bcdbaa7-ee21-4ad3-bc1e-16db539dbc719",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage6%2F6a.jpg?alt=media&token=f0b8f8ba-27da-47a2-8758-27ccf8a1dd2d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage6%2F6b.jpg?alt=media&token=704cdd86-903f-4daa-aa6c-e6e5fed7de8b",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage7%2F7a.jpg?alt=media&token=1b1dd18f-4c5b-4358-8bda-386e6a6f8b85",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage7%2F7b.jpg?alt=media&token=88a7f50a-1624-4da4-afb4-ce5167270ede",
      },
    ],
    audio:
      "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage1%2F1.mp3?alt=media&token=087277e2-1350-40da-a79a-5bce8f8c33c5",
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
    id: "03",
    name: "Chuông gió kẹo ngọt 03",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
    categories: ["Kid", "Education", "Family"],
    date: new Date().toLocaleDateString("vi-VI"),
    views: 100,
    length: "8:30",
    author: {
      image: "https://source.unsplash.com/random/?girl",
      name: "Tân Việt",
    },
    pages: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FCover%2Fbia_b.jpg?alt=media&token=a4c21838-2378-47a6-acfc-3fb02fe84f9d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage1%2F1b.jpg?alt=media&token=ca9ed783-611a-4083-b10b-47c5e69ba5b5",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage2%2F2a.jpg?alt=media&token=0fc50a7c-93e8-439c-88e8-a156b3a29d6d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage2%2F2b.jpg?alt=media&token=b318bdf1-3f91-45a8-bb24-de5465ca4689",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage3%2F3a.jpg?alt=media&token=d07d2d29-8e1a-4b63-a886-f494f4b9c2d0",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage3%2F3b.jpg?alt=media&token=12920a4f-78bd-4e3e-ad3d-f02f98979a4a",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage4%2F4a.jpg?alt=media&token=5be77b88-f959-44b0-8ce7-730a1a093607",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage4%2F4b.jpg?alt=media&token=4c0125e6-26e8-4f71-bc97-ef6749dc6489",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage5%2F5a.jpg?alt=media&token=4c2ec405-7b38-4645-819c-ce5384fc5787",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage5%2F5b.jpg?alt=media&token=5bcdbaa7-ee21-4ad3-bc1e-16db539dbc719",
      },

      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage6%2F6a.jpg?alt=media&token=f0b8f8ba-27da-47a2-8758-27ccf8a1dd2d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage6%2F6b.jpg?alt=media&token=704cdd86-903f-4daa-aa6c-e6e5fed7de8b",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage7%2F7a.jpg?alt=media&token=1b1dd18f-4c5b-4358-8bda-386e6a6f8b85",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage7%2F7b.jpg?alt=media&token=88a7f50a-1624-4da4-afb4-ce5167270ede",
      },
    ],
    audio:
      "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage1%2F1.mp3?alt=media&token=087277e2-1350-40da-a79a-5bce8f8c33c5",
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
    id: "04",
    name: "Chuông gió kẹo ngọt 04",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni tenetur laborum nostrum! Dignissimos recusandae autem incidunt impedit tenetur voluptate, error id, a, deserunt reprehenderit amet harum temporibus possimus.",
    categories: ["Kid", "Education"],
    date: new Date().toLocaleDateString("vi-VI"),
    views: 100,
    length: "8:30",
    author: {
      image: "https://source.unsplash.com/random/?girl",
      name: "Tân Việt",
    },
    pages: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FCover%2Fbia_b.jpg?alt=media&token=a4c21838-2378-47a6-acfc-3fb02fe84f9d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage1%2F1b.jpg?alt=media&token=ca9ed783-611a-4083-b10b-47c5e69ba5b5",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage2%2F2a.jpg?alt=media&token=0fc50a7c-93e8-439c-88e8-a156b3a29d6d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage2%2F2b.jpg?alt=media&token=b318bdf1-3f91-45a8-bb24-de5465ca4689",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage3%2F3a.jpg?alt=media&token=d07d2d29-8e1a-4b63-a886-f494f4b9c2d0",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage3%2F3b.jpg?alt=media&token=12920a4f-78bd-4e3e-ad3d-f02f98979a4a",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage4%2F4a.jpg?alt=media&token=5be77b88-f959-44b0-8ce7-730a1a093607",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage4%2F4b.jpg?alt=media&token=4c0125e6-26e8-4f71-bc97-ef6749dc6489",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage5%2F5a.jpg?alt=media&token=4c2ec405-7b38-4645-819c-ce5384fc5787",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage5%2F5b.jpg?alt=media&token=5bcdbaa7-ee21-4ad3-bc1e-16db539dbc719",
      },

      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage6%2F6a.jpg?alt=media&token=f0b8f8ba-27da-47a2-8758-27ccf8a1dd2d",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage6%2F6b.jpg?alt=media&token=704cdd86-903f-4daa-aa6c-e6e5fed7de8b",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage7%2F7a.jpg?alt=media&token=1b1dd18f-4c5b-4358-8bda-386e6a6f8b85",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage7%2F7b.jpg?alt=media&token=88a7f50a-1624-4da4-afb4-ce5167270ede",
      },
    ],
    audio:
      "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage1%2F1.mp3?alt=media&token=087277e2-1350-40da-a79a-5bce8f8c33c5",
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
    name: "Voluptatum aliquam",
  },
  pages: [
    { image: "https://source.unsplash.com/random/?anime" },
    { image: "https://source.unsplash.com/random/?girl" },
    { image: "https://source.unsplash.com/random/?nature" },
    { image: "https://source.unsplash.com/random/?forest" },
    { image: "https://source.unsplash.com/random/?water" },
  ],
  audio:
    "https://firebasestorage.googleapis.com/v0/b/fairytalesci65.appspot.com/o/Chu%C3%B4ng%20Gi%C3%B3%20K%E1%BA%B9o%20Ng%E1%BB%8Dt%2FPage1%2F1.mp3?alt=media&token=087277e2-1350-40da-a79a-5bce8f8c33c5",
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
