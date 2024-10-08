import axios from "axios";
import programs from "../data/programs.js";

export default async (event) => {
	try {
		const now = new Date();
		const { data } = await axios.post("https://search.opentix.life/search", {
			categoryFilter: [event.postback.data],
			cityFilter: ["臺北", "新北"],
			language: "zh-CHT",
			programTimeRangeFilter: {
				to: now.getTime() + 7 * 24 * 60 * 60 * 1000,
				from: now.getTime()
			},
			sortBy: "ABOUT_TO_BEGIN"
		});

		const bubbles = [];
		for (let i = 0; i < 5; i++) {
			if (!data.result.found?.[i]) break;
			const bubble = programs();
			bubble.hero.url = data.result.found[i].source.imageUrl;
			bubble.body.contents[0].text = data.result.found[i].source.title;
			bubble.body.contents[1].contents[0].contents[1].text = data.result.found[i].source.displayCategory;
			bubble.body.contents[1].contents[1].contents[1].text = data.result.found[i].source.eventVenues[0].name;
			bubbles.push(bubble);
		}

		if (bubbles.length === 0) {
			event.reply("沒有符合篩選條件的節目喔");
			return;
		}

		const result = await event.reply({
			type: "flex",
			altText: "節目資訊",
			contents: {
				type: "carousel",
				contents: bubbles
			}
		});
		console.log(result);
	} catch (e) {
		console.log(e);
	}
};

// Keep the server awake by pinging a specific route
function keepAwake() {
	setInterval(() => {
		axios
			.get("https://你的後台網址/ping") // 確保更換成你的後台伺服器的 URL
			.then(() => console.log("Ping success"))
			.catch((error) => console.error("Ping failed:", error));
	}, 300000); // 每 5 分鐘 ping 一次
}

// 在主程式中啟動 keepAwake 函式
keepAwake();
