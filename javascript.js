function generateTokens() {
    // Fetch input values and convert them to numbers where applicable
    const blueCount = Number(document.getElementById("blueCount").value);
    const bluePrefix = document.getElementById("bluePrefix").value || '';
    const bluePerRow = Number(document.getElementById("bluePerRow").value) || 1;
  
    const redCount = Number(document.getElementById("redCount").value);
    const redPrefix = document.getElementById("redPrefix").value || '';
    const redPerRow = Number(document.getElementById("redPerRow").value) || 1;
  
    // Containers for tokens
    const blueTokensContainer = document.getElementById("blueTokensContainer");
    const redTokensContainer = document.getElementById("redTokensContainer");
  
    // Clear previous tokens
    blueTokensContainer.innerHTML = '';
    redTokensContainer.innerHTML = '';
  
    // Set CSS grid style for blue tokens
    blueTokensContainer.style.display = "grid";
    blueTokensContainer.style.gridTemplateColumns = `repeat(${bluePerRow}, 1fr)`;
  
    // Set CSS grid style for red tokens
    redTokensContainer.style.display = "grid";
    redTokensContainer.style.gridTemplateColumns = `repeat(${redPerRow}, 1fr)`;
  
    // Generate blue tokens
    for (let i = 0; i < blueCount; i++) {
      const token = document.createElement("div");
      token.classList.add("token", "blue-token");
      token.textContent = `${bluePrefix}${i + 1}`;
      blueTokensContainer.appendChild(token);
    }
  
    // Generate red tokens
    for (let i = 0; i < redCount; i++) {
      const token = document.createElement("div");
      token.classList.add("token", "red-token");
      token.textContent = `${redPrefix}${i + 1}`;
      redTokensContainer.appendChild(token);
    }
  }
  