const data = [
    {
        id: 1,
        name: 'Anton',
        balance: 30,
        avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjPSdqg5_VuBrSk-YaQhKBMUT9Wsku0yxWA&s',
        bank: 1000,
        bgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0_RDc3Z9B_Xaim-UpXMpSCVmvFBMltyA2w&s',
        uStatus: 'vip',
    },
    {
        id: 2,
        name: 'Kiril',
        balance: 50,
        avaUrl: '',
        bank: 2000,
        bgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2VTNuOtaPvUwRw7pbAO3pUlR1rG8vA4P1g&s',
        uStatus: 'player',
    },
    {
        id: 3,
        name: 'Аня',
        balance: 10,
        avaUrl: '',
        bank: 5000,
        bgUrl: '',
        uStatus: 'vip',
    },
    {
        id: 4,
        name: 'Nick',
        balance: 40,
        avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddToAAjv2Ip1pkLQmSZ6qPPMmVPcr4pwTQA&s',
        bank: 600,
        bgUrl: '',
        uStatus: 'player',
    },
    {
        id: 5,
        name: 'Masha',
        balance: 90,
        avaUrl: '',
        bank: 9000,
        bgUrl: '',
        uStatus: 'player',
    },
];

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
                <div class="img">
                    <img src=${e.avaUrl ? e.avaUrl : '../images/ava.png'} alt="ava${e.id}">
                </div>
                <b>Name: <p>${e.name}</p></b>
                <b>Balance: <p>$${e.balance}</p></b>
                <b>Bank: <p>$${e.bank}</p></b>
                <button class="btn">Back</button>
            </div>
        `;
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            details.classList.remove('show');
        });
        setTimeout(() => {
            details.classList.add('show');
            e.bgUrl ? details.style.backgroundImage = `url(${e.bgUrl})` : details.style.background = '#2a2a2a';
        }, 50);
    });
});

