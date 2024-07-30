const { responseObj, messages, successMsg, errorMsg } = require("../constants/index");
const fs = require("fs");
const path = require("path")

exports.getPlans = async (req, res) => {
  try {
    const myPath = path.join(__dirname, '../commonfiles/plans.json');
    const plans = JSON.parse(fs.readFileSync(myPath, "utf8"));
    console.log(plans,"=========plans list")
    return res.json({
      result: responseObj(true, 200, successMsg.plansFound, plans),
    });
  } catch (err) {
    console.log(err, "====err");
    return res.json({
      result: responseObj(false, 500, messages.SomethingWentWrong, err),
    });
  }
};

exports.planActivate = async (req, res) => {
  try {
    const { planId, startTime, endTime, usage } = req.body;
    const myPath = path.join(__dirname, '../commonfiles/plans.json');
    console.log(myPath, "=====myPath plans.json active plan");
    const plans = JSON.parse(fs.readFileSync(myPath, 'utf8'));

    const plan = plans.find((p) => p.id === planId);
    if (plan) {
      const activation = {
        planId,
        startTime,
        endTime,
        usage,
        remainingData: plan.data - usage,
      };
      let activations = [];
      activations.push(activation);
      fs.writeFileSync(
        "activations.json",
        JSON.stringify(activations, null, 2)
      );
      return res.json({
          result: responseObj(false, 201, successMsg.planActivated, activation),
      });
    } else {
        return res.json({
            result: responseObj(false, 400, errorMsg.planIDNotFound),
        });
    }
  } catch (err) {
    console.log(err, "====err");
    return res.json({
      result: responseObj(false, 500, messages.SomethingWentWrong, err),
    });
  }
};
