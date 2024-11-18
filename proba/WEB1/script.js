/**
 * Funció per guardar les respostes d'un formulari en un fitxer XML.
 * La funció recupera les respostes de les preguntes del formulari, comprova que totes
 * les preguntes estiguin respostes, genera un fitxer XML amb aquestes respostes i permet
 * descarregar-lo com un fitxer `.xml`.
 */
function guardarRespostesXML() {
    // Obtenir les respostes del formulari per a cada pregunta.
    const pregunta1 = document.getElementById("pregunta1").value;
    const pregunta2 = document.getElementById("pregunta2").value;
    const pregunta3 = document.getElementById("pregunta3").value;
    const pregunta4 = document.getElementById("pregunta4").value;
    const pregunta5 = document.getElementById("pregunta5").value;
    const pregunta6 = document.getElementById("pregunta6").value;
    const pregunta7 = document.getElementById("pregunta7").value;

    // Comprovar que totes les preguntes estan respostes, si no, mostra un avís.
    if (!pregunta1 || !pregunta2 || !pregunta3 || !pregunta4 || !pregunta5 || !pregunta6 || !pregunta7) {
        alert("Tots els camps han de ser omplerts.");
        return;  // Si alguna pregunta està buida, la funció s'atura i no continua.
    }

    // Crear el contingut XML amb les respostes obtingudes.
    let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<respostes>
    <pregunta>
        <text>1. La digitalització és un aspecte important al teu negoci?</text>
        <resposta>${pregunta1}</resposta>
    </pregunta>
    <pregunta>
        <text>2. Identifiques les eines necessàries per digitalitzar el teu negoci?</text>
        <resposta>${pregunta2}</resposta>
    </pregunta>
    <pregunta>
        <text>3. S'utilitzen canals digitals?</text>
        <resposta>${pregunta3}</resposta>
    </pregunta>
    <pregunta>
        <text>4. Fas servir algunes eines digitals de gestió en el teu negoci per automatitzar processos?</text>
        <resposta>${pregunta4}</resposta>
    </pregunta>
    <pregunta>
        <text>5. Vens els teus productes i/o serveis a través de canals digitals?</text>
        <resposta>${pregunta5}</resposta>
    </pregunta>
    <pregunta>
        <text>6. Et relaciones amb els teus clients a través de canals digitals?</text>
        <resposta>${pregunta6}</resposta>
    </pregunta>
    <pregunta>
        <text>7. El teu negoci té eines per mesurar la ràtio de satisfacció dels clients?</text>
        <resposta>${pregunta7}</resposta>
    </pregunta>
</respostes>`;

    // Crear un fitxer XML a partir del contingut generat.
    const blob = new Blob([xmlContent], { type: 'application/xml' });

    // Crear un enllaç per descarregar el fitxer.
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "respostes.xml";  // Nom del fitxer XML que es descarregarà.
    link.click();  // Simula un clic per començar la descàrrega.

    // Revocar l'URL creat per alliberar recursos del navegador.
    URL.revokeObjectURL(link.href);
}
