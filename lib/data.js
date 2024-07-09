// объект Проекты, ключами (разделами проектов) которого являются массивы объектов (содержат данные по конкретному проекту)
const projects = {
    light: [{
            id: 1,
            title: 'Earth_eater_oxxi',
            img: '/projects/light/oxxi_main.png',
            textRu: "текст про проект earth_eater_oxxi",
            textEn: "text about earth_eater_oxxi project",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 2,
            title: 'TRST',
            img: '/projects/light/trst_main.png',
            textRu: "Cветовой и мультимедийный проект, изображающий бегущего человека на светодиодном экране и вдохновленный песней \"TR/ST - Razr\", идеально отражает метафоры эскапизма. Бегущий человек на светодиодном экране служит мощным символом, олицетворяющим человеческое желание вырваться из ограничений реальности, рутины или личных трудностей. Использование света и мультимедийных элементов создает иммерсивный опыт поиска убежища или утешения в цифровой сфере, перекликаясь с темами тоски и эмоциональной отстраненности в песне. Пульсирующий свет и повторяющиеся движения бегущего человека могут означать неустанное стремление к ускользающей свободе или попытку обогнать собственные мысли и эмоции. Сопоставление ограниченного пространства светодиодного экрана и движения бегущей фигуры может означать дихотомию между физическими ограничениями нашего существования и безграничным стремлением к освобождению. Проект может вызывать чувство тоски по месту или состоянию за пределами настоящего, приглашая зрителей задуматься о привлекательности и последствиях эскапизма.",
            textEn: "Lighting and multimedia project depicting a running man on an LED screen and inspired by the song \"TR / ST - Razr \" perfectly reflects the metaphors of escapism. The running man on the LED screen serves as a powerful symbol representing the human desire to break free from the constraints of reality, routine or personal hardship.The use of light and multimedia elements parallels the immersive experience of seeking refuge or solace in the digital realm, echoing the themes of longing and emotional detachment in the song.The pulsing lights and repetitive movements of the running man could signify a relentless pursuit of elusive freedom or an attempt to outrun one 's own thoughts and emotions. The juxtaposition of the limited space of the LED screen and the movement of the running figure can signify the dichotomy between the physical limitations of our existence and the limitless desire for liberation.The project can evoke a sense of longing for a place or state beyond the present, inviting viewers to reflect on the appeal and consequences of escapism.",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 3,
            title: 'lig-bbbbuuubb',
            img: '/projects/light/test-l-1.jpg',
            textRu: "Это было, должно быть, после обеда где-то в конце августа. Муми-тролль и его мама пришли в самую глухую чащу дремучего бора. Среди деревьев царила мертвая тишина и было так сумеречно, словно сумерки уже наступили. Повсюду, там и тут, росли гигантские цветы, светившие своим собственным светом, подобно мерцающим лампочкам, а в самой глубине лесной чащи, среди теней шевелились какие-то мелкие бледно-зеленые точки.— Светлячки, — сказала мама Муми-тролля.Но у них не было времени останавливаться, что бы как следует разглядеть насекомых.Вообще-то Муми-тролль с мамой разгуливали по лесу в поисках уютного и теплого местечка, где можно было бы выстроить дом, чтобы забраться туда, когда наступит зима. Муми-тролли совершенно не выносят холода, так что дом должен был быть готов самое позднее в октябре.И вот они брели все дальше и дальше, углубляясь в тишину и темноту. Муми-троллю постепенно становилось все страшнее, и он шепотом спросил маму, нет ли здесь каких-нибудь страшных хищников.— Едва ли, — ответила она, — но, может, лучше нам пойти чуточку быстрее. Впрочем, мы так малы, что, я надеюсь, нас даже не заметят в случае опасности.Внезапно Муми-тролль крепко схватил маму за лапу. Ему было так страшно, что его хвост стал торчком.— Смотри! — прошептал он.Из теней за деревом на них неотрывно смотрели чьи-то два глаза.Мама сначала испугалась, да-да, и она тоже, но потом успокоила сына:— Наверно, это очень маленький зверек. Погоди, я посвечу. Понимаешь, в темноте все кажется страшнее, чем на самом деле.И она сорвала одну из больших цветочных лампочек и осветила тень за деревом. Они увидели, что там в самом деле сидит очень маленький зверек, а вид у него вполне дружелюбный и чуточку испуганный.— Вот видишь! — сказала мама.— Кто вы такие? — спросил зверек.— Я — Муми-тролль, — ответил Муми-тролль, который уже успел снова стать храбрым. — А это — моя мама. Надеюсь, мы тебе не помешали?(Видно, что мама Муми-тролля научила его быть вежливым.)— Пожалуйста, не беспокойтесь, — ответил зверек. — Я сидел тут в страшной меланхолии и так хотел кого-нибудь встретить. Вы очень спешите?— Очень, — ответила мама Муми-тролля. — Мы как раз ищем хорошее, солнечное местечко, чтобы построить там дом. Но, может, ты хочешь пойти с нами?!— Еще бы мне не хотеть! — воскликнул маленький зверек и тут же подскочил к ним. — Я заблудился в лесу и не думал, что когда-нибудь снова увижу солнце!И вот они уже втроем пошли дальше, взяв с собой огромный тюльпан, чтобы освещать дорогу. Однако же тьма вокруг все больше и больше сгущалась. Цветы под деревьями светились уже не так ярко, а под конец угасли и самые последние из них. Впереди тускло мерцала черная вода, а воздух стал тяжелым и холодным.— Какой ужас! — сказал маленький зверек. — Это болото. Туда я боюсь идти.— Почему же? — спросила мама Муми-тролля.— А потому что там живет Большой Змей, — очень тихо, боязливо оглядываясь по сторонам, ответил маленький зверек.— Чепуха! — усмехнулся Муми-тролль, желая показать, какой он храбрый. — Мы так малы, что нас, верно, и не заметят. Как же мы отыщем солнце, если побоимся перейти болото? Давай, пошли!— Только не очень далеко, — сказал маленький зверек.— И осторожно. Тут действуешь на свой собственный риск, — заметила мама.И вот они, как можно тише, стали перепрыгивать с кочки на кочку. Вокруг них в черной тине что-то пузырилось и шепталось, но, пока горел, подобно лампочке, тюльпан, они чувствовали себя спокойно. Один раз Муми-тролль поскользнулся и чуть было не упал, но в самый последний момент мама подхватила его.— Придется дальше плыть на лодке, — сказала она. — Ты совсем промочил ноги. Ясней ясного, что ты простудишься.И, вытащив из своей сумки пару сухих носков для сына, она перенесла его и маленького зверька на большой круглый лист белой кувшинки. Все трое, опустив в воду хвосты, словно весла, стали грести, плывя вперед по болоту. Под ними мелькали какие-то черноватые существа, сновавшие туда-сюда между корнями деревьев. Они плескались и ныряли, а над ними медленно, крадучись, проползал туман. Внезапно маленький зверек сказал:— Хочу домой!— Не бойся, зверюшка! — дрожащим голосом успокаивал его Муми-тролль. — Мы споем что-нибудь веселое и…В тот же миг их тюльпан погас и стало совершен но темно.А из кромешной тьмы донеслось какое-то шипение, и они почувствовали, как лист кувшинки закачался.— Быстрее, быстрее! — закричала мама Муми-тролля. — Это плывет Большой Змей!Еще глубже засунув хвосты в воду, они стали грести изо всех сил так, что вокруг носа их лодки бурно заструилась вода. И вот они увидели злющего Змея, плывущего следом за ними, со свирепыми золотисто— желтыми глазами.Они гребли изо всех сил, но он настигал их и уже разинул свою пасть с длинным трепещущим языком. Муми-тролль закрыл руками глаза, закричал: «Мама!» — и застыл в ожидании, что его вот-вот съедят.Но ничего такого не произошло. Тогда он осторожненько взглянул между пальцами. На самом же деле случилось нечто удивительное. Их тюльпан зажегся вновь, он раскрыл все свои лепестки, а в самой середине цветка встала девочка с ярко-голубыми распущенными волосами, доходившими ей до пят.Тюльпан светил все ярче и ярче. Змей замигал и, внезапно повернувшись, злобно шипя, скользнул вниз, в тину.Муми-тролль, его мама и маленький зверек были так взволнованы и удивлены, что долгое время не могли произнести ни слова.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 4,
            title: 'lig-bbbbaaab',
            img: '/projects/light/test-l-2.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 5,
            title: 'lig-booobb',
            img: '/projects/light/test-l-3.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 6,
            title: 'lig-biiiib',
            img: '/projects/light/test-l-4.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
    ],

    generative: [{
            id: 1,
            title: 'FIELDS 95',
            img: '/projects/generative/fields95_main.jpg',
            textRu: "вдохновилась старинной эстетикой бэкграундов windows 95 и создала аудиореактивный визуал в тачдизайнере со связкой streamdiffusion (компонент позволяет работать с искусственным интеллектом в риал тайме) пис 🌎",
            textEn: "was inspired by the vintage aesthetics of windows 95 backgrounds and created an audio-reactive visual in touchdesigner with the streamdiffusion bundle (the component allows you to work with artificial intelligence in realtime) peace 🌎",
            date: '',
            media: [
                { type: 'video', src: '/projects/generative/oxxi_video1.mp4' },
                { type: 'image', src: '/projects/generative/fields95-img1.jpg' },
                { type: 'image', src: '/projects/generative/fields95-img2.jpg' },
            ]
        },
        {
            id: 2,
            title: 'winter_lady',
            img: '/projects/generative/winterlady_main.png',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 3,
            title: 'devils',
            img: '/projects/generative/devils_main.png',
            textRu: "Кастомные диджитал визуалайзеры \"Малыши\". Кастомная диджитал открытка.",
            textEn: "Custom digital visualizers \"The Babes\". Custom digital postcard.",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 4,
            title: 'blood',
            img: '/projects/generative/blood_main.png',
            textRu: "Кастомные диджитал визуалайзеры \"Красные крылья\" визуальная концепция, посвященная красному гневу, призрачным узорам и движущейся темноте",
            textEn: "Custom digital visualizersn “Red wings” visual concept dedicated to red anger, ghostly patterns and moving darknes",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 5,
            title: 'gen-buubabo',
            img: '/projects/generative/test-gen-4.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 6,
            title: 'gen-bobobu',
            img: '/projects/generative/test-gen-main.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
    ],
    
    threed: [{
            id: 1,
            title: 'signal',
            img: '/projects/threed/signal_main.png',
            textRu: "Пространство, позволяющее окунуться в настоящее и иллюзорное взаимодействиесо сценой, инсталляциями и участниками фестиваля.Сердце пространства - музыкальная сцена в виде арочной конструкции,напоминающей дом с призраками; по периметру конструкции развешаны легкиеполупрозрачные ткани, на которые падает рассевающийся холодный свет.Потолок арки полупрозрачный, одновременно защищающий артистаи оборудование от осадков, но неотделимый от небесного свода.Эфемерность конструкций прослеживается и в заднике сцены, где расположенаполупрозрачная экран-сетка. Контент в режиме real time, слушающий музыкусо сцены, созвучен решению пространства - человеческие силуэты,растворяющиеся в толпе, среди нас и сопровождающие участников путешествия,расположены по обе стороны прохода к сцене. Самые большие человеческиефигуры стоят полукругом за сценой, скрытые от основных слушателей, позволяютпопасть в другую часть призрачного мира. Зеркальные силуэты отражаюти окружащую природную среду, сливаясь с ней, и участников фестиваля.Контент создает силуэты человеческих аур, изменчивых и светящихся,также выполняющих роль светового элемента пространства.Оставленные в лесу инсталляции постепенно будут все больше вживатьсяв природное пространство, становясь более его естественной частью.",
            textEn: "Space, the ability to plunge into real and illusory interactionwith the stage, installations and festival participants.The Heart of the space is a musical stage in the form of an arched structure,an emerging haunted house; along the perimeter of the structure there are light weightstranslucent fabrics onto which diffusing cold light falls.The ceiling of the arch is translucent, at the same time patronizing the artistand equipment from emissions, but inseparable from the firmament.The ephemerality of the design can also be seen in the rear scenes, where translucent screen mesh. Real-time content, listening to musicwith scenes voiced, spaces resolved - sunny silhouettes,dissolving in the crowd, among us and accompanying the travel participants,located on both sides of the passage to the stage. Largest solar energy the figures stand in a semicircle behind the stage, hidden from the main spectators, allowingget to another part of the ghostly world. Mirror silhouettes reflect the surrounding natural environment, merging with it, and the festival participants.The content represents silhouettes of people, changing and glowing,also acting as a light element of space. Installations left in the forest will gradually live more and morein natural space, becoming more of a natural part of it.",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 1,
            title: 'HEART',
            img: '/projects/threed/heart_main.jpg',
            textRu: "Пространство, позволяющее окунуться в настоящее и иллюзорное взаимодействиесо сценой, инсталляциями и участниками фестиваля.Сердце пространства - музыкальная сцена в виде арочной конструкции,напоминающей дом с призраками; по периметру конструкции развешаны легкиеполупрозрачные ткани, на которые падает рассевающийся холодный свет.Потолок арки полупрозрачный, одновременно защищающий артистаи оборудование от осадков, но неотделимый от небесного свода.Эфемерность конструкций прослеживается и в заднике сцены, где расположенаполупрозрачная экран-сетка. Контент в режиме real time,.",
            textEn: "Space, the ability to plunge into real and illusory interactionwith the stage, installations and festival participants.The Heart of the space is a musical stage in the form of an arched structure,an emerging haunted house; along the perimeter of the structure there are light weightstranslucent fabrics onto which diffusing cold light falls.The ceiling of the arch is translucent",
            date: '',
            media: [
                { type: 'image', src: '/projects/threed/heart_img1.png' },
                { type: 'image', src: '/projects/threed/heart_img2.png' },
                { type: 'youtube', src: 'https://www.youtube.com/embed/kAB-32pVZW4?si=Cu4QB2PKXrWd07gC?rel=0' },
                { type: 'video', src: '/projects/threed/heart_vid1.mov' },
                { type: 'video', src: '/projects/threed/heart_vid2.mov' },
                { type: 'video', src: '/projects/threed/heart_vid3.mov' },
                { type: 'video', src: '/projects/threed/heart_vid4.mov' },
            ]
        },
        {
            id: 2,
            title: 'three-biiib',
            img: '/projects/threed/test-3d-1.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 3,
            title: 'three-booob',
            img: '/projects/threed/test-3d-2.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 4,
            title: 'three-baaab',
            img: '/projects/threed/test-3d-3.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 5,
            title: 'three-buuub',
            img: '/projects/threed/test-3d-4.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 6,
            title: 'three-beeeb',
            img: '/projects/threed/test-3d-5.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
    ],

    photos: [{
            id: 1,
            title: 'ph-ooo',
            img: '/projects/photos/test-ph-main.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 2,
            title: 'ph-ooo',
            img: '/projects/photos/test-ph-1.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 3,
            title: 'ph-ooo',
            img: '/projects/photos/test-ph-2.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 4,
            title: 'ph-ooo',
            img: '/projects/photos/test-ph-3.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 5,
            title: 'ph-ooo',
            img: '/projects/photos/test-ph-4.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 6,
            title: 'ph-ooo',
            img: '/projects/photos/test-ph-5.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
    ],

    collabs: [{
            id: 1,
            title: 'col-BLYAT',
            img: '/projects/collabs/test-collabs-main.jpg',
            textRu: "Наконец мама Муми-тролля торжественно сказала:— Огромное спасибо за помощь, прекрасная дама!А Муми-тролль поклонился ниже, чем всегда, по тому что прекраснее девочки с голубыми волосами он никого в своей жизни не видел.— Вы все время живете в тюльпане? — застенчиво спросил маленький зверек.— Это мой дом, — ответила она. — Можешь называть меня Тюлиппа.И они стали медленно грести, переплывая на другую сторону болота. Там плотной стеной росли папоротники, и под ними мама устроила для них гнездо во мху, чтобы все могли поспать. Муми-тролль лежал рядом с мамой, прислушиваясь к кваканью лягушек на болоте. Ночь была полна одиночества и каких-то странных звуков, и он долго не мог заснуть.На следующее утро Тюлиппа уже шла впереди, а ее голубые волосы светились, словно ярчайшая лампа дневного света. Дорога поднималась все выше и выше, и наконец пред ними встала крутая обрывистая гора, такая высокая, что ей не видно было конца.— Там, наверху, пожалуй, солнце, — мечтательно-тоскливо произнес маленький зверек. — Я так ужасно мерзну.— Я тоже, — подхватил Муми-тролль. И чихнул.— Так я и думала, — огорчилась мама. — Теперь ты простужен. Будь добр, сядь сюда, пока я разведу костер.Притащив гигантскую кучу сухих ветвей, она зажгла их с помощью искры от голубых волос Тюлиппы. Они сидели все четверо, глядя в огонь, пока мама Муми-тролля рассказывала им разные истории. Она рассказывала о том, что, когда была маленькой, муми-троллям не нужно было бродить по мрачным лесам и болотам в поисках местечка для жилья.В то время муми-тролли жили вместе с домашними троллями у людей, большей частью за печками.— Кое-кто из нас еще и сейчас живет там, — сказала мама Муми-тролля. — Разумеется, там, где еще есть печки. Но там, где паровое отопление, мы не уживаемся.— А люди знали, что вы ютитесь за печками? — спросил Муми-тролль.— Кое-кто знал, — сказала мама. — Оставаясь одни в доме, они ощущали наше присутствие, когда порой обдавало сквозняком их затылки.— Расскажи что-нибудь о папе, — попросил Муми-тролль.— Это был необыкновенный муми-тролль, — задумчиво и печально сказала мама. — Он всегда хотел куда-то бежать и переселяться от одной печки к другой. Он никогда нигде не уживался. А потом исчез — отправился в путешествие с хатифнаттами, этими маленькими странниками.— А это что за народец? — спросил маленький зверек.— Этакие мелкие волшебные зверюшки, — объяснила мама Муми-тролля. — Большей частью они невидимки. Иногда они поселяются под половицами у людей, и слышно, как они крадутся там по вечерам, когда в доме все затихает. Но чаще они бродят по свету, нигде не останавливаясь, ни о чем не заботясь.Никогда нельзя сказать, весел хатифнатт или зол, печален он или удивлен. Я уверена, что у него вообще нет никаких чувств.— А что, папа стал теперь хатифнаттом? — спросил Муми-тролль.— Нет, конечно нет! — ответила мама. — Неужели не понятно, что они обманом увлекли его с собой?— Вот бы нам в один прекрасный день встретить его! — воскликнула Тюлиппа. — Он бы, верно, обрадовался?— Конечно, — ответила мама Муми-тролля. — Но этому, пожалуй, не бывать.И она заплакала так горько, что все остальные начали всхлипывать вместе с ней. А плача, вспомнили множество других, тоже очень горестных вещей, и тогда заплакали еще сильнее.Тюлиппа поблекла от огорчения, и лицо ее стало совершенно матовым. Они плакали уже довольно долго, как вдруг услыхали чей-то голос, который строго спросил:— Чего вы там воете внизу?Они резко оборвали плач и стали оглядываться по сторонам, но так и не смогли обнаружить того, кто с ними заговорил. Но тут с горного склона, болтаясь во все стороны, стала спускаться вниз веревочная лестница. А высоко наверху какой-то пожилой господин высунул голову из дверцы в скале.— Ну?! — снова закричал он.— Извините, — сказала Тюлиппа и сделала реверанс. — Понимаете, любезный господин, все на самом деле очень грустно. Папа Муми-тролля куда-то исчез, а мы мерзнем и не можем перевалить через эту гору, чтобы найти солнце, и нам негде жить.— Вот как! — произнес пожилой господин. — Тогда вы все можете подняться ко мне. Лучше моих солнечных лучей не придумаешь.Вскарабкаться по веревочной лестнице было довольно трудно, особенно для Муми-тролля и его мамы, ведь у них были такие коротенькие лапы!— А теперь вытрите лапы, — приказал им пожилой господин, подтягивая следом за ними вверх лестницу.Потом он хорошенько запер дверь, чтобы в гору не просочилась какая-нибудь опасность. Все влезли на эскалатор, который въехал вместе с ними прямо в недра горы.— Вы уверены, что можно положиться на этого господина? — прошептал маленький зверек. — Вспомните, что тут действуешь на свой собственный риск.И зверек, съежившись, спрятался за спиной мамы Муми-тролля. Тут в глаза им ударил яркий свет, и эскалатор въехал прямо в удивительнейшую местность. Им открылся чудесный ландшафт. Деревья искрились красками и ломились от невиданных фруктов и цветов, а под ними в траве простирались ослепительно белые заснеженные лужайки.— Привет! — воскликнул Муми-тролль и побежал, чтобы слепить снежок.— Осторожно, он холодный! — закричала ему мама.Но, погрузив руки в снег, он понял, что это вовсе не снег, а стекло. А зеленая трава, треснувшая под его лапами, была сделана из тонкой сахарной пряжи. Повсюду вдоль и поперек, как попало, текли по лугам разноцветные ручьи, пенясь и журча над золотистым песком дна.— Зеленый лимонад! — закричал маленький зверек, наклонившись к ручью, чтобы напиться. — Это вовсе не вода, это лимонад!Мама же Муми-тролля подошла прямо к совершенно белому ручью, потому что она всегда очень любила молоко. (Это свойственно большинству муми-троллей, по крайней мере, когда они становятся чуточку старше.) Тюлиппа бегала от одного дерева к другому, набирая полные охапки карамелек и плиток шоколада. А стоило ей сорвать хоть один из сверкающих фруктов, как на его месте тотчас вырастал новый. Забыв все свои огорчения, они бежали все дальше и дальше в глубь заколдованного сада. Пожилой господин медленно шел за ними и, казалось, был очень доволен.— Все это я сделал сам, — сказал он. — И солнце тоже.И когда они внимательно поглядели на солнце, то заметили, что оно и в самом деле не настоящее, а всего лишь огромная лампа с бахромой из золоченой бумаги.— Вот как! — разочарованно произнес маленький зверек. — А я-то думал, это настоящее солнце. Теперь я вижу, что оно светит чуточку искусственно.— Ничего не поделаешь, лучше не получилось, — огорчился пожилой господин. — Но уж садом-то вы довольны?— Конечно, конечно, — выпалил Муми-тролль, который как раз занимался тем, что поедал мелкие камешки (правда, они были сделаны из марципанов).— Если захотите тут остаться, я построю вам дом из высоченного торта, — сказал пожилой господин. -Мне иногда бывает скучно в одиночестве.— Это было бы очень мило с вашей стороны, — сказала мама Муми-тролля, — но, если вы не обидитесь, нам, пожалуй, придется продолжить путь. Мы как раз собираемся построить себе дом там, где светит настоящее солнце.— Нет, останемся здесь! — закричали в один голос Муми-тролль, маленький зверек и Тюлиппа.— Хорошо, хорошо, детки, — успокоила их мама Муми-тролля. — Там видно будет.И легла спать под деревом, на котором росли шоколадки. Проснувшись, она услыхала ужасные жалобные стоны и тотчас поняла, что это у ее Муми-тролля заболел живот (с ним это случалось довольно часто). От всего, что съел Муми-тролль, животик его раздулся, стал совершенно круглым и страшно болел. Рядом с ним сидел маленький зверек, у которого от всех съеденных им карамелек заболели зубы, и стонал еще громче, чем Муми-тролль.Мама Муми-тролля не стала браниться, а, вытащив из своей сумки два разных порошка, дала каждому тот, который был ему нужен. А потом спросила пожилого господина, нет ли у него какого-нибудь бассейна с вкусной горячей кашей.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 2,
            title: 'bunny',
            img: '/projects/collabs/bunny_main.png',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/collabs/bunny_img1.png' },
                { type: 'image', src: '/projects/collabs/bunny_img2.png' },
                { type: 'image', src: '/projects/collabs/bunny_img3.png' },
                { type: 'image', src: '/projects/collabs/bunny_img4.jpg' },
                { type: 'image', src: '/projects/collabs/bunny_img5.jpg' },
            ]
        },
        {
            id: 3,
            title: 'col-BLYAT',
            img: '/projects/collabs/test-collabs-2.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 4,
            title: 'col-BLYAT',
            img: '/projects/collabs/test-collabs-3.jpg',
            textRu: "Наконец мама Муми-тролля торжественно сказала:— Огромное спасибо за помощь, прекрасная дама!А Муми-тролль поклонился ниже, чем всегда, по тому что прекраснее девочки с голубыми волосами он никого в своей жизни не видел.— Вы все время живете в тюльпане? — застенчиво спросил маленький зверек.— Это мой дом, — ответила она. — Можешь называть меня Тюлиппа.И они стали медленно грести, переплывая на другую сторону болота. Там плотной стеной росли папоротники, и под ними мама устроила для них гнездо во мху, чтобы все могли поспать. Муми-тролль лежал рядом с мамой, прислушиваясь к кваканью лягушек на болоте. Ночь была полна одиночества и каких-то странных звуков, и он долго не мог заснуть.На следующее утро Тюлиппа уже шла впереди, а ее голубые волосы светились, словно ярчайшая лампа дневного света. Дорога поднималась все выше и выше, и наконец пред ними встала крутая обрывистая гора, такая высокая, что ей не видно было конца.— Там, наверху, пожалуй, солнце, — мечтательно-тоскливо произнес маленький зверек. — Я так ужасно мерзну.— Я тоже, — подхватил Муми-тролль. И чихнул.— Так я и думала, — огорчилась мама. — Теперь ты простужен. Будь добр, сядь сюда, пока я разведу костер.Притащив гигантскую кучу сухих ветвей, она зажгла их с помощью искры от голубых волос Тюлиппы. Они сидели все четверо, глядя в огонь, пока мама Муми-тролля рассказывала им разные истории. Она рассказывала о том, что, когда была маленькой, муми-троллям не нужно было бродить по мрачным лесам и болотам в поисках местечка для жилья.В то время муми-тролли жили вместе с домашними троллями у людей, большей частью за печками.— Кое-кто из нас еще и сейчас живет там, — сказала мама Муми-тролля. — Разумеется, там, где еще есть печки. Но там, где паровое отопление, мы не уживаемся.— А люди знали, что вы ютитесь за печками? — спросил Муми-тролль.— Кое-кто знал, — сказала мама. — Оставаясь одни в доме, они ощущали наше присутствие, когда порой обдавало сквозняком их затылки.— Расскажи что-нибудь о папе, — попросил Муми-тролль.— Это был необыкновенный муми-тролль, — задумчиво и печально сказала мама. — Он всегда хотел куда-то бежать и переселяться от одной печки к другой. Он никогда нигде не уживался. А потом исчез — отправился в путешествие с хатифнаттами, этими маленькими странниками.— А это что за народец? — спросил маленький зверек.— Этакие мелкие волшебные зверюшки, — объяснила мама Муми-тролля. — Большей частью они невидимки. Иногда они поселяются под половицами у людей, и слышно, как они крадутся там по вечерам, когда в доме все затихает. Но чаще они бродят по свету, нигде не останавливаясь, ни о чем не заботясь.Никогда нельзя сказать, весел хатифнатт или зол, печален он или удивлен. Я уверена, что у него вообще нет никаких чувств.— А что, папа стал теперь хатифнаттом? — спросил Муми-тролль.— Нет, конечно нет! — ответила мама. — Неужели не понятно, что они обманом увлекли его с собой?— Вот бы нам в один прекрасный день встретить его! — воскликнула Тюлиппа. — Он бы, верно, обрадовался?— Конечно, — ответила мама Муми-тролля. — Но этому, пожалуй, не бывать.И она заплакала так горько, что все остальные начали всхлипывать вместе с ней. А плача, вспомнили множество других, тоже очень горестных вещей, и тогда заплакали еще сильнее.Тюлиппа поблекла от огорчения, и лицо ее стало совершенно матовым. Они плакали уже довольно долго, как вдруг услыхали чей-то голос, который строго спросил:— Чего вы там воете внизу?Они резко оборвали плач и стали оглядываться по сторонам, но так и не смогли обнаружить того, кто с ними заговорил. Но тут с горного склона, болтаясь во все стороны, стала спускаться вниз веревочная лестница. А высоко наверху какой-то пожилой господин высунул голову из дверцы в скале.— Ну?! — снова закричал он.— Извините, — сказала Тюлиппа и сделала реверанс. — Понимаете, любезный господин, все на самом деле очень грустно. Папа Муми-тролля куда-то исчез, а мы мерзнем и не можем перевалить через эту гору, чтобы найти солнце, и нам негде жить.— Вот как! — произнес пожилой господин. — Тогда вы все можете подняться ко мне. Лучше моих солнечных лучей не придумаешь.Вскарабкаться по веревочной лестнице было довольно трудно, особенно для Муми-тролля и его мамы, ведь у них были такие коротенькие лапы!— А теперь вытрите лапы, — приказал им пожилой господин, подтягивая следом за ними вверх лестницу.Потом он хорошенько запер дверь, чтобы в гору не просочилась какая-нибудь опасность. Все влезли на эскалатор, который въехал вместе с ними прямо в недра горы.— Вы уверены, что можно положиться на этого господина? — прошептал маленький зверек. — Вспомните, что тут действуешь на свой собственный риск.И зверек, съежившись, спрятался за спиной мамы Муми-тролля. Тут в глаза им ударил яркий свет, и эскалатор въехал прямо в удивительнейшую местность. Им открылся чудесный ландшафт. Деревья искрились красками и ломились от невиданных фруктов и цветов, а под ними в траве простирались ослепительно белые заснеженные лужайки.— Привет! — воскликнул Муми-тролль и побежал, чтобы слепить снежок.— Осторожно, он холодный! — закричала ему мама.Но, погрузив руки в снег, он понял, что это вовсе не снег, а стекло. А зеленая трава, треснувшая под его лапами, была сделана из тонкой сахарной пряжи. Повсюду вдоль и поперек, как попало, текли по лугам разноцветные ручьи, пенясь и журча над золотистым песком дна.— Зеленый лимонад! — закричал маленький зверек, наклонившись к ручью, чтобы напиться. — Это вовсе не вода, это лимонад!Мама же Муми-тролля подошла прямо к совершенно белому ручью, потому что она всегда очень любила молоко. (Это свойственно большинству муми-троллей, по крайней мере, когда они становятся чуточку старше.) Тюлиппа бегала от одного дерева к другому, набирая полные охапки карамелек и плиток шоколада. А стоило ей сорвать хоть один из сверкающих фруктов, как на его месте тотчас вырастал новый. Забыв все свои огорчения, они бежали все дальше и дальше в глубь заколдованного сада. Пожилой господин медленно шел за ними и, казалось, был очень доволен.— Все это я сделал сам, — сказал он. — И солнце тоже.И когда они внимательно поглядели на солнце, то заметили, что оно и в самом деле не настоящее, а всего лишь огромная лампа с бахромой из золоченой бумаги.— Вот как! — разочарованно произнес маленький зверек. — А я-то думал, это настоящее солнце. Теперь я вижу, что оно светит чуточку искусственно.— Ничего не поделаешь, лучше не получилось, — огорчился пожилой господин. — Но уж садом-то вы довольны?— Конечно, конечно, — выпалил Муми-тролль, который как раз занимался тем, что поедал мелкие камешки (правда, они были сделаны из марципанов).— Если захотите тут остаться, я построю вам дом из высоченного торта, — сказал пожилой господин. -Мне иногда бывает скучно в одиночестве.— Это было бы очень мило с вашей стороны, — сказала мама Муми-тролля, — но, если вы не обидитесь, нам, пожалуй, придется продолжить путь. Мы как раз собираемся построить себе дом там, где светит настоящее солнце.— Нет, останемся здесь! — закричали в один голос Муми-тролль, маленький зверек и Тюлиппа.— Хорошо, хорошо, детки, — успокоила их мама Муми-тролля. — Там видно будет.И легла спать под деревом, на котором росли шоколадки. Проснувшись, она услыхала ужасные жалобные стоны и тотчас поняла, что это у ее Муми-тролля заболел живот (с ним это случалось довольно часто). От всего, что съел Муми-тролль, животик его раздулся, стал совершенно круглым и страшно болел. Рядом с ним сидел маленький зверек, у которого от всех съеденных им карамелек заболели зубы, и стонал еще громче, чем Муми-тролль.Мама Муми-тролля не стала браниться, а, вытащив из своей сумки два разных порошка, дала каждому тот, который был ему нужен. А потом спросила пожилого господина, нет ли у него какого-нибудь бассейна с вкусной горячей кашей.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 5,
            title: 'col-BLYAT',
            img: '/projects/collabs/test-collabs-4.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
        {
            id: 6,
            title: 'col-BLYAT',
            img: '/projects/collabs/test-collabs-5.jpg',
            textRu: "Лорем ипсум долор сит амет, тантас ехерци реферрентур хас ид, татион принципес еос те, про алиа волумус ад. Яуодси фацилисис дефиниебас еу мел, еу меа алияуам проприае цонсеяуат. Вис еа еррем принципес интеллегам. Пер те мазим ириуре перицула, ессент граецис индоцтум ад вис. Ин яуандо сигниферумяуе при.",
            textEn: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae, ipsum consequuntur exercitationem voluptas laborum nisi blanditiis reiciendis numquam, ipsam non eaque quaerat quos sed omnis doloribus pariatur nihil? Beatae!",
            date: '',
            media: [
                { type: 'image', src: '/projects/light/oxxi_image1.png' },
                { type: 'image', src: '/projects/light/oxxi_image2.png' },
                { type: 'video', src: '/projects/light/oxxi_video1.mp4' }
            ]
        },
    ],
}


export {
    projects
};