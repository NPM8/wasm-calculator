import("../../../pkg/index").then(
    async ({ doMath }) => {
        chrome.runtime.onMessage.addListener((mes,sender, respons) => {
            if (mes.text) {
                const { text } = mes;
                const textArray = text.split(" ");

                const number = doMath(parseInt(textArray[0], 10), parseInt(textArray[2], 10), textArray[1]);

                respons({number})
            }

        });
    }
).catch(() => "something went wrogn");