module.exports = class AreaCalculation {
    constructor(area, clouds, airports) {
        this.area = area;
        this.clouds = clouds;
        this.airports = airports;
        this.airportsUncover = airports;
        this.firstDayAirportCover = 0;
        this.initArea = [];
        this.daysArea = [];
        this.currencyDay = [];
        this.firstDay = 0;
        this.lastDay = 0;
    }
    init() {
        for (let i = 0; i < this.area; i++) {
            this.initArea[i] = [];
            for (let j = 0; j < this.area; j++) {
                this.initArea[i][j] = 0;
            }
        }
        this.setFirstDay();
    }
    setFirstDay() {
        this.setFistPoints(this.airports, 1);
        this.setFistPoints(this.clouds, 2);
        this.daysArea.push(this.initArea);
        this.setNextDays();
    }
    setFistPoints(type, value, tryNumbers = 0) {
        for (let i = 0; i < type; i++) {
            let randomI = this.getRandom(0, this.area - 1);
            let randomJ = this.getRandom(0, this.area - 1);
            if (this.initArea[randomI][randomJ] === 1) {
                if (tryNumbers < 5) {
                    this.setFistPoints(type, value, tryNumbers++);
                } else {
                    if (
                        this.initArea[randomI + 1][randomJ] &&
                        this.initArea[randomI + 1][randomJ] === 0
                    ) {
                        this.initArea[randomI + 1][randomJ] = value;
                    } else if (
                        this.initArea[randomI - 1][randomJ] &&
                        this.initArea[randomI - 1][randomJ] === 0
                    ) {
                        this.initArea[randomI + 1][randomJ] = value;
                    }
                }
            } else {
                this.initArea[randomI][randomJ] = value;
            }
        }
    }
    setNextDays() {
        while (this.airportsUncover > 0) {
            let totalDay = this.daysArea.length;
            this.currencyDay = JSON.parse(
                JSON.stringify(this.daysArea[totalDay - 1])
            );

            this.currencyDay.forEach((item, indexI) => {
                item.forEach((item2, indexJ) => {
                    if (item2 === 2) {
                        let prevI = indexI - 1;
                        let nextI = indexI + 1;
                        let prevJ = indexJ - 1;
                        let nextJ = indexJ + 1;

                        if (this.currencyDay[indexI][indexJ] !== 2) {
                            return false;
                        }

                        this.setCloud(indexI, prevJ); // Left
                        this.setCloud(indexI, nextJ); // Right
                        this.setCloud(prevI, indexJ); // Up
                        this.setCloud(nextI, indexJ); // Down
                    }
                });
            });

            this.currencyDay.forEach((item, indexI) => {
                item.forEach((item2, indexJ) => {
                    if (item2 === -1) {
                        this.currencyDay[indexI][indexJ] = 2;
                    }
                });
            });

            this.daysArea.push(this.currencyDay);
        }
    }
    setCloud(index1, index2) {
        if (
            this.currencyDay[index1] !== undefined &&
            this.currencyDay[index1][index2] !== undefined
        ) {
            if (this.currencyDay[index1][index2] === 1) {
                this.decreaseAirportUncover();
            }
            this.currencyDay[index1][index2] = -1;
        }
    }
    decreaseAirportUncover() {
        this.airportsUncover--;
        if (this.airportsUncover === this.airports - 1) {
            this.firstDay = this.daysArea.length + 1;
        }
        if (this.airportsUncover === 0) {
            this.lastDay = this.daysArea.length + 1;
        }
    }
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
