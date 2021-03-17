const axios = require("axios");
require("dotenv").config();
const sendQuery = require("./util/sendQuery");
const { GET_TODO } = require("./util/todoQueries");
const formattedResponse = require("./util/formattedResponse");

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_TODO);
    const data = res.allTodos.data;
    return formattedResponse(200, data);
  } catch (err) {
    console.error(err.message);
    return formattedResponse(500, { err: "something Went Wrong" });
  }
};
