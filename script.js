$(document).ready(function() {
// JSONデータ
var jsonData = [
[2, 0, 0, 0, 0, 'ロンパ'],[3, 0, 0, 0, 0, 'かにちゃん']
,[4, 2, 3, 0, 0, 'すいみんちゃん']
,[5, 0, 0, 0, 0, '光浦靖子（偽物）']
,[5, 0, 0, 0, 0, 'ここから']
,[6, 2, 0, 0, 0, 'アトリエ']
,[7, 0, 0, 0, 0, '昭和亭れとろ']
,[8, 3, 0, 0, 0, 'おせわがかり']
,[9, 0, 0, 0, 0, 'のっぺ']
,[10, 0, 0, 2, 0, '林原よしき']
,[11, 0, 0, 0, 0, '依田']
,[12, 0, 0, 0, 2, 'チンカス本舗']
,[13, 2, 0, 0, 0, 'みくも']
,[14, 0, 3, 0, 3, 'がんばりま翔']
,[15, 0, 0, 0, 0, '中岡フェニックス']
,[16, 2, 2, 2, 3, 'ドスパラのゲーミング饅頭']
,[17, 0, 0, 0, 0, '真似き猫']
,[18, 0, 0, 0, 0, '苑苑']
,[19, 0, 3, 0, 0, 'あんざい@グライシンガー']
,[20, 0, 0, 0, 0, 'すいほ']
,[21, 0, 0, 0, 0, 'とくめい']
,[22, 0, 0, 0, 0, '床屋みの竜レグナード']
,[23, 2, 2, 2, 2, 'GRay']
,[24, 0, 2, 0, 0, '飯田']
,[25, 0, 0, 0, 0, 'モモス']
,[26, 0, 0, 0, 0, 'とおる']
,[27, 0, 2, 0, 0, 'さくらんぼソフト']
,[28, 3, 0, 0, 2, '伸ちゃん']
,[29, 2, 0, 0, 0, 'Y-Not']
,[30, 2, 4, 0, 0, 'YUDE.']
,[31, 0, 0, 0, 0, 'kak']
        // 他のデータ...
    ];
    // DataTableの初期化
    $('#example').DataTable({
        data: jsonData,
        columns: [
            { title: "Column" },
            { title: "バサラ大将" },
            { title: "坂本" },
            { title: "尊敬ラーメン屋" },
            { title: "ゆっけ" },
            { title: "voter" }
        ]
    });
});

