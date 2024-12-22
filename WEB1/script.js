function guardarRespostesXML() {  
    const pregunta1 = document.getElementById("pregunta1").value;  
    const pregunta2 = document.getElementById("pregunta2").value;  
    const pregunta3 = document.getElementById("pregunta3").value;  
    const pregunta4 = document.getElementById("pregunta4").value;  
    const pregunta5 = document.getElementById("pregunta5").value;  
    const pregunta6 = document.getElementById("pregunta6").value;  
    const pregunta7 = document.getElementById("pregunta7").value;  

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>  
<respostes>  
    <pregunta>  
        <text>La digitalització és un aspecte important al teu negoci?</text>  
        <resposta>${pregunta1}</resposta>  
    </pregunta>  
    <pregunta>  
        <text>Identifiques les eines necessàries per digitalitzar el teu negoci?</text>  
        <resposta>${pregunta2}</resposta>  
    </pregunta>  
    <pregunta>  
        <text>S'utilitzen canals digitals?</text>  
        <resposta>${pregunta3}</resposta>  
    </pregunta>  
    <pregunta>  
        <text>Fas servir algunes eines digitals de gestió en el teu negoci per automatitzar processos?</text>  
        <resposta>${pregunta4}</resposta>  
    </pregunta>  
    <pregunta>  
        <text>Vens els teus productes i/o serveis a través de canals digitals?</text>  
        <resposta>${pregunta5}</resposta>  
    </pregunta>  
    <pregunta>  
        <text>Et relacionas amb els teus clients a través de canals digitals?</text>  
        <resposta>${pregunta6}</resposta>  
    </pregunta>  
    <pregunta>  
        <text>El teu negoci té eines per mesurar la ràtio de satisfacció dels clients?</text>  
        <resposta>${pregunta7}</resposta>  
    </pregunta>  
</respostes>`;  

    localStorage.setItem('respostesXML', xmlContent);  
}