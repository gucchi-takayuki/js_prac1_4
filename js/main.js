'use strict'; {
  
  const tasks = [
    {content: '机を片付ける', genre: '掃除'},
    {content: '牛乳を買う', genre: '買い物'},
    {content: '散歩する', genre: '運動'},
  ];
  
  function taskPreview() {
    console.log('=======================');
    console.log('現在持っているタスク一覧');
    console.log('=======================');
  
    tasks.forEach((task, index) => {
      console.log(`${index} : [内容]${task.content}、[ジャンル]${task.genre}`)
    });
  }

  function taskAdd(taskContent, taskGenre) {
    taskContent = prompt('タスクを入力してください');
    taskGenre = prompt('ジャンルを入力してください');
    tasks.push({content: taskContent, genre: taskGenre});
    alert('新しいタスクを追加しました。');
    taskPreview();
    prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');
  }
  
  taskPreview();
  taskAdd();
  
}