// 新メンバーが追加した JavaScript ファイル
console.log('プロジェクトに参加しました！');

// 簡単な挨拶機能
function greet(name) {
    return `こんにちは、${name}さん！チームに参加しました。`;
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    console.log(greet('チーム'));
});
