const CARD_TYPE = {
  morning: 'morning',
  night: 'night',
  place: 'place',
  task: 'task',
  move: 'move',
}

const MATERIAL_ICON = {
  morning: 'wb_sunny',
  night: 'nights_stay',
  place: 'place',
  hotel: 'hotel',
  move: 'drive_eta',
  pet: 'pets',
}

const PLAN = [
  {
    date: { month: '10', day: '31' },
    dispDate: { month: '10', day: '30' },
    card: [
      {
        cardType: CARD_TYPE.morning,
        time: { planTime: '〜8:30', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.morning, text: 'おはようございます' },
          description: [
            '今日のやることを確認',
            [
              'お泊まりの準備をしてください',
              '今日のおでかけはどこにいくか決まってますか',
              'ペットホテルに預ける準備はOKかな',
              'チケットは忘れずに！',
              '着替えは念のために余分に入れておこう！',
            ]
          ],
          map: null,
          image: null,
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.place,
        time: { planTime: '〜15:00', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.place, text: 'おでかけ' },
          description: [
            'ディズニーの準備できたら行きますよ！',
            'ペットホテルいく前にストレス発散',
          ],
          map: null,
          image: null,
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.task,
        time: { planTime: '15:00<br />18:00', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.pet, text: 'ペットホテルへ' },
          description: [
            'ペットホテルへ預けにいくよ！',
            'しばしお別れ・・・お利口さんにしているんだよ',
          ],
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.6040699662863!2d139.59646019147186!3d35.444487329694915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185b9063de65b3%3A0x4091693bffd1d0bb!2z5YW16Jek5YuV54mp55eF6Zmi5L-d5Zyf44O26LC35qmL!5e0!3m2!1sja!2sjp!4v1603965299379!5m2!1sja!2sjp',
          image: null,
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.move,
        time: { planTime: '18:00〜', openTime: '15:00' },
        main: {
          title: { icon: MATERIAL_ICON.move, text: '移動' },
          description: [
            '荷物は全部持った？？',
            'おでかけの時間だよ',
          ],
          map: null,
          image: null,
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.place,
        time: { planTime: '19:30〜', openTime: '17:00' },
        main: {
          title: { icon: MATERIAL_ICON.hotel, text: 'ホテルチェックイン' },
          description: [
            'ディズニーに向けて浦安で前泊だよ！',
            '朝食付きプランだから朝ごはんもばっちり',
            'コンビニもあるよ',
            '<a href="https://www.choice-hotels.jp/suites/tokyobay/" target="_blank">コンフォートスイーツ東京ベイ</a>',
          ],
          map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3242.56132617356!2d139.9272949!3d35.6385395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187c2d6deadfad%3A0x4f70914996e008ba!2z44Kz44Oz44OV44Kp44O844OI44K544Kk44O844OE5p2x5Lqs44OZ44Kk!5e0!3m2!1sja!2sjp!4v1603986353348!5m2!1sja!2sjp',
          image: [
            { link: 'https://www.choice-hotels.jp/suites/tokyobay/', img: 'images/1031_01.jpg' },
            { link: 'https://www.choice-hotels.jp/suites/tokyobay/', img: 'images/1031_02.jpg' }
          ],
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.night,
        time: { planTime: '21:00〜', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.night, text: 'おやすみなさい' },
          description: [
            '着替えと持ち物を確認！',
            '明日は9時から21時まで営業',
            '朝起きる時間はOK？？',
            '今日はしっかり寝ましょう'
          ],
          map: null,
          image: null,
        },
        isSecret: false,
      },
    ]
  },
  {
    date: { month: '11', day: '01' },
    dispDate: { month: '10', day: '31' },
    card: [
      {
        cardType: CARD_TYPE.morning,
        time: { planTime: '6:00〜', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.morning, text: 'Good Morning' },
          description: [
            'HAPPY BIRTHDAY!!!',
            '朝ごはんは6:30〜',
            '開園は9:00だけど早めにご飯食べましょう',
            '持ち物の移動はOK？',
            'トイレも今のうちに'
          ],
          map: null,
          image: null,
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.move,
        time: { planTime: '〜9:00', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.move, text: '移動' },
          description: [
            'ホテルの忘れ物チェック！',
            '<a href="https://www.tokyodisneyresort.jp/hotel/tdh/access/car.html" target="_blank">ディズニーランドホテルの駐車場へ</a>',
            '事前チェックイン！荷物を預けます',
          ],
          map: null,
          image: [
            { link: 'https://www.tokyodisneyresort.jp/hotel/tdh/access/car.html', img: 'images/tdr_hotel_parking_01.gif' }
          ],
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.place,
        time: { planTime: '9:00〜', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.place, text: '東京ディズニーシー' },
          description: [
            'チケットは忘れずに！',
            '<a href="https://www.tokyodisneyresort.jp/special/happiest_birthdays/detail.html" target="_blank">お誕生日のシールもらいましょう</a>',
            '乗りたい物は先に抽選しちゃおう',
            '疲れたら休みながら周りましょう！'
          ],
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4191.123235710007!2d139.88320823289155!3d35.62728295988274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187d03114737b3%3A0x41471d704ab72d25!2z5p2x5Lqs44OH44Kj44K644OL44O844K344O8!5e0!3m2!1sja!2sjp!4v1604047283797!5m2!1sja!2sjp',
          image: null,
        },
        isSecret: false,
      }, 
      {
        cardType: CARD_TYPE.place,
        time: { planTime: '〜21:00', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.place, text: 'ディズニーランドホテル' },
          description: [
            '美女と野獣ルーム'
          ],
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.630440114038!2d139.87597031525743!3d35.6368360802046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187d1457c9914b%3A0x92171a9d5f953678!2z5p2x5Lqs44OH44Kj44K644OL44O844Op44Oz44OJ44Ob44OG44Or!5e0!3m2!1sja!2sjp!4v1604047483299!5m2!1sja!2sjp',
          image: null,
        },
        isSecret: false,
      }, 
      {
        cardType: CARD_TYPE.night,
        time: { planTime: '21:00〜', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.night, text: 'Good Night' },
          description: [
            '明日も朝早いから寝るよ',
            '朝ごはんはついていないから中入って食べましょう',
            '目の前がパークだから8時半頃チェックアウト予定'
          ],
          map: null,
          image: null,
        },
        isSecret: false,
      }, 
    ],
  },
  {
    date: { month: '11', day: '02' },
    dispDate: { month: '11', day: '01' },
    card: [
      {
        cardType: CARD_TYPE.morning,
        time: { planTime: '〜8:30', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.morning, text: 'ディズニー2日目' },
          description: [
            '荷物は片付けた？',
            '車に荷物を積みます',
            'ゲートに並びましょう',
            '傘は忘れずに！！！'
          ],
          map: null,
          image: null,
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.place,
        time: { planTime: '9:00〜', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.place, text: '東京ディズニーランド' },
          description: [
            '美女と野獣・ベイマックスもあるよ',
            '抽選は忘れずに！',
            '先にグッズ買ってもいいかも',
          ],
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.7902771008735!2d139.87820561525754!3d35.6328963802056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187d03114737b3%3A0xe4d93636d509d3cb!2z5p2x5Lqs44OH44Kj44K644OL44O844Op44Oz44OJ!5e0!3m2!1sja!2sjp!4v1604048386449!5m2!1sja!2sjp',
          image: null,
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.task,
        time: { planTime: '9:00〜9:10', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.place, text: 'ベイマックスのハッピーライド' },
          description: [
            'ベイマックスを先に乗ります！',
            'チケットの用意を！'
          ],
          map: null,
          image: [
            { link: 'https://www.tokyodisneyresort.jp/treasure/tdl2020/baymax/', img: 'images/ride_01.jpg' },
            { link: 'https://www.tokyodisneyresort.jp/treasure/tdl2020/baymax/', img: 'images/ride_02.jpg' },
          ],
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.task,
        time: { planTime: '10:00〜10:10', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.place, text: '美女と野獣"魔法の物語"' },
          description: [
            '開園後は美女と野獣のライドへ',
            '心の準備をしてね！',
            'この後はご飯を食べましょう！'
          ],
          map: null,
          image: [
            { link: 'https://www.tokyodisneyresort.jp/treasure/tdl2020/beautyandbeast/attraction.html', img: 'images/bb_01.jpg' },
            { link: 'https://www.tokyodisneyresort.jp/treasure/tdl2020/beautyandbeast/attraction.html', img: 'images/bb_02.jpg' },
            { link: 'https://www.tokyodisneyresort.jp/treasure/tdl2020/beautyandbeast/attraction.html', img: 'images/bb_03.jpg' },

          ],
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.move,
        time: { planTime: '21:00〜', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.move, text: '移動' },
          description: [
            '２日間楽しかったですか？',
            'クリスマスも行けたら行こうね',
            'これからまた楽しい1年になるよ！'
          ],
          map: null,
          image: [
            { link: 'https://www.tokyodisneyresort.jp/treasure/christmas2020/', img: 'images/next_01.png' }
          ],
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.place,
        time: { planTime: '21:30', openTime: '20:00' },
        main: {
          title: { icon: MATERIAL_ICON.hotel, text: '三井ガーデンホテル プラナ東京ベイ' },
          description: [
            '唯ちゃんの誕生日はまだまだおわらないよ！',
            '<a href="https://www.tokyodisneyresort.jp/hotel/ph/garden.html" target="_blank">今日泊まるところ</a>',
            '朝ごはん食べたらチェックアウトしてお迎えにいくからね！'
          ],
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.668663308759!2d139.92246931525744!3d35.63589398020497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187c32442ca449%3A0x2655d2a0c7cebe77!2z5LiJ5LqV44Ks44O844OH44Oz44Ob44OG44OrIOODl-ODqeODiuadseS6rOODmeOCpA!5e0!3m2!1sja!2sjp!4v1604049806485!5m2!1sja!2sjp',
          image: [
            { link: 'https://www.tokyodisneyresort.jp/hotel/ph/garden.html', img: 'images/1102_01.jpg' },
            { link: 'https://www.tokyodisneyresort.jp/hotel/ph/garden.html', img: 'images/1102_02.jpg' }
          ],
        },
        isSecret: true,
      },

    ],
  },
  {
    date: { month: '11', day: '03' },
    dispDate: { month: '11', day: '02' },
    card: [
      {
        cardType: CARD_TYPE.morning,
        time: { planTime: '〜8:30', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.morning, text: 'おはよう' },
          description: [
            'さあ本当に帰りましょうね！',
            'ペットホテルへお迎え！',
          ],
          map: null,
          image: null,
        },
        isSecret: false,
      },
      {
        cardType: CARD_TYPE.move,
        time: { planTime: '9:00〜', openTime: null },
        main: {
          title: { icon: MATERIAL_ICON.move, text: 'お迎え&帰宅' },
          description: [
            'いい誕生日になりましたか？',
            '今度こそ旅のしおりもおしまい！',
            '気をつけて帰ろりましょう',
            '4日間ありがとう！唯ちゃん大好きだよ！'
          ],
          map: null,
          image: null,
        },
        isSecret: false,
      },

    ],
  },
]


