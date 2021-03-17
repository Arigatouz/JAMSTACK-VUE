const axios = require("axios");
require("dotenv").config();
const sendQuery = require("./util/sendQuery");
const { CREATE_TODO } = require("./util/todoQueries");
const formattedResponse = require("./util/formattedResponse");

exports.handler = async (event) => {
  console.log(event.body);
  const { name, urls, description } = JSON.parse(event.body);
  const variables = { name, urls, description, finished: false };

  try {
    const { createTodo: createdTodo } = await sendQuery(CREATE_TODO, variables);
    return formattedResponse(200, createdTodo);
  } catch (err) {
    console.error(err.message);
    return formattedResponse(500, { err: "something Went Wrong" });
  }
};
