const axios = require("axios");
require("dotenv").config();
const sendQuery = require("./util/sendQuery");
const { DELETE_TODO } = require("./util/todoQueries");
const formattedResponse = require("./util/formattedResponse");

exports.handler = async (event) => {
  const { _id: id } = JSON.parse(event.body);
  const variables = { id };

  try {
    const { deleteTodo: deletedTodo } = await sendQuery(DELETE_TODO, variables);
    return formattedResponse(200, deletedTodo);
  } catch (err) {
    console.error(err.message);
    return formattedResponse(500, { err: "something Went Wrong" });
  }
};
