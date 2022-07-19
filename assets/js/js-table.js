function cadastro(name, email, nascimento, telefone) {

    let tb = document.querySelector("#registered tbody");

    tb.innerHTML = ``;
    cadastrados.push({
        name,
        email,
        nascimento,
        telefone

    });

    for (let i = 0; i < cadastrados.length; i++) {
        tb.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${cadastrados[i].name}</td>
        <td>${cadastrados[i].email}</td>
        <td>${cadastrados[i].nascimento}</td>
        <td>${cadastrados[i].telefone}</td>
        
    </tr>
    `;
    }


}

let cadastrados = [
    { name: 'Filipe Morais', email: 'moraisfelipe10@yahoo.com', nascimento: '02032001', telefone: 33988055204 }
];