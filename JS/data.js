export let user = {
  role: "user",
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
    id: "01",
    name: "Chó sói và đàn dê",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ngày xửa ngày xưa, ở một khu rừng nọ có một con dê mẹ và 7 chú dê con.Họ sống với nhau hạnh phúc trong một ngôi nhà nho nhỏ, xinh xắn và ấm cúng.\nDê mẹ thường phải vào rừng để tìm cỏ non, vì ăn cỏ no thì dê mẹ mới có sữa cho đàn dê con bú.\nMột hôm, khi chuẩn bị đi vào rừng, dê mẹ bèn gọi đàn con lại dặn dò:” Các con ở nhà nhớ khoá chặt cửa. Khi nào mẹ về, nghe thấy mẹ đọc bài thơ này thì hẵng mở cửa ra:<br>Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú.\n7 chú dê con vâng lời mẹ đóng chặt cửa. Thế nhưng, có một con chó sói độc ác sống ở gần đó đã nghe thấy lời dặn của dê mẹ.\nSau một hồi tính toán, nó nảy ra ý định lừa dê con mở cửa để ăn thịt các chú.\nSau khi dê mẹ đi khỏi, chó sói liền đến gõ cửa rồi giả giọng dê mẹ:<br>“Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú”<br>\nBảy chú dê con nhận ra giọng ồm ồm của chó sói nên đã nhất quyết không mở cửa.\nMột lúc sau, chó sói lại đến và gõ cửa. Lần này nó giả giọng nhẹ nhàng hơn cho giống với giọng dê mẹ.\n Nhưng lần này, nó cũng không vào được ngôi nhà vì những chú dê con thông minh đã đòi sói phải cho xem móng. Khi thấy móng chân đen xì của con sói, các chú đã không cho nó vào.\nChó sói nham hiểm liền đến tiệm bánh mua bột mỳ trắng và xoa vào móng vuốt của mình.\nKhi nó đến gõ cửa lần thứ ba, những chú dê con nhìn thấy bộ móng màu trắng và cứ tưởng rằng đó là mẹ của mình.\nDê con mở cửa cho sói vào nhà và nó lao đến và nuốt chửng cả bầy dê vào bụng,\nmay thay chú dê bé nhất trốn thoát được.\nNo nê, con sói độc ác tìm một gốc cây rồi lăn ra ngủ.\nKhi ấy, dê mẹ trở về và chú dê bé nhất nhào vào lòng mẹ nức nở.\nDê mẹ liền mổ bụng sói ra. Lần lượt từng chú dê con nhảy ra. Dê mẹ bảo dê con lấy đá nhét vào bụng sói và khâu lại.\nKhi chó sói tỉnh dậy nó cảm thấy vô cùng khát nước, nó lần mò ra giếng uống nước.\nVì trong bụng nặng trĩu toàn đá là đá nên nó bị rơi tòm xuống giếng. Thế là hết đời con sói gian ác.`,
    categories: ["Kid", "Education"],
    date: "24/9/2021",
    views: 100,
    length: "2:59",
    author: {
      image: "../IMG/authors/logo-author.png",
      name: "Kể bé nghe",
    },
    pagesNum: 19, //số lượng ảnh(.png) trong file Pages, kể cả ảnh bìa, ảnh được đặt tên 00, 01,... 10,...
    pages: [],
    audio: "", // file audio đặt bên ngoài folder truyện
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
    name: "Ai đáng khen nhiều hơn",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ngày xửa ngày xưa, ở một khu rừng nọ có một con dê mẹ và 7 chú dê con.Họ sống với nhau hạnh phúc trong một ngôi nhà nho nhỏ, xinh xắn và ấm cúng.\nDê mẹ thường phải vào rừng để tìm cỏ non, vì ăn cỏ no thì dê mẹ mới có sữa cho đàn dê con bú.\nMột hôm, khi chuẩn bị đi vào rừng, dê mẹ bèn gọi đàn con lại dặn dò:” Các con ở nhà nhớ khoá chặt cửa. Khi nào mẹ về, nghe thấy mẹ đọc bài thơ này thì hẵng mở cửa ra:<br>Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú.\n7 chú dê con vâng lời mẹ đóng chặt cửa. Thế nhưng, có một con chó sói độc ác sống ở gần đó đã nghe thấy lời dặn của dê mẹ.\nSau một hồi tính toán, nó nảy ra ý định lừa dê con mở cửa để ăn thịt các chú.\nSau khi dê mẹ đi khỏi, chó sói liền đến gõ cửa rồi giả giọng dê mẹ:<br>“Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú”<br>\nBảy chú dê con nhận ra giọng ồm ồm của chó sói nên đã nhất quyết không mở cửa.\nMột lúc sau, chó sói lại đến và gõ cửa. Lần này nó giả giọng nhẹ nhàng hơn cho giống với giọng dê mẹ.\n Nhưng lần này, nó cũng không vào được ngôi nhà vì những chú dê con thông minh đã đòi sói phải cho xem móng. Khi thấy móng chân đen xì của con sói, các chú đã không cho nó vào.\nChó sói nham hiểm liền đến tiệm bánh mua bột mỳ trắng và xoa vào móng vuốt của mình.\nKhi nó đến gõ cửa lần thứ ba, những chú dê con nhìn thấy bộ móng màu trắng và cứ tưởng rằng đó là mẹ của mình.\nDê con mở cửa cho sói vào nhà và nó lao đến và nuốt chửng cả bầy dê vào bụng,\nmay thay chú dê bé nhất trốn thoát được.\nNo nê, con sói độc ác tìm một gốc cây rồi lăn ra ngủ.\nKhi ấy, dê mẹ trở về và chú dê bé nhất nhào vào lòng mẹ nức nở.\nDê mẹ liền mổ bụng sói ra. Lần lượt từng chú dê con nhảy ra. Dê mẹ bảo dê con lấy đá nhét vào bụng sói và khâu lại.\nKhi chó sói tỉnh dậy nó cảm thấy vô cùng khát nước, nó lần mò ra giếng uống nước.\nVì trong bụng nặng trĩu toàn đá là đá nên nó bị rơi tòm xuống giếng. Thế là hết đời con sói gian ác.`,
    categories: ["Kid", "Education"],
    date: "24/9/2021",
    views: 100,
    length: "2:59",
    author: {
      image: "../IMG/authors/logo-author.png",
      name: "Kể bé nghe",
    },
    pagesNum: 19, //số lượng ảnh(.png) trong file Pages, kể cả ảnh bìa, ảnh được đặt tên 00, 01,... 10,...
    pages: [],
    audio: "", // file audio đặt bên ngoài folder truyện
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
    name: "Cáo thỏ và gà trống",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ngày xửa ngày xưa, ở một khu rừng nọ có một con dê mẹ và 7 chú dê con.Họ sống với nhau hạnh phúc trong một ngôi nhà nho nhỏ, xinh xắn và ấm cúng.\nDê mẹ thường phải vào rừng để tìm cỏ non, vì ăn cỏ no thì dê mẹ mới có sữa cho đàn dê con bú.\nMột hôm, khi chuẩn bị đi vào rừng, dê mẹ bèn gọi đàn con lại dặn dò:” Các con ở nhà nhớ khoá chặt cửa. Khi nào mẹ về, nghe thấy mẹ đọc bài thơ này thì hẵng mở cửa ra:<br>Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú.\n7 chú dê con vâng lời mẹ đóng chặt cửa. Thế nhưng, có một con chó sói độc ác sống ở gần đó đã nghe thấy lời dặn của dê mẹ.\nSau một hồi tính toán, nó nảy ra ý định lừa dê con mở cửa để ăn thịt các chú.\nSau khi dê mẹ đi khỏi, chó sói liền đến gõ cửa rồi giả giọng dê mẹ:<br>“Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú”<br>\nBảy chú dê con nhận ra giọng ồm ồm của chó sói nên đã nhất quyết không mở cửa.\nMột lúc sau, chó sói lại đến và gõ cửa. Lần này nó giả giọng nhẹ nhàng hơn cho giống với giọng dê mẹ.\n Nhưng lần này, nó cũng không vào được ngôi nhà vì những chú dê con thông minh đã đòi sói phải cho xem móng. Khi thấy móng chân đen xì của con sói, các chú đã không cho nó vào.\nChó sói nham hiểm liền đến tiệm bánh mua bột mỳ trắng và xoa vào móng vuốt của mình.\nKhi nó đến gõ cửa lần thứ ba, những chú dê con nhìn thấy bộ móng màu trắng và cứ tưởng rằng đó là mẹ của mình.\nDê con mở cửa cho sói vào nhà và nó lao đến và nuốt chửng cả bầy dê vào bụng,\nmay thay chú dê bé nhất trốn thoát được.\nNo nê, con sói độc ác tìm một gốc cây rồi lăn ra ngủ.\nKhi ấy, dê mẹ trở về và chú dê bé nhất nhào vào lòng mẹ nức nở.\nDê mẹ liền mổ bụng sói ra. Lần lượt từng chú dê con nhảy ra. Dê mẹ bảo dê con lấy đá nhét vào bụng sói và khâu lại.\nKhi chó sói tỉnh dậy nó cảm thấy vô cùng khát nước, nó lần mò ra giếng uống nước.\nVì trong bụng nặng trĩu toàn đá là đá nên nó bị rơi tòm xuống giếng. Thế là hết đời con sói gian ác.`,
    categories: ["Kid", "Education"],
    date: "24/9/2021",
    views: 100,
    length: "2:59",
    author: {
      image: "../IMG/authors/logo-author.png",
      name: "Kể bé nghe",
    },
    pagesNum: 19, //số lượng ảnh(.png) trong file Pages, kể cả ảnh bìa, ảnh được đặt tên 00, 01,... 10,...
    pages: [],
    audio: "", // file audio đặt bên ngoài folder truyện
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
    name: "Cáo và sói",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ngày xửa ngày xưa, ở một khu rừng nọ có một con dê mẹ và 7 chú dê con.Họ sống với nhau hạnh phúc trong một ngôi nhà nho nhỏ, xinh xắn và ấm cúng.\nDê mẹ thường phải vào rừng để tìm cỏ non, vì ăn cỏ no thì dê mẹ mới có sữa cho đàn dê con bú.\nMột hôm, khi chuẩn bị đi vào rừng, dê mẹ bèn gọi đàn con lại dặn dò:” Các con ở nhà nhớ khoá chặt cửa. Khi nào mẹ về, nghe thấy mẹ đọc bài thơ này thì hẵng mở cửa ra:<br>Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú.\n7 chú dê con vâng lời mẹ đóng chặt cửa. Thế nhưng, có một con chó sói độc ác sống ở gần đó đã nghe thấy lời dặn của dê mẹ.\nSau một hồi tính toán, nó nảy ra ý định lừa dê con mở cửa để ăn thịt các chú.\nSau khi dê mẹ đi khỏi, chó sói liền đến gõ cửa rồi giả giọng dê mẹ:<br>“Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú”<br>\nBảy chú dê con nhận ra giọng ồm ồm của chó sói nên đã nhất quyết không mở cửa.\nMột lúc sau, chó sói lại đến và gõ cửa. Lần này nó giả giọng nhẹ nhàng hơn cho giống với giọng dê mẹ.\n Nhưng lần này, nó cũng không vào được ngôi nhà vì những chú dê con thông minh đã đòi sói phải cho xem móng. Khi thấy móng chân đen xì của con sói, các chú đã không cho nó vào.\nChó sói nham hiểm liền đến tiệm bánh mua bột mỳ trắng và xoa vào móng vuốt của mình.\nKhi nó đến gõ cửa lần thứ ba, những chú dê con nhìn thấy bộ móng màu trắng và cứ tưởng rằng đó là mẹ của mình.\nDê con mở cửa cho sói vào nhà và nó lao đến và nuốt chửng cả bầy dê vào bụng,\nmay thay chú dê bé nhất trốn thoát được.\nNo nê, con sói độc ác tìm một gốc cây rồi lăn ra ngủ.\nKhi ấy, dê mẹ trở về và chú dê bé nhất nhào vào lòng mẹ nức nở.\nDê mẹ liền mổ bụng sói ra. Lần lượt từng chú dê con nhảy ra. Dê mẹ bảo dê con lấy đá nhét vào bụng sói và khâu lại.\nKhi chó sói tỉnh dậy nó cảm thấy vô cùng khát nước, nó lần mò ra giếng uống nước.\nVì trong bụng nặng trĩu toàn đá là đá nên nó bị rơi tòm xuống giếng. Thế là hết đời con sói gian ác.`,
    categories: ["Kid", "Education"],
    date: "24/9/2021",
    views: 100,
    length: "2:59",
    author: {
      image: "../IMG/authors/logo-author.png",
      name: "Kể bé nghe",
    },
    pagesNum: 19, //số lượng ảnh(.png) trong file Pages, kể cả ảnh bìa, ảnh được đặt tên 00, 01,... 10,...
    pages: [],
    audio: "", // file audio đặt bên ngoài folder truyện
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
    id: "05",
    name: "Câu chuyện về tình bạn",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ngày xửa ngày xưa, ở một khu rừng nọ có một con dê mẹ và 7 chú dê con.Họ sống với nhau hạnh phúc trong một ngôi nhà nho nhỏ, xinh xắn và ấm cúng.\nDê mẹ thường phải vào rừng để tìm cỏ non, vì ăn cỏ no thì dê mẹ mới có sữa cho đàn dê con bú.\nMột hôm, khi chuẩn bị đi vào rừng, dê mẹ bèn gọi đàn con lại dặn dò:” Các con ở nhà nhớ khoá chặt cửa. Khi nào mẹ về, nghe thấy mẹ đọc bài thơ này thì hẵng mở cửa ra:<br>Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú.\n7 chú dê con vâng lời mẹ đóng chặt cửa. Thế nhưng, có một con chó sói độc ác sống ở gần đó đã nghe thấy lời dặn của dê mẹ.\nSau một hồi tính toán, nó nảy ra ý định lừa dê con mở cửa để ăn thịt các chú.\nSau khi dê mẹ đi khỏi, chó sói liền đến gõ cửa rồi giả giọng dê mẹ:<br>“Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú”<br>\nBảy chú dê con nhận ra giọng ồm ồm của chó sói nên đã nhất quyết không mở cửa.\nMột lúc sau, chó sói lại đến và gõ cửa. Lần này nó giả giọng nhẹ nhàng hơn cho giống với giọng dê mẹ.\n Nhưng lần này, nó cũng không vào được ngôi nhà vì những chú dê con thông minh đã đòi sói phải cho xem móng. Khi thấy móng chân đen xì của con sói, các chú đã không cho nó vào.\nChó sói nham hiểm liền đến tiệm bánh mua bột mỳ trắng và xoa vào móng vuốt của mình.\nKhi nó đến gõ cửa lần thứ ba, những chú dê con nhìn thấy bộ móng màu trắng và cứ tưởng rằng đó là mẹ của mình.\nDê con mở cửa cho sói vào nhà và nó lao đến và nuốt chửng cả bầy dê vào bụng,\nmay thay chú dê bé nhất trốn thoát được.\nNo nê, con sói độc ác tìm một gốc cây rồi lăn ra ngủ.\nKhi ấy, dê mẹ trở về và chú dê bé nhất nhào vào lòng mẹ nức nở.\nDê mẹ liền mổ bụng sói ra. Lần lượt từng chú dê con nhảy ra. Dê mẹ bảo dê con lấy đá nhét vào bụng sói và khâu lại.\nKhi chó sói tỉnh dậy nó cảm thấy vô cùng khát nước, nó lần mò ra giếng uống nước.\nVì trong bụng nặng trĩu toàn đá là đá nên nó bị rơi tòm xuống giếng. Thế là hết đời con sói gian ác.`,
    categories: ["Kid", "Education"],
    date: "24/9/2021",
    views: 100,
    length: "2:59",
    author: {
      image: "../IMG/authors/logo-author.png",
      name: "Kể bé nghe",
    },
    pagesNum: 19, //số lượng ảnh(.png) trong file Pages, kể cả ảnh bìa, ảnh được đặt tên 00, 01,... 10,...
    pages: [],
    audio: "", // file audio đặt bên ngoài folder truyện
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
    id: "06",
    name: "Dê đen và dê trắng",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ngày xửa ngày xưa, ở một khu rừng nọ có một con dê mẹ và 7 chú dê con.Họ sống với nhau hạnh phúc trong một ngôi nhà nho nhỏ, xinh xắn và ấm cúng.\nDê mẹ thường phải vào rừng để tìm cỏ non, vì ăn cỏ no thì dê mẹ mới có sữa cho đàn dê con bú.\nMột hôm, khi chuẩn bị đi vào rừng, dê mẹ bèn gọi đàn con lại dặn dò:” Các con ở nhà nhớ khoá chặt cửa. Khi nào mẹ về, nghe thấy mẹ đọc bài thơ này thì hẵng mở cửa ra:<br>Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú.\n7 chú dê con vâng lời mẹ đóng chặt cửa. Thế nhưng, có một con chó sói độc ác sống ở gần đó đã nghe thấy lời dặn của dê mẹ.\nSau một hồi tính toán, nó nảy ra ý định lừa dê con mở cửa để ăn thịt các chú.\nSau khi dê mẹ đi khỏi, chó sói liền đến gõ cửa rồi giả giọng dê mẹ:<br>“Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú”<br>\nBảy chú dê con nhận ra giọng ồm ồm của chó sói nên đã nhất quyết không mở cửa.\nMột lúc sau, chó sói lại đến và gõ cửa. Lần này nó giả giọng nhẹ nhàng hơn cho giống với giọng dê mẹ.\n Nhưng lần này, nó cũng không vào được ngôi nhà vì những chú dê con thông minh đã đòi sói phải cho xem móng. Khi thấy móng chân đen xì của con sói, các chú đã không cho nó vào.\nChó sói nham hiểm liền đến tiệm bánh mua bột mỳ trắng và xoa vào móng vuốt của mình.\nKhi nó đến gõ cửa lần thứ ba, những chú dê con nhìn thấy bộ móng màu trắng và cứ tưởng rằng đó là mẹ của mình.\nDê con mở cửa cho sói vào nhà và nó lao đến và nuốt chửng cả bầy dê vào bụng,\nmay thay chú dê bé nhất trốn thoát được.\nNo nê, con sói độc ác tìm một gốc cây rồi lăn ra ngủ.\nKhi ấy, dê mẹ trở về và chú dê bé nhất nhào vào lòng mẹ nức nở.\nDê mẹ liền mổ bụng sói ra. Lần lượt từng chú dê con nhảy ra. Dê mẹ bảo dê con lấy đá nhét vào bụng sói và khâu lại.\nKhi chó sói tỉnh dậy nó cảm thấy vô cùng khát nước, nó lần mò ra giếng uống nước.\nVì trong bụng nặng trĩu toàn đá là đá nên nó bị rơi tòm xuống giếng. Thế là hết đời con sói gian ác.`,
    categories: ["Kid", "Education"],
    date: "24/9/2021",
    views: 100,
    length: "2:59",
    author: {
      image: "../IMG/authors/logo-author.png",
      name: "Kể bé nghe",
    },
    pagesNum: 19, //số lượng ảnh(.png) trong file Pages, kể cả ảnh bìa, ảnh được đặt tên 00, 01,... 10,...
    pages: [],
    audio: "", // file audio đặt bên ngoài folder truyện
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
    id: "07",
    name: "Ngôi nhà của chú ong mật",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ngày xửa ngày xưa, ở một khu rừng nọ có một con dê mẹ và 7 chú dê con.Họ sống với nhau hạnh phúc trong một ngôi nhà nho nhỏ, xinh xắn và ấm cúng.\nDê mẹ thường phải vào rừng để tìm cỏ non, vì ăn cỏ no thì dê mẹ mới có sữa cho đàn dê con bú.\nMột hôm, khi chuẩn bị đi vào rừng, dê mẹ bèn gọi đàn con lại dặn dò:” Các con ở nhà nhớ khoá chặt cửa. Khi nào mẹ về, nghe thấy mẹ đọc bài thơ này thì hẵng mở cửa ra:<br>Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú.\n7 chú dê con vâng lời mẹ đóng chặt cửa. Thế nhưng, có một con chó sói độc ác sống ở gần đó đã nghe thấy lời dặn của dê mẹ.\nSau một hồi tính toán, nó nảy ra ý định lừa dê con mở cửa để ăn thịt các chú.\nSau khi dê mẹ đi khỏi, chó sói liền đến gõ cửa rồi giả giọng dê mẹ:<br>“Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú”<br>\nBảy chú dê con nhận ra giọng ồm ồm của chó sói nên đã nhất quyết không mở cửa.\nMột lúc sau, chó sói lại đến và gõ cửa. Lần này nó giả giọng nhẹ nhàng hơn cho giống với giọng dê mẹ.\n Nhưng lần này, nó cũng không vào được ngôi nhà vì những chú dê con thông minh đã đòi sói phải cho xem móng. Khi thấy móng chân đen xì của con sói, các chú đã không cho nó vào.\nChó sói nham hiểm liền đến tiệm bánh mua bột mỳ trắng và xoa vào móng vuốt của mình.\nKhi nó đến gõ cửa lần thứ ba, những chú dê con nhìn thấy bộ móng màu trắng và cứ tưởng rằng đó là mẹ của mình.\nDê con mở cửa cho sói vào nhà và nó lao đến và nuốt chửng cả bầy dê vào bụng,\nmay thay chú dê bé nhất trốn thoát được.\nNo nê, con sói độc ác tìm một gốc cây rồi lăn ra ngủ.\nKhi ấy, dê mẹ trở về và chú dê bé nhất nhào vào lòng mẹ nức nở.\nDê mẹ liền mổ bụng sói ra. Lần lượt từng chú dê con nhảy ra. Dê mẹ bảo dê con lấy đá nhét vào bụng sói và khâu lại.\nKhi chó sói tỉnh dậy nó cảm thấy vô cùng khát nước, nó lần mò ra giếng uống nước.\nVì trong bụng nặng trĩu toàn đá là đá nên nó bị rơi tòm xuống giếng. Thế là hết đời con sói gian ác.`,
    categories: ["Kid", "Education"],
    date: "24/9/2021",
    views: 100,
    length: "2:59",
    author: {
      image: "../IMG/authors/logo-author.png",
      name: "Kể bé nghe",
    },
    pagesNum: 19, //số lượng ảnh(.png) trong file Pages, kể cả ảnh bìa, ảnh được đặt tên 00, 01,... 10,...
    pages: [],
    audio: "", // file audio đặt bên ngoài folder truyện
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
    id: "08",
    name: "Người mẹ ích kỉ",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ngày xửa ngày xưa, ở một khu rừng nọ có một con dê mẹ và 7 chú dê con.Họ sống với nhau hạnh phúc trong một ngôi nhà nho nhỏ, xinh xắn và ấm cúng.\nDê mẹ thường phải vào rừng để tìm cỏ non, vì ăn cỏ no thì dê mẹ mới có sữa cho đàn dê con bú.\nMột hôm, khi chuẩn bị đi vào rừng, dê mẹ bèn gọi đàn con lại dặn dò:” Các con ở nhà nhớ khoá chặt cửa. Khi nào mẹ về, nghe thấy mẹ đọc bài thơ này thì hẵng mở cửa ra:<br>Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú.\n7 chú dê con vâng lời mẹ đóng chặt cửa. Thế nhưng, có một con chó sói độc ác sống ở gần đó đã nghe thấy lời dặn của dê mẹ.\nSau một hồi tính toán, nó nảy ra ý định lừa dê con mở cửa để ăn thịt các chú.\nSau khi dê mẹ đi khỏi, chó sói liền đến gõ cửa rồi giả giọng dê mẹ:<br>“Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú”<br>\nBảy chú dê con nhận ra giọng ồm ồm của chó sói nên đã nhất quyết không mở cửa.\nMột lúc sau, chó sói lại đến và gõ cửa. Lần này nó giả giọng nhẹ nhàng hơn cho giống với giọng dê mẹ.\n Nhưng lần này, nó cũng không vào được ngôi nhà vì những chú dê con thông minh đã đòi sói phải cho xem móng. Khi thấy móng chân đen xì của con sói, các chú đã không cho nó vào.\nChó sói nham hiểm liền đến tiệm bánh mua bột mỳ trắng và xoa vào móng vuốt của mình.\nKhi nó đến gõ cửa lần thứ ba, những chú dê con nhìn thấy bộ móng màu trắng và cứ tưởng rằng đó là mẹ của mình.\nDê con mở cửa cho sói vào nhà và nó lao đến và nuốt chửng cả bầy dê vào bụng,\nmay thay chú dê bé nhất trốn thoát được.\nNo nê, con sói độc ác tìm một gốc cây rồi lăn ra ngủ.\nKhi ấy, dê mẹ trở về và chú dê bé nhất nhào vào lòng mẹ nức nở.\nDê mẹ liền mổ bụng sói ra. Lần lượt từng chú dê con nhảy ra. Dê mẹ bảo dê con lấy đá nhét vào bụng sói và khâu lại.\nKhi chó sói tỉnh dậy nó cảm thấy vô cùng khát nước, nó lần mò ra giếng uống nước.\nVì trong bụng nặng trĩu toàn đá là đá nên nó bị rơi tòm xuống giếng. Thế là hết đời con sói gian ác.`,
    categories: ["Kid", "Family", "Education"],
    date: "24/9/2021",
    views: 100,
    length: "2:59",
    author: {
      image: "../IMG/authors/logo-author.png",
      name: "Kể bé nghe",
    },
    pagesNum: 19, //số lượng ảnh(.png) trong file Pages, kể cả ảnh bìa, ảnh được đặt tên 00, 01,... 10,...
    pages: [],
    audio: "", // file audio đặt bên ngoài folder truyện
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
    id: "09",
    name: "Thánh gióng",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ngày xửa ngày xưa, ở một khu rừng nọ có một con dê mẹ và 7 chú dê con.Họ sống với nhau hạnh phúc trong một ngôi nhà nho nhỏ, xinh xắn và ấm cúng.\nDê mẹ thường phải vào rừng để tìm cỏ non, vì ăn cỏ no thì dê mẹ mới có sữa cho đàn dê con bú.\nMột hôm, khi chuẩn bị đi vào rừng, dê mẹ bèn gọi đàn con lại dặn dò:” Các con ở nhà nhớ khoá chặt cửa. Khi nào mẹ về, nghe thấy mẹ đọc bài thơ này thì hẵng mở cửa ra:<br>Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú.\n7 chú dê con vâng lời mẹ đóng chặt cửa. Thế nhưng, có một con chó sói độc ác sống ở gần đó đã nghe thấy lời dặn của dê mẹ.\nSau một hồi tính toán, nó nảy ra ý định lừa dê con mở cửa để ăn thịt các chú.\nSau khi dê mẹ đi khỏi, chó sói liền đến gõ cửa rồi giả giọng dê mẹ:<br>“Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú”<br>\nBảy chú dê con nhận ra giọng ồm ồm của chó sói nên đã nhất quyết không mở cửa.\nMột lúc sau, chó sói lại đến và gõ cửa. Lần này nó giả giọng nhẹ nhàng hơn cho giống với giọng dê mẹ.\n Nhưng lần này, nó cũng không vào được ngôi nhà vì những chú dê con thông minh đã đòi sói phải cho xem móng. Khi thấy móng chân đen xì của con sói, các chú đã không cho nó vào.\nChó sói nham hiểm liền đến tiệm bánh mua bột mỳ trắng và xoa vào móng vuốt của mình.\nKhi nó đến gõ cửa lần thứ ba, những chú dê con nhìn thấy bộ móng màu trắng và cứ tưởng rằng đó là mẹ của mình.\nDê con mở cửa cho sói vào nhà và nó lao đến và nuốt chửng cả bầy dê vào bụng,\nmay thay chú dê bé nhất trốn thoát được.\nNo nê, con sói độc ác tìm một gốc cây rồi lăn ra ngủ.\nKhi ấy, dê mẹ trở về và chú dê bé nhất nhào vào lòng mẹ nức nở.\nDê mẹ liền mổ bụng sói ra. Lần lượt từng chú dê con nhảy ra. Dê mẹ bảo dê con lấy đá nhét vào bụng sói và khâu lại.\nKhi chó sói tỉnh dậy nó cảm thấy vô cùng khát nước, nó lần mò ra giếng uống nước.\nVì trong bụng nặng trĩu toàn đá là đá nên nó bị rơi tòm xuống giếng. Thế là hết đời con sói gian ác.`,
    categories: ["Kid", "History"],
    date: "24/9/2021",
    views: 100,
    length: "2:59",
    author: {
      image: "../IMG/authors/logo-author.png",
      name: "Kể bé nghe",
    },
    pagesNum: 19, //số lượng ảnh(.png) trong file Pages, kể cả ảnh bìa, ảnh được đặt tên 00, 01,... 10,...
    pages: [],
    audio: "", // file audio đặt bên ngoài folder truyện
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
    id: "10",
    name: "Thỏ và rùa",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ngày xửa ngày xưa, ở một khu rừng nọ có một con dê mẹ và 7 chú dê con.Họ sống với nhau hạnh phúc trong một ngôi nhà nho nhỏ, xinh xắn và ấm cúng.\nDê mẹ thường phải vào rừng để tìm cỏ non, vì ăn cỏ no thì dê mẹ mới có sữa cho đàn dê con bú.\nMột hôm, khi chuẩn bị đi vào rừng, dê mẹ bèn gọi đàn con lại dặn dò:” Các con ở nhà nhớ khoá chặt cửa. Khi nào mẹ về, nghe thấy mẹ đọc bài thơ này thì hẵng mở cửa ra:<br>Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú.\n7 chú dê con vâng lời mẹ đóng chặt cửa. Thế nhưng, có một con chó sói độc ác sống ở gần đó đã nghe thấy lời dặn của dê mẹ.\nSau một hồi tính toán, nó nảy ra ý định lừa dê con mở cửa để ăn thịt các chú.\nSau khi dê mẹ đi khỏi, chó sói liền đến gõ cửa rồi giả giọng dê mẹ:<br>“Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú”<br>\nBảy chú dê con nhận ra giọng ồm ồm của chó sói nên đã nhất quyết không mở cửa.\nMột lúc sau, chó sói lại đến và gõ cửa. Lần này nó giả giọng nhẹ nhàng hơn cho giống với giọng dê mẹ.\n Nhưng lần này, nó cũng không vào được ngôi nhà vì những chú dê con thông minh đã đòi sói phải cho xem móng. Khi thấy móng chân đen xì của con sói, các chú đã không cho nó vào.\nChó sói nham hiểm liền đến tiệm bánh mua bột mỳ trắng và xoa vào móng vuốt của mình.\nKhi nó đến gõ cửa lần thứ ba, những chú dê con nhìn thấy bộ móng màu trắng và cứ tưởng rằng đó là mẹ của mình.\nDê con mở cửa cho sói vào nhà và nó lao đến và nuốt chửng cả bầy dê vào bụng,\nmay thay chú dê bé nhất trốn thoát được.\nNo nê, con sói độc ác tìm một gốc cây rồi lăn ra ngủ.\nKhi ấy, dê mẹ trở về và chú dê bé nhất nhào vào lòng mẹ nức nở.\nDê mẹ liền mổ bụng sói ra. Lần lượt từng chú dê con nhảy ra. Dê mẹ bảo dê con lấy đá nhét vào bụng sói và khâu lại.\nKhi chó sói tỉnh dậy nó cảm thấy vô cùng khát nước, nó lần mò ra giếng uống nước.\nVì trong bụng nặng trĩu toàn đá là đá nên nó bị rơi tòm xuống giếng. Thế là hết đời con sói gian ác.`,
    categories: ["Kid", "Education"],
    date: "24/9/2021",
    views: 100,
    length: "2:59",
    author: {
      image: "../IMG/authors/logo-author.png",
      name: "Kể bé nghe",
    },
    pagesNum: 19, //số lượng ảnh(.png) trong file Pages, kể cả ảnh bìa, ảnh được đặt tên 00, 01,... 10,...
    pages: [],
    audio: "", // file audio đặt bên ngoài folder truyện
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

