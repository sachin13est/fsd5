const printMessage = (msg) => {
    console.log(msg);
};

const waitFun = (msg, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            printMessage(msg);
            resolve();
        }, time);
    });
};

const bookTicket = () => {
    printMessage("welcome");

    waitFun("login has been done successfully", 3000)
        .then(() => waitFun("seat has been chosen successfully", 3000))
        .then(() => waitFun("payment has been done", 3000))
        .then(() => waitFun("Ticket has been confirmed", 2000))
        .then(() => printMessage("thank you"));
};

const bookTicket2 = async () => {
    printMessage("welcome");

    await waitFun("login has been done successfully", 3000);
    await waitFun("seat has been chosen successfully", 3000);
    await waitFun("payment has been done", 3000);
    await waitFun("Ticket has been confirmed", 2000);

    printMessage("thank you");
};

bookTicket();
