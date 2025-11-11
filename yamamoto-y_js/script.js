'use strict';

    // const enemyHpWindow = document.getElementById('re_hp');
    // enemyHp.textContent = `${}  /  100`;

    //問題文をランダム数を使って、windowsに表記
    const questions = ['わはは',
      '最高',
      'やるやん',
      '天才',
      'がんばって',
      'うちはうちよそはよそ',
      '手',
      '足',
      '胸',
      'くび',
    ];
    const quetionNum = 1 + Math.floor(Math.random() * 10);
    const questionBun = questions[quetionNum];
    document.getElementById('question').textContent = questionBun;
    console.log(questionBun);

    //クリックしたら、正解なら敵にダメージ、不正解ならプレイヤーにダメージ
    document.getElementById('btn').onclick = function () {
      const ans = document.getElementById('ans_field').value;
      console.log(ans);
      if (questionBun === ans) {
        enemyDamage();
      } else {
        playerDamage();
      }
    };

    


    //敵のHPとダメージを設定する。
    let fullEnemyHp = 100;
    let enemyHp;
    //ダメージを設定
    let damage;
    damage = Math.floor(Math.random() * 30) + 20;

    //敵ダメージを与える関数
    function enemyDamage() {
      enemyHp = fullEnemyHp - damage;
      const enemyHpWindow = document.getElementById('enemy_rehp');
      enemyHpWindow.textContent = `${enemyHp} / 100`;
    };


    //プレイヤーのHPとダメージ
    let fullPlayerHp = 100;
    let playerHp;

    //プレイヤーにダメージを与える関数
    function playerDamage() {
      playerHp = fullPlayerHp - damage;
      const playerHpWindow = document.getElementById('player_rehp');
      playerHpWindow.textContent = `${playerHp} / 100`;
    };



