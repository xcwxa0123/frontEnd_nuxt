export default defineEventHandler(async event => {
    const result = await $fetch('http://13.48.28.43:8000/books/list')
    // const result = [
    //     {
    //         "book_title": "【書籍2巻今夏発売】週に一度クラスメイトを買う話",
    //         "boot_auther": "羽田宇佐",
    //         "book_desc": "宮城は週に一度、クラスメイトの仙台に五千円を払う。\n五千円は仙台の三時間を買うためのもので、宮城は彼女に命令をする権利を得る。\nスクールカースト下位の宮城と上位の仙台。学校で交わ…",
    //         "book_href": "/works/1177354054894027232"
    //     },
    //     {
    //         "book_title": "TS公爵令嬢エリザの内政",
    //         "boot_auther": "橋立 読虫",
    //         "book_desc": "王国宰相の邸宅で行われた舞踏会。その中であろうことか王太子を張り倒した令嬢がいた。彼女の名前はエリザベート・クラネッタ。王国有数の貴族であるクラネッタ公爵家の令嬢であり、前世の男…",
    //         "book_href": "/works/4852201425154884881"
    //     },
    //     {
    //         "book_title": "奴隷商異世界を往く〜奴隷商人の娘に転生したんだけど、ホワイトに努めていたら奴隷みんなに慕われ過ぎて売れなくなったので、人材派遣サービスで一旗揚げようと思います〜",
    //         "boot_auther": "テケリ・リ",
    //         "book_desc": "　あたし……俺の名前は八城 要（やしろ かなめ）。\n　日本で暮らしていた社畜で、天涯孤独の独り者だ。\n\n　ある日目を覚ましたら、なんと赤ん坊の身体に生まれ変わっていた。\n\n　赤ん…",
    //         "book_href": "/works/16817139556071887300"
    //     },
    //     {
    //         "book_title": "VTuberになった親友と一緒にがんばる話",
    //         "boot_auther": "森野　ノラ",
    //         "book_desc": "「仕事、辞めた」\n酒とVTuberの放送を追うことだけが生きがいの社畜『彼方』の日常は、幼馴染の少女『寧々』から届いた一通のチャットにより180度変化することになる。\n\n日常を色…",
    //         "book_href": "/works/1177354054885608143"
    //     },
    //     {
    //         "book_title": "百合の間に挟まる男を許さない男がいつの間にか挟まれていた件",
    //         "boot_auther": "みょん",
    //         "book_desc": "その男、百合を愛する男なり。\n\nその男、百合の間に挟まる男を許さず。\n\nしかして何故か、百合に挟まれていた。",
    //         "book_href": "/works/16817139555008769362"
    //     },
    //     {
    //         "book_title": "ふつおたはいりません！",
    //         "boot_auther": "結城十維",
    //         "book_desc": "崖っぷちの売れないアラサー声優『吉岡　奏絵』と、\n売れっ子女子高生声優（生意気）『佐久間　稀莉』が織りなす、\nラジオ番組『これっきりラジオ』が今始まる―。\n\n\n■あらすじ\n\n通帳…",
    //         "book_href": "/works/1177354054886530454"
    //     },
    //     {
    //         "book_title": "どうやら俺は乙女ゲームの世界で汚れ仕事をしていたらしいです。",
    //         "boot_auther": "鳩藍",
    //         "book_desc": "【充電中】コンテスト作品執筆のため、当分の間更新をお休みさせていただきます。\n詳しくは近況ノートをご覧ください。\n\n王国の暗部に所属する転生主人公が、乙女ゲームの世界でメタな推理…",
    //         "book_href": "/works/16816700426459762964"
    //     },
    //     {
    //         "book_title": "「ステータスバグで人生が終わった！！」と思ったら前世の記憶が蘇り日本語で書かれたチートスキルを入手したご令嬢の冒険譚",
    //         "boot_auther": "イ尹口欠",
    //         "book_desc": "イスエンド男爵家の長女クライニアは成人の儀式でステータスが読めないステータスバグに見舞われた。\n貴族の子女にあってステータスバグは死活問題。\n唯一の肉親である父親から勘当され使用…",
    //         "book_href": "/works/16816927861178518353"
    //     },
    //     {
    //         "book_title": "目覚めると私を慕うロリっ娘が、超絶タイプな大人の女性になっていました",
    //         "boot_auther": "みょんみょん",
    //         "book_desc": "　可愛い従姉妹の音羽（おとは）琴（こと）ちゃんを事故から庇って昏睡状態になり。私、音瀬（おとせ）小絃（こいと）が次に目を覚ましたのは……１０年の時が過ぎた世界だった。\n　１０年経…",
    //         "book_href": "/works/16816452220064445522"
    //     },
    //     {
    //         "book_title": "「お前ごときが魔王に勝てると思うな」とガチ勢に勇者パーティを追放されたので、王都で気ままに暮らしたい",
    //         "boot_auther": "kiki",
    //         "book_desc": "少女フラムは、神の予言により、魔王討伐の旅の一員として選ばれることとなった。\n全員が一流の力を持つ勇者一行。しかし、なぜかフラムだけは戦う力を持たず、ステータスも全て0。\n肩身の…",
    //         "book_href": "/works/1177354054884881679"
    //     },
    //     {
    //         "book_title": "私の推しは悪役令嬢。",
    //         "boot_auther": "いのり。",
    //         "book_desc": "「乙女ゲームのヒロインですけど、悪役令嬢のことが好きじゃダメですか？」\n\n乙女ゲーム「Revolution」の世界にヒロイン、レイ＝テイラーとして転生した社畜OL、大橋　零。\n彼…",
    //         "book_href": "/works/1177354054886983971"
    //     },
    //     {
    //         "book_title": "『人斬り』少女、公爵令嬢の護衛になる　～待っていれば強敵がやってくるので好都合です～",
    //         "boot_auther": "笹塔五郎",
    //         "book_desc": "シュリネ・ハザクラは『ある人』を守るために育てられ――その役目が果たされることはなかった。\n護衛の任務に就く当日、その人物は暗殺され、全ての罪はシュリネに擦り付けられたのだ。\n彼…",
    //         "book_href": "/works/16817330648595324574"
    //     },
    //     {
    //         "book_title": "アルケミスト・スタートオーバー ～誰にも愛されず孤独に死んだ天才錬金術師は幼女に転生して人生をやりなおす～",
    //         "boot_auther": "エルトリア",
    //         "book_desc": "孤児からストリートチルドレンとなり、その後も養父に殺害されかけたりと不幸な人生を歩んでいた天才錬金術師グラス＝ディメリア。\n若くして病魔に蝕まれ、死に抗おうと最後の研究を進める彼…",
    //         "book_href": "/works/16816700429263197780"
    //     },
    //     {
    //         "book_title": "異世界民宿幼女",
    //         "boot_auther": "ももるる。",
    //         "book_desc": "【不定期更新】\n幼少期、地震によって手足をもがれた少女は、十七歳までの月日をオンラインゲームの中で過ごしていた。\nそんな少女はある日、再び地震によって不幸が降りかかり、ゲーム中に…",
    //         "book_href": "/works/1177354054895146714"
    //     },
    //     {
    //         "book_title": "異世界の魔王にされた私だけど、転移したダンジョンから出れないので引きこもります！",
    //         "boot_auther": "みなわ",
    //         "book_desc": "女神に導かれ、OLだった赤城麻里は、異世界へ転生することとなる。\n転生先は無慈悲にも魔物が蔓延るダンジョンの中。\n\nそんな中、ダンジョンの攻略を目指す一人の女性と出会う。\nともに…",
    //         "book_href": "/works/1177354054889517594"
    //     },
    //     {
    //         "book_title": "《本編完結済み・番外編不定期更新中》望乃ちゃんはインキャ吸血鬼",
    //         "boot_auther": "ひのはら",
    //         "book_desc": "　吸血鬼である影美望乃は16歳の誕生日を迎えて、生きるために吸血相手になってくれる人間のパートナーを探していた。\n\n　しかし人見知りに加えてインキャな望乃にそんな知り合いがいるは…",
    //         "book_href": "/works/16816700426006141043"
    //     },
    //     {
    //         "book_title": "メイド in 異世界≪ファンタジア≫",
    //         "boot_auther": "忍野佐輔",
    //         "book_desc": "『武装メイドに魔法は要らない』というタイトルで書籍化しました。\n\n〜あらすじ〜\n　民兵として戦っていた仲村マリナは死後、その魂を異世界へ召喚され、魂魄人形《ゴーレム》の核として定…",
    //         "book_href": "/works/1177354054883323904"
    //     },
    //     {
    //         "book_title": "〆切前には百合が捗る",
    //         "boot_auther": "平坂読",
    //         "book_desc": "同性愛者の少女・白川愛結は、自分を受け容れてくれなかった家族や田舎を飛び出して東京に行く。出版社で働く従姉妹の白川京の紹介で、小説家・海老原優佳理の家で住み込みのアルバイトをする…",
    //         "book_href": "/works/1177354054892010417"
    //     },
    //     {
    //         "book_title": "ヒロイン剥奪！　～オープニングで悪役令嬢を落としたらストーリーから蹴りだされました～",
    //         "boot_auther": "ぎあまん",
    //         "book_desc": "村の少女レインが魔女となった日。自分が『サンドラストリートの小魔女』というゲームの中にいることに気付いた。\n知ってしまったからにはやるしかない。悪い運命はレベルを上げて押し通り、…",
    //         "book_href": "/works/1177354054904588237"
    //     },
    //     {
    //         "book_title": "猫ノ山寧々子はネコになる",
    //         "boot_auther": "ひのはら",
    //         "book_desc": "　\n　吸血鬼と人間が混在する世の中で、猫ノ山寧々子は猫になれる「猫族」として、ひっそりと息を潜めて生活していた。\n\n　白猫のオッドアイである寧々子は猫の姿でも、人間の姿でも周囲の…",
    //         "book_href": "/works/16816700428011910540"
    //     },
    //     {
    //         "book_title": "顔だけ良いクラスメイトが、やたらとグイグイ来る百合の話。",
    //         "boot_auther": "鹿島華氏",
    //         "book_desc": "トップカーストグループに在籍する海道律《かいどうりつ》は、周囲に流される形で付き合っている彼氏がいた。そんな彼と付き合ってもうすぐ一年を迎えようという夏の日、彼氏とキスをしようと…",
    //         "book_href": "/works/1177354054919288428"
    //     },
    //     {
    //         "book_title": "物理型白魔導師の軌跡",
    //         "boot_auther": "桜ノ宮天音",
    //         "book_desc": "白魔導師のルーミアはリーダーのアンジェロからパーティの追放を言い渡された。本来なら後衛職として離れた場所から前衛の味方に強化魔法や回復魔法をかけ戦闘をサポートするのが白魔導師の仕…",
    //         "book_href": "/works/16816452221119714395"
    //     },
    //     {
    //         "book_title": "許嫁、爆ぜる。～無口でクールな許嫁が感情を爆発させた理由～",
    //         "boot_auther": "燈外町　猶",
    //         "book_desc": "父の土下座から始まった許嫁との同性同棲ライフ。\n「変なことはしない」という約束は守られたまま一年が過ぎようとした、とある日。\n許嫁は、爆ぜた。\n\nどうやら彼女は――私に変なことを…",
    //         "book_href": "/works/16816700426445828623"
    //     },
    //     {
    //         "book_title": "サークルの姫を抱いてしまった女の話",
    //         "boot_auther": "4kaえんぴつ",
    //         "book_desc": "　主人公の畑野とヒロインの篠宮は、同じく「文芸同好会」に所属する女子大学生だった。しかし、畑野が精力的に活動に勤しむ中、篠宮は承認欲求を満たすために、日夜、男女を問わずに身体を許…",
    //         "book_href": "/works/16817139555062294515"
    //     },
    //     {
    //         "book_title": "エースはまだ自分の限界を知らない［第八部パラレル　新・白い軌跡前夜］",
    //         "boot_auther": "草野猫彦",
    //         "book_desc": "このお話は「エースはまだ自分の限界を知らない」の終焉第七部以降を妄想した結果生じたパラレルワールドの物語です。\n常時公開というわけではなく色々なタイミングで、一部の話を公開します…",
    //         "book_href": "/works/16817139555193831766"
    //     },
    //     {
    //         "book_title": "お姉様(♂)最強の姫になる。～最高のスペックでの転生を望んだら美少女になりました～",
    //         "boot_auther": "深水映(えいな)",
    //         "book_desc": "高貴な家柄、圧倒的なパワー、女の子にモテモテの美しい容姿。望み通りのスペックを得て俺は転生した。女の子であるという一点を除けば。いや、確かに性別の指定はしなかったけどさ！最強の勇…",
    //         "book_href": "/works/1177354054882735310"
    //     },
    //     {
    //         "book_title": "難攻不落の風紀委員長を落としたい",
    //         "boot_auther": "風丸",
    //         "book_desc": "三園女子学院の入学式の日、黒髪ロングの風紀委員長の玲華にリストバンドを外すよう注意を受けた清水未来。\n\n\nそれを機に、未来は玲華に興味を持つようになる。\n\n\n完璧で隙のない先輩。…",
    //         "book_href": "/works/1177354054891873852"
    //     },
    //     {
    //         "book_title": "クラスに忘れ物を取りに行ったら美少女2人が百合してた",
    //         "boot_auther": "もんすたー",
    //         "book_desc": "クラスに忘れ物をしたので取りに行ったら、\n「ダメだって／／そこは…………ひゃう／／」\n「いいじゃない………もっとしようよ」\n教室内からこえが聞こえた。\n声の主は、クラスのギャル。…",
    //         "book_href": "/works/16816927861576705239"
    //     },
    //     {
    //         "book_title": "ゾネ",
    //         "boot_auther": "ひのはら",
    //         "book_desc": "\n　七瀬咲は、第一志望である芸術科高校の受験に失敗して、全寮制のとある高校へ通っていた。\n\n　奇数であぶれたおかげで、本来二人一組で使用する部屋を快適に一人で過ごしていたある日の…",
    //         "book_href": "/works/16816452219493935814"
    //     },
    //     {
    //         "book_title": "性悪天才幼馴染との勝負に負けて初体験を全部奪われる話",
    //         "boot_auther": "ぽめぞーん",
    //         "book_desc": "　吉沢わかばの幼馴染、梅園小牧は完璧である。\n\n　品行方正、頭脳明晰、スポーツ万能。だけどそれは表向きであり、実際の小牧は人を見下す性悪女だった。\n\n　ある時わかばは小牧と尊厳を…",
    //         "book_href": "/works/16817139557519509664"
    //     },
    //     {
    //         "book_title": "オンラインゲームでおっさん相手に姫プ満喫していたはずが美少女たちに囲われていた",
    //         "boot_auther": "最宮みはや",
    //         "book_desc": "オンラインゲームで美少女達に囲われながら、目指すは最強ギルド！\n\nゲーマーのユズは自分が女性であることを利用して、周囲のプレーヤーたちからアイテムを貢がせていた。\n\n――それは家…",
    //         "book_href": "/works/16817330651772754268"
    //     },
    //     {
    //         "book_title": "ガチ恋相手のVtuberは、実は同じクラスの親友だった―そうとは気づかず、今日も推しへの愛を呟いています―",
    //         "boot_auther": "ちりちり",
    //         "book_desc": "ゲームは下手くそ、エロネタも苦手。\n加えて視聴者からのコメントにことごとくマジレスして、”マジレッサー”の異名を持つ、駆け出しVtuber犬養桜（愛称さくたん）。\n女子高生の吉谷…",
    //         "book_href": "/works/16816700427582996185"
    //     },
    //     {
    //         "book_title": "あんたのせいで私のエリートが台無しなんだが",
    //         "boot_auther": "風丸",
    //         "book_desc": "仕事ができる女、完璧な女。\nそれが「京本春輝」である。\n\nなにもかも順調。\n同僚からは好かれ、憧れの視線を向けられる彼女だったが、学生時代の後輩でもあり天敵でもある「水野飛鳥」が…",
    //         "book_href": "/works/1177354054896985270"
    //     },
    //     {
    //         "book_title": "ツンデレ美少女はよく吠える",
    //         "boot_auther": "ひのはら",
    //         "book_desc": "　\n　星宮愛来は17歳の高校2年生。\n\n　単身赴任中の父親が怪我したことをきっかけに、暫くの間従姉妹である一条エマの家で居候することになる。\n\n　数年ぶりに再会した6歳年上のエマ…",
    //         "book_href": "/works/16816700427179152732"
    //     },
    //     {
    //         "book_title": "【全48話】ゲル状生物に生まれ、這いずり泥を啜って生きた物語　／　続章【全534話】戦禍の大地に咲く百華　／　＋外伝と真焉",
    //         "boot_auther": "大洲やっとこ",
    //         "book_desc": "※ヒロインは１１話から登場です。\n\n　序章の魔物転生は48話でゲル状生物完結。\n　そこから先は百合戦記にジャンルが変わるので、気に入ったら読み進めて下さい。\n\n\n　ゲル状の魔物に…",
    //         "book_href": "/works/1177354055487096347"
    //     },
    //     {
    //         "book_title": "ライバル令嬢に転生したので悪役令嬢を救いたい",
    //         "boot_auther": "soldum",
    //         "book_desc": "完璧令嬢の呼び声高いエルザベラ・フォルクハイルが思い出した前世の記憶。それは日本という場所で女子高生とやらをやっていて、そしてそんな自分がとある乙女ゲームに入れ込んでいたこと。\n…",
    //         "book_href": "/works/1177354054889747717"
    //     },
    //     {
    //         "book_title": "幼馴染の親友が隠れてvtuberをしてるらしい",
    //         "boot_auther": "不和ニ亜",
    //         "book_desc": "\n姫野京香は知ってしまった。\n\n幼馴染であり親友でもある岸宮優里がこっそりとvtuberをやっていること。\n\nそして\n\n「友人が隣の席でうとうとしてたんだけど、私の肩に頭を乗せて…",
    //         "book_href": "/works/16817330647752653791"
    //     },
    //     {
    //         "book_title": "私は顔面が良すぎる　～顔が良すぎて勇者パーティーを追放されたコミュ障少女、魔術女学園でがんばって青春を送る～",
    //         "boot_auther": "洲央",
    //         "book_desc": "「顔が良すぎる」という理由で勇者パーティーを追放され、冒険者資格も失ってしまったS級魔女のルシア。\n魔術以外に能がない十五歳の小娘が生きていくには、魔術女学園で正式に魔術の免許を…",
    //         "book_href": "/works/16816927859732858668"
    //     },
    //     {
    //         "book_title": "好きをこじらせて",
    //         "boot_auther": "风-フェン-",
    //         "book_desc": "★とか応援ありがとうございます。\n一緒に楽しんでくれてありがとうございます。\nただひたすらに重い話です。このくらい真面目に恋愛できたら良いと思いますねぇ。\n\n\n内容は\n\n百合、ヤ…",
    //         "book_href": "/works/1177354054889466403"
    //     },
    //     {
    //         "book_title": "わたしの友達は躊躇わない",
    //         "boot_auther": "阪木洋一",
    //         "book_desc": "乃木真白は、ごく普通の女の子である。\nそんな真白によくよく絡んでくるのが、友達の女の子の仁科朱実である。\nどういうわけか、朱実はいろんなアプローチを仕掛けてくるのだけども。\nその…",
    //         "book_href": "/works/1177354054888612098"
    //     },
    //     {
    //         "book_title": "Hi-G. -ハイスピードガールズ ディスタンス-",
    //         "boot_auther": "赤川",
    //         "book_desc": "　640億の恒星系に文明が広がり、人々が当たり前に宇宙を往く、遠い未来。\n　21世紀に生きていたはずの赤毛の少女、村瀬唯理（むらせゆいり）は、どういうワケかそんな時代で目を覚ます…",
    //         "book_href": "/works/1177354054880231475"
    //     },
    //     {
    //         "book_title": "働く私と彼女の同棲",
    //         "boot_auther": "野水はた",
    //         "book_desc": "・旧題【働く私と同棲JK】\n（富士見L文庫様より発売中です）\n\n\n花屋で働く「冷めてる女」花芹茉莉はある日、母親を亡くした女子高生、桃山澄玲を預かることになる。\n\n「なんで私がこ…",
    //         "book_href": "/works/1177354055324489792"
    //     },
    //     {
    //         "book_title": "グラブジャムンな関係",
    //         "boot_auther": "ひのはら",
    //         "book_desc": "　明るく友達も多い上村雪美の秘密。\n　それは、百合漫画が好きな百合好きであること。\n\n　誰にも打ち明けたことがなかった秘密を、今まで全く接点のなかった同級生、来海凪に偶然バレてし…",
    //         "book_href": "/works/16816927862125805778"
    //     },
    //     {
    //         "book_title": "『血濡れの剣聖』と恐れられたSランク冒険者、勢いで奴隷を買ってしまう",
    //         "boot_auther": "笹塔五郎",
    //         "book_desc": "エレイン・オーシアンは『血濡れの剣聖』の異名で恐れられるSランクの冒険者だ。\nほとんど人付き合いのない彼女が感じているのは孤独――その圧倒的な強さ故に、彼女は孤独であった。\nそん…",
    //         "book_href": "/works/16817330648177666015"
    //     },
    //     {
    //         "book_title": "神様のミスで女に転生したようです",
    //         "boot_auther": "ハル",
    //         "book_desc": "　34歳独身の秋本修弥はごく普通の中小企業に勤めるサラリーマンであった。\n　いつも通り起床し朝食を食べ、会社へ通勤中だったがマンションの上から人が落下してきて下敷きとなってしまっ…",
    //         "book_href": "/works/16817139558567370997"
    //     },
    //     {
    //         "book_title": "ダメな姉（わたし）は妹を愛でる",
    //         "boot_auther": "みょんみょん",
    //         "book_desc": "私、立花マコには立花コマという双子の妹がいる。何をやってもダメな私と違ってとても優秀で優しくて可愛くて美しくて姉思いの自慢の妹だ。ただし……その妹には一つだけ、他の人にはとても言…",
    //         "book_href": "/works/1177354054884114792"
    //     },
    //     {
    //         "book_title": "天使すぎる義妹たちが俺をオトそうと小悪魔的に誘惑してくるので義兄として優しく叱ってやらなければいけない",
    //         "boot_auther": "糸冬",
    //         "book_desc": "　これは義兄に不健全な想いを抱く義妹ふたりと、可愛すぎる義妹たちを健全に大切にして（甘やかして）やりたい義兄の話。\n　あるいは、互いに並々ならぬ感情を向けながらも別れてしまった幼…",
    //         "book_href": "/works/16817330650579924216"
    //     },
    //     {
    //         "book_title": "おとぎ話の悪役令嬢は罪滅ぼしに忙しい",
    //         "boot_auther": "石狩なべ",
    //         "book_desc": "プリンセスを虐めた家族の次女である『あたし』を死刑にしたのは血の繋がらない義妹（プリンセス）。しかし、世界が一巡したことによって義妹を虐め始める前の時間に『あたし』は戻っていた。…",
    //         "book_href": "/works/1177354054887093418"
    //     },
    //     {
    //         "book_title": "ホームステイをしに来た従妹が緊張していたから遠慮しないで何でも言ってと言ったら、キスされて結婚を迫られました",
    //         "boot_auther": "タイロク",
    //         "book_desc": "　大学二年生の自堕落な生活に身を置いていた私、宮野　遥香（みやの　はるか）のもとに、高校に進学した従妹のアリスちゃんがホームステイにやって来た。\n　アリスちゃんはイギリス人とのハ…",
    //         "book_href": "/works/16816700427396651789"
    //     },
    //     {
    //         "book_title": "シュークリーム　～あなたに響く百合短編集～",
    //         "boot_auther": "みかみてれん（個人用）",
    //         "book_desc": "百合作品の短編集です。\n基本的には一話完結で、\n一話一話読める形になっております。\nあらすじ代わりの長いタイトルですので、\n気になったお話からお読みくださいませ。",
    //         "book_href": "/works/1177354054883687307"
    //     }
    // ]
    return JSON.parse(result as string)
})