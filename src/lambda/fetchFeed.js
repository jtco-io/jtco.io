// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

async function feedGenerator() {
  function news(count = 10) {
    let i = 0;
    const items = [];
    while (i < count) {
      items.push({
        title: "News today!",
        body: "Todays body!"
      });
      i++;
    }
    return items;
  }
  return news();
}

export async function handler(event, context) {
  try {
    // const response = await axios.get("https://icanhazdadjoke.com", {
    //   headers: { Accept: "application/json" }
    // });
    // const data = response.data;

    const articles = await feedGenerator(100)
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: "Successfully fetched Feed",
        articles: articles
      })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
