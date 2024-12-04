const data = [
    {
        id: 1,
        name: 'Anton',
        balance: 30,
        avaUrl: '',
        bank: 1000,
    },
    {
        id: 2,
        name: 'Kiril',
        balance: 50,
        avaUrl: '',
        bank: 2000,
    },
    {
        id: 3,
        name: 'Аня',
        balance: 10,
        avaUrl: '',
        bank: 5000,
    },
    {
        id: 4,
        name: 'Nick',
        balance: 40,
        avaUrl: '',
        bank: 600,
    },
    {
        id: 5,
        name: 'Masha',
        balance: 90,
        avaUrl: '',
        bank: 9000,
    },
]

const wrapper = document.querySelector('.wrapper');
const details = document.querySelector('.details');

data.map((e, i) => {
    const card = document.createElement('div');
    card.innerHTML = `
        <div class="card" data-id="${e.id}">
            <img src=${e.avaUrl ? e.avaUrl : '../images/ava.png'} alt="ava${e.id}">
            <b>${e.name}</b>
            <p>$${e.balance}</p>
        </div>
    `;
    wrapper.appendChild(card);

    card.addEventListener('click', () => {
        details.innerHTML = `
            <div class="details-content">
                <img src=${e.avaUrl ? e.avaUrl : '../images/ava.png'} alt="ava${e.id}">
                <b>Name: <p>${e.name}</p></b>
                <b>Balance: <p>$${e.balance}</p></b>
                <b>Bank: <p>$${e.bank}</p></b>
                <button class="btn">Back</button>
            </div>
        `;
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            wrapper.style.display = 'grid';
            details.style.display = 'none';
        });

        wrapper.style.display = 'none';
        details.style.display = 'block';
    });
})

