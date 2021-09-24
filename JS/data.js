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
    id: "00",
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
    id: "01",
    name: "Ai đáng khen hơn",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ở một nhà kia có hai anh em thỏ sống cùng mẹ.\nBố đi làm việc xa nên cậu nào cũng tỏ ra là đứa con biết thương mẹ nhất và đáng khen nhiều nhất.\nThỏ anh biết mình lớn hơn nên lúc nào cũng nhường nhịn em. Song thỏ em thì ngược lại, thỏ em thích mình ngoan hơn anh, được mẹ khen mình nhiều hơn anh.\nMột hôm thỏ mẹ bảo hai anh em đến và nói:\n- Hôm nay các con được nghỉ học. Mẹ muốn thỏ anh lên rừng hái mười chiếc nấm hương, còn thỏ em thì ra đồng cỏ hái mười bông hoa đồng tiền mang về cho mẹ. Các con đi phải cẩn thận, đừng có rong chơi, la cà nhé.\nHai anh em vâng lời, hăng hái đi ngay, thỏ em hăm hở chạy một mạch ra đồng cỏ. Cậu ta mải miết đến nỗi không nhìn ngắm gì, không để ý đến việc gì ở xung quanh.\nTới nơi, thỏ em chưa vội hái ngay những bông hoa vừa trông thấy, mà đi từ gốc này đến gốc khác, chọn những bông hoa tươi tắn nhất, đẹp nhất mới hái về.\nHái đủ 10 bông, thỏ em vui vẻ đi về, cậu vừa đi vừa hát.\nBỗng cậu thấy sóc nâu đang đứng khóc bên đường. Thỏ em dừng lại nghĩ bụng: <br>'Ôi sóc vàng, sao em ấy đứng đây khóc vậy ta? Chắc em ấy hư, bị mẹ đánh đòn. Thôi mình phải về mau, kẻo mẹ lại mong.'\nĐược một đoạn thì gặp nhím nâu.<br>Nhím nâu hỏi:<br>- Này, thỏ em đi đâu mà vội vàng vậy.<br>Thỏ em trả lời: <br>- Mình mang hoa về cho mẹ.\nNhím nâu nói: <br>- Ôi, những bông hoa của bạn đẹp quá. Bạn có thể cho mình một bông được không?\nThỏ em ôm lấy bó hoa và nói: <br>- Không được đâu, mẹ mình nói hái đủ 10 bông hoa, mình chỉ hái đủ bấy nhiêu thôi. Không thể cho bạn được. Thôi mình đi đây. Chào bạn nhé.\nThỏ mẹ đang ngồi cắt những củ cà rốt thì thỏ em vừa về đến nhà reo lên:<br>- Mẹ ơi! con về rồi này! Con mang những bông hoa to và đẹp nhất tặng cho mẹ đó!\nThỏ mẹ đón lấy bó hoa, xuýt xoa khen thỏ em:<br>- Ôi, hoa đẹp quá! Con của mẹ giỏi lắm!<br>- Con kể mẹ nghe. Trên đường đi, con có gặp ai, hay thấy gì không? - Thỏ mẹ gặng hỏi.\n- Có, có mẹ ạ. Con thấy em sóc vàng đứng khóc bên đường, em ý hư nhỉ mẹ nhỉ? - Thỏ con nhanh nhảu\n- Vậy con có hỏi vì sao em khóc không con? - Thỏ mẹ hỏi thỏ con.\n Thỏ con trả lời: <br>- Dạ không. Con chỉ muốn trở về thật nhanh mang hoa về cho mẹ. Con sợ mẹ ở nhà mong con.\nThỏ mẹ hỏi tiếp:<br>- Thế con có gặp ai nữa không?<br>- Có bạn nhím hỏi xin con một bông hoa. Nhưng con không cho. Con hái đúng 10 bông hoa mang về cho mẹ thôi.<br>Nghe xong thỏ mẹ không khỏi ngạc nhiên, mỉm cười và không hỏi gì thêm.\nLúc lâu sau thỏ anh mới trở về, đem theo một giỏ đầy những nấm hương, lại có cả hạt dẻ mang về làm quà cho thỏ em.\n- Thưa mẹ, con mới về ạ.\n- Thỏ em ơi anh có quà cho em đây. Đúng món hạt dẻ em thích nhé.<br> Thỏ em vui mừng reo lên: <br>- Ôi, thích quá. Em cảm ơn anh.\nThỏ mẹ hỏi:- Sao con hái nhiều nấm thế?<br>Thỏ anh thưa:<br>- Dạ, cũng một công đi, con hái nhiều để lần sau có cần đến, mẹ đỡ phải vào rừng ạ.\nThỏ mẹ lại hỏi sao thỏ anh về muộn thế.<br>Thỏ anh thưa rằng,trên đường về cậu ấy đã giúp cô gà mái tìm cậu gà nhiếp đi lạc. Sau đó, thỏ anh giúp cô gà mái dẫn đàn con về để khỏi bị lạc lần nữa.\nGà mái gọi:- Cục tác, gà nhiếp ơi, con đâu rồi.<br>Thỏ anh đáp:- Cô gà mái ơi, cháu tìm thấy gà nhiếp rồi đây ạ.\nNghe thỏ anh nói xong, thỏ mẹ mỉm cười nói với hai anh em đến:<br>- Các con rất đáng khen, biết vâng lời mẹ. Thỏ em luôn luôn nghĩ đến mẹ là đúng rồi. Song thỏ anh đáng khen hơn, vì ngoài mẹ ra còn biết nghĩ đến người khác nữa.<br>Thỏ mẹ nhìn và vuốt đầu thỏ em nói:<br>- Thỏ em ơi, làm những việc tốt không chỉ để được khen đâu mà để giúp ích cho người khác nữa con nhé.<br>Thỏ em hiểu ra, bẽn lẽn nói:<br>- Thưa mẹ,vâng ạ!\nHai anh em đồng thanh nói:<br>- Chúng con hứa sẽ vâng lời mẹ, luôn ngoan ngoãn và giúp đỡ mọi người ạ.`,
    categories: ["Kid", "Education", "Family"],
    date: "24/9/2021",
    views: 100,
    length: "6:03",
    author: {
      image: "../IMG/authors/logo-author.png",
      name: "Kể bé nghe",
    },
    pagesNum: 27, //số lượng ảnh(.png) trong file Pages, kể cả ảnh bìa, ảnh được đặt tên 00, 01,... 10,...
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
    id: "03",
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
    id: "04",
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
    id: "05",
    name: "Dê đen và dê trắng",
    // desc: cần tách \n cho đúng mạch truyện
    desc: `Ngày xửa ngày xưa, ở một khu rừng nọ có một con dê mẹ và 7 chú dê con.Họ sống với nhau hạnh phúc trong một ngôi nhà nho nhỏ, xinh xắn và ấm cúng.\nDê mẹ thường phải vào rừng để tìm cỏ non, vì ăn cỏ no thì dê mẹ mới có sữa cho đàn dê con bú.\nMột hôm, khi chuẩn bị đi vào rừng, dê mẹ bèn gọi đàn con lại dặn dò:” Các con ở nhà nhớ khoá chặt cửa. Khi nào mẹ về, nghe thấy mẹ đọc bài thơ này thì hẵng mở cửa ra:<br>Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú.\n7 chú dê con vâng lời mẹ đóng chặt cửa. Thế nhưng, có một con chó sói độc ác sống ở gần đó đã nghe thấy lời dặn của dê mẹ.\nSau một hồi tính toán, nó nảy ra ý định lừa dê con mở cửa để ăn thịt các chú.\nSau khi dê mẹ đi khỏi, chó sói liền đến gõ cửa rồi giả giọng dê mẹ:<br>“Dê con ngoan ngoãn<br>Mau mở cửa ra<br>Mẹ đã về nhà<br>Cho các con bú”<br>\nBảy chú dê con nhận ra giọng ồm ồm của chó sói nên đã nhất quyết không mở cửa.\nMột lúc sau, chó sói lại đến và gõ cửa. Lần này nó giả giọng nhẹ nhàng hơn cho giống với giọng dê mẹ.\n Nhưng lần này, nó cũng không vào được ngôi nhà vì những chú dê con thông minh đã đòi sói phải cho xem móng. Khi thấy móng chân đen xì của con sói, các chú đã không cho nó vào.\nChó sói nham hiểm liền đến tiệm bánh mua bột mỳ trắng và xoa vào móng vuốt của mình.\nKhi nó đến gõ cửa lần thứ ba, những chú dê con nhìn thấy bộ móng màu trắng và cứ tưởng rằng đó là mẹ của mình.\nDê con mở cửa cho sói vào nhà và nó lao đến và nuốt chửng cả bầy dê vào bụng,\nmay thay chú dê bé nhất trốn thoát được.\nNo nê, con sói độc ác tìm một gốc cây rồi lăn ra ngủ.\nKhi ấy, dê mẹ trở về và chú dê bé nhất nhào vào lòng mẹ nức nở.\nDê mẹ liền mổ bụng sói ra. Lần lượt từng chú dê con nhảy ra. Dê mẹ bảo dê con lấy đá nhét vào bụng sói và khâu lại.\nKhi chó sói tỉnh dậy nó cảm thấy vô cùng khát nước, nó lần mò ra giếng uống nước.\nVì trong bụng nặng trĩu toàn đá là đá nên nó bị rơi tòm xuống giếng. Thế là hết đời con sói gian ác.`,
    categories: ["Kid", "Education", "Motivation"],
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
    name: "Ngôi nhà của ong mật",
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
    id: "08",
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
    id: "09",
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

