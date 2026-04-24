const { buildGraph } = require("../utils/graphUtils");

exports.processData = (req, res) => {
    const { data } = req.body;

    const result = buildGraph(data);

    res.json({
        user_id: "kammaullas_30072005",
        email_id: "ullas_kamma@srmap.edu.in",
        college_roll_number: "AP23110011303",
        ...result
    });
};