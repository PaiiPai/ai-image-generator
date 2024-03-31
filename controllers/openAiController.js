const axios = require("axios").default;
const options = {
  method: "POST",
  url: "https://api.edenai.run/v2/image/generation",
  headers: {
    authorization: `Bearer ${process.env.MY_API_KEY}`,
  },
  data: {
    providers: "deepai",
    text: "a bunny eared waifu with size A breasts",
    resolution: "512x512",
    fallback_providers: "",
  },
};

const imgGenerator = async (req, res) => {
  try {
    const response = await axios.request(options);

    const imgData = response.data.items[0];

    res.status(200).json({
      success: true,
      data: imgData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Image generation failed: " + error,
    });
  }
};

const openAiController = {
  imgGenerator,
};

module.exports = openAiController;
