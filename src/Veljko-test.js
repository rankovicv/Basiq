const BasiqSDK = require("./index");
const FilterListAvg = require("./helpers/FilterListAvg");
FilterBuilder = BasiqSDK.FilterBuilder;

(async function () {

    const session = await BasiqSDK.Session("MGNhYjk3YmEtYmY4My00YjRhLWI1Y2YtMzRhNWIwZGZhNzUzOmI3ODkwNTliLTk0NmQtNDIwMS05MmZhLTM1YmJkODE2ZTUwOA==", "2.0");

    const user = session.forUser("07a23aba-1a00-4508-9b91-993be92669a6");

    try {
        const fb = new FilterBuilder();
        fb.eq("institution.id", "AU00000")

        const transactions = await user.getTransactions(fb);

        subclasses = transactions.getAllSubClassInfo();

        subclasses.forEach(function (subclass) {
            console.log(subclass.print());
        })

        const secondSolution = FilterListAvg.getAvgForTransactionListByFilter(transactions.data, "subClass", "code");

        secondSolution.forEach(function (item) {
            console.log(`Code: ${item.type}, Avg:  ${item.average()}`);
        })


    } catch (e) {
        console.error(typeof e, e);
    }

})();