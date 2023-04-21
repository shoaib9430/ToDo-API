const User = require("../../models/user");
const Todo = require("../../models/todo");

module.exports.create = async (req,res) => {
  try {
    let todo = await Todo.create({
      title: req.body.title,
      content: req.body.content,
      status: "pending",
      user: req.user._id,
    });
    return res.status(200).json({
      success: true,
      message: "Hurray! data is created",
      data: {
        todo: todo,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports.get = async (req,res) => {
  try {
    let todos = await Todo.find({ userid: req.user._id });
    if (todos) {
      return res.status(200).json({
        success: true,
        message: "Hurray! You fetched the Todo successfully",
        data: {
          todos: todos,
        },
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports.getall = async (req,res) => {
    try {
        let todos = await Todo.find();
        if (todos) {
          return res.status(200).json({
            success: true,
            message: "Hurray! You fetched all Todos sucessfully",
            data: {
              todos: todos,
            },
          });
        } else {
          return res.status(500).json({
            success: false,
            message: "Internal Server Error",
          });
        }
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }
};
module.exports.update = async (req,res) => {
    try {
        let todo = await Todo.findOneAndUpdate(req.params.id ,req.body);
        if (todo){
            return res.status(200).json({
                success: true,
                message: "Hurray! data is updated",
                data: {
                  todos: todo,
                },
              });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
          });
    }
};
module.exports.delete = async (req,res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Todo Delted",
          });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
          });
    }
};