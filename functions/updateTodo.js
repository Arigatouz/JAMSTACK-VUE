const axios = require("axios");
require("dotenv").config();
const sendQuery = require("./util/sendQuery");
const { UPDATE_TODO } = require("./util/todoQueries");
const formattedResponse = require("./util/formattedResponse");

exports.handler = async (event) => {
  const { name, urls, description , _id :id ,finished } = JSON.parse(event.body);
  const variables = { name, urls, description, id , finished };

  try {
    const { updateTodo: updatedTodo } = await sendQuery(UPDATE_TODO, variables);
    return formattedResponse(200, updatedTodo);
  } catch (err) {
    console.error(err.message);
    return formattedResponse(500, { err: "something Went Wrong" });
  }
};
