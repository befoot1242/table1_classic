// 1722608479.7702882
$(document).ready(function() {
// JSONデータ
var jsonData = [
[72, 3, 0, 0, 2, '伯林'],[71, 0, 0, 0, 0, '米(おこめ)']
,[70, 0, 0, 0, 0, 'いさむ']
,[69, 3, 0, 4, 0, 'すでにショーン']
,[68, 2, 0, 0, 0, '否定から入るオンザビーチ']
,[67, 0, 0, 0, 0, 'アキラ♪シゲル']
,[66, 0, 0, 0, 2, '農園']
,[65, 3, 2, 2, 3, 'げら']
,[64, 0, 0, 0, 0, 'せんだい']
,[63, 0, 2, 0, 2, 'ギャル']
,[62, 0, 0, 0, 2, 'さんれ']
,[61, 2, 0, 0, 3, '埼玉県民']
,[60, 0, 0, 0, 0, 'bmo']
,[59, 2, 0, 0, 3, 'たたかう']
,[58, 0, 0, 0, 0, '鶴bay']
,[57, 2, 0, 0, 0, 'ママまじん']
,[56, 2, 0, 0, 0, 'ミスチル']
,[55, 2, 0, 0, 0, '田口']
,[54, 0, 0, 0, 0, 'かすとろ']
,[53, 0, 0, 0, 0, 'SLIME']
,[52, 0, 0, 0, 0, 'pomio']
,[51, 0, 0, 0, 0, 'ブルックス']
,[50, 0, 0, 0, 0, 'たこ焼きボンバー']
,[49, 2, 2, 2, 2, 'かごめ']
,[49, 2, 2, 2, 2, 'ぱんだサーカス']
,[48, 0, 0, 0, 0, 'エネ彦']
,[47, 2, 0, 0, 0, '西園']
,[46, 0, 0, 0, 0, 'かえんのちき']
,[45, 0, 0, 0, 0, 'にとる']
,[44, 0, 0, 0, 2, 'みちる']
,[43, 2, 3, 0, 0, 'キミテル']
,[42, 3, 3, 0, 0, 'くとぅるふ']
,[41, 0, 0, 0, 0, '烈風ぺんぎん']
,[40, 0, 0, 0, 0, 'guniguni']
,[39, 0, 0, 0, 0, 'ベビーパンピー']
,[38, 0, 0, 0, 0, 'foo']
,[37, 0, 2, 0, 0, 'ジョイントコルテス']
,[36, 0, 0, 0, 0, 'ペドラザ']
,[35, 0, 0, 0, 4, '水山']
,[34, 0, 3, 0, 0, 'やる時々やるみ']
,[33, 0, 0, 0, 0, 'ふんりゅうおうのちゃんこ']
,[32, 2, 0, 2, 0, 'ゆう☆ポンデ']
,[31, 0, 0, 0, 0, 'kak']
,[30, 2, 4, 0, 0, 'YUDE.']
,[29, 2, 0, 0, 0, 'Y-Not']
,[28, 3, 0, 0, 2, '伸ちゃん']
,[27, 0, 2, 0, 0, 'さくらんぼソフト']
,[26, 0, 0, 0, 0, 'とおる']
,[25, 0, 0, 0, 0, 'モモス']
,[24, 0, 2, 0, 0, '飯田']
,[23, 2, 2, 2, 2, 'GRay']
,[22, 0, 0, 0, 0, '床屋みの竜レグナード']
,[21, 0, 0, 0, 0, 'とくめい']
,[20, 0, 0, 0, 0, 'すいほ']
,[19, 0, 3, 0, 0, 'あんざい@グライシンガー']
,[18, 0, 0, 0, 0, '苑苑']
,[17, 0, 0, 0, 0, '真似き猫']
,[16, 2, 2, 2, 3, 'ドスパラのゲーミング饅頭']
,[15, 0, 0, 0, 0, '中岡フェニックス']
,[14, 0, 3, 0, 3, 'がんばりま翔']
,[13, 2, 0, 0, 0, 'みくも']
,[12, 0, 0, 0, 2, 'チンカス本舗']
,[11, 0, 0, 0, 0, '依田']
,[10, 0, 0, 2, 0, '林原よしき']
,[9, 0, 0, 0, 0, 'のっぺ']
,[8, 3, 0, 0, 0, 'おせわがかり']
,[7, 0, 0, 0, 0, '昭和亭れとろ']
,[6, 2, 0, 0, 0, 'アトリエ']
,[5, 0, 0, 0, 0, 'ここから']
,[5, 0, 0, 0, 0, '光浦靖子（偽物）']
,[4, 2, 3, 0, 0, 'すいみんちゃん']
,[3, 0, 0, 0, 0, 'かにちゃん']
,[2, 0, 0, 0, 0, 'ロンパ']
        // 他のデータ...
    ];
    // DataTableの初期化
    $('#example').DataTable({
        data: jsonData,
        displayLength: 101,
        order: [ [ 0, "desc" ] ],
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

