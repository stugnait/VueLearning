function calculateIceCreamCost(): void {
    const small_cup_cost = 10;
    const large_cup_cost = 25;
    const marshmello_cost = 5;

    const topping_cost: { [key: string]: number } = {
        chocolate: 5,
        caramel: 6,
        berries: 10,
    };

    const cupSize = prompt("Виберіть розмір стаканчика (s або l):")?.toLowerCase();

    let totalCost = 0;

    if (cupSize === "s") {
        totalCost += small_cup_cost;
    } else if (cupSize === "l") {
        totalCost += large_cup_cost;
    } else {
        alert("Неправильний вибір розміру стаканчика");
        return;
    }

    const toppingsInput = prompt("Виберіть начинку (chocolate, caramel, berries). Введіть через кому, якщо кілька:");
    if (toppingsInput) {
        const toppings = toppingsInput.split(",").map(topping => topping.trim().toLowerCase());
        for (const topping of toppings) {
            if (topping_cost[topping]) {
                totalCost += topping_cost[topping];
            } else {
                alert(`Начинка "${topping}" не знайдена`);
                return;
            }
        }
    } else {
        alert("Необхідно вибрати принаймні одну начинку");
        return;
    }

    const addMarshmallow = prompt("Чи бажаєте додати маршмелоу? (y або n):")?.toLowerCase();
    if (addMarshmallow === "y") {
        totalCost += marshmello_cost;
    }

    alert(`Загальна вартість морозива: ${totalCost} грн`);

}

