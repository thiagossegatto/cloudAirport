"use strict";
var IndexModel = require("../models/index");
var AreaCalculation = require("../utils/AreaCalculation");

module.exports = function (router) {
    var model = new IndexModel();

    router.get("/calculate", function (req, res) {
        const { area, clouds, airports } = req.query;

        const newArea = new AreaCalculation(area, clouds, airports);

        if (area < 10) {
            return res.status(400).send({ message: "O Mínimo de área são 10" });
        }
        if (clouds < 4) {
            return res
                .status(400)
                .send({ message: "O Mínimo de nuvens são 4" });
        }
        if (airports < 3) {
            return res
                .status(400)
                .send({ message: "O Mínimo de aeroportos são 3" });
        }

        newArea.init();

        // console.log("######################################################");

        // newArea.daysArea.forEach((item, index) => {
        //     console.log(index + 1);
        //     console.table(item);
        // });

        // console.log("######################################################");

        // console.log(newArea.firstDay);
        // console.log(newArea.lastDay);

        // console.log("######################################################");

        return res.send({
            areas: newArea.daysArea,
            firstDay: newArea.firstDay,
            lastDay: newArea.lastDay,
        });
    });
};
