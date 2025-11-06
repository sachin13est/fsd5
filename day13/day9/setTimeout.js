const printMessage = (msg) => {
    console.log(msg);
};

const bookTicket = () => {
    printMessage("welcome");

    setTimeout(() => {
        printMessage("login has been done successfully");

        setTimeout(() => {
            printMessage("seat has been chosen successfully");

            setTimeout(() => {
                printMessage("payment has been done");

                setTimeout(() => {
                    printMessage("Ticket has been confirmed");
                }, 2000);

            }, 3000);

        }, 4000);

    }, 3000);

    printMessage("thank you");
};

bookTicket();
