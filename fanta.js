// Array con le squadre e i budget iniziali
const teams = [
    { name: "Negroni   Team", budget: 550, purchases: [] },
    { name: "Pescaramanzia", budget: 45, purchases: [] },
    { name: "Fratelli Manna", budget: 330, purchases: [] },
    { name: "Berlusca Dortmund", budget: 270, purchases: [] },
    { name: "Jaguars Soccer Club", budget: 20, purchases: [] },
    { name: "Mutamosca", budget: 56, purchases: [] },
    { name: "Steggy Gou", budget: 235, purchases: [] },
    { name: "Passuli FC", budget: 457, purchases: [] }
  ]
  
  // Funzione per visualizzare le squadre e la cronologia degli acquisti
  function displayTeams() {
    const teamList = document.getElementById("teams");
    teamList.innerHTML = ""; // Pulisce la tabella
    teams.forEach((team) => {
      const row = document.createElement("tr");
      const purchases = team.purchases.map(
        (purchase) => `${purchase.player} (${purchase.cost} €)`
      ).join(", ");
      row.innerHTML = `
        <td>${team.name}</td>
        <td>${team.budget} €</td>
        <td>${purchases || "Nessun acquisto"}</td>
      `;
      teamList.appendChild(row);
    });
  }
  
  // Funzione per aggiornare il budget e registrare un acquisto
  function updateBudget(teamName, playerName, cost) {
    const team = teams.find((t) => t.name === teamName);
    if (team) {
      if (team.budget >= cost) {
        team.budget -= cost;
        team.purchases.push({ player: playerName, cost });
        displayTeams(); // Aggiorna la tabella
        alert(`Acquisto registrato! Nuovo budget per ${teamName}: ${team.budget} €`);
      } else {
        alert("Budget insufficiente!");
      }
    } else {
      alert("Squadra non trovata!");
    }
  }
  
  // Gestore dell'evento per il form
  document.getElementById("update-budget-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const teamName = document.getElementById("team-name").value.trim();
    const playerName = document.getElementById("player-name").value.trim();
    const playerCost = parseInt(document.getElementById("player-cost").value);
  
    if (teamName && playerName && !isNaN(playerCost) && playerCost > 0) {
      updateBudget(teamName, playerName, playerCost);
      e.target.reset(); // Resetta i campi del form
    } else {
      alert("Per favore, riempi tutti i campi correttamente.");
    }
  });
  
  // Inizializza la tabella
  displayTeams();
  
