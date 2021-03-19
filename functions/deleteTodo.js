const axios = require("axios");
require("dotenv").config();
const sendQuery = require("./util/sendQuery");
const { DELETE_TODO } = require("./util/todoQueries");
const formattedResponse = require("./util/formattedResponse");

exports.handler = async (event) => {
  // to make sure that the user enter http method is delete
  if (event.httpMethod !== "DELETE") {
    return formattedResponse(405, { err: "Http MEthod is not supported" });
  }

  const { _id: id } = JSON.parse(event.body);
  // console.log(id);
  const variables = { id };
  console.log(`variables is >>> ${variables}`);
  try {
    const { deleteTodo: deletedTodo } = await sendQuery(DELETE_TODO, variables);
    return formattedResponse(200, deletedTodo);
  } catch (err) {
    console.error(err.message);
    return formattedResponse(500, { err: "something Went Wrong In Deleting" });
  }
};
