const msg: string = "hoge";

// 参考資料
// https://speakerdeck.com/recruitengineers/typescriptru-men-2024?slide=39

console.log("massage is " + msg + ".");
console.log("length:" + msg.length);

// どうやって自動で;をつけるの
type User = {
    firstName: string,
    lastName: string,
    age: number,
    favoriteFoods: string[], // [3]とはかけない？
    hasProgrammingExperience: boolean,
};

const user: User = {
    firstName: "太郎",
    lastName: "山田",
    age: 24,
    favoriteFoods: ["寿司", "ラーメン", "カレー"],
    hasProgrammingExperience: true,
}

function getSelfIntroduction(user: User): string {
    console.log("名前は" + user.firstName + " " + user.lastName + "です。");
    console.log("年齢は" + user.age + "です。");
    console.log("好きな食べ物は" + user.favoriteFoods + "です。");
    // 式以外の文字列が表示されない
    console.log("プログラミングの経験が" + user.hasProgrammingExperience ? "あります" : "ありません" + "。");

    return "hoge";
}

getSelfIntroduction(user);