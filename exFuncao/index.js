class computador {
    tipoComputador;
    processador;
    video;
    armazenamento;
    memoriaRam;
    sdd;

    constructor(tipoComputador, processador, video, armazenamento, memoriaRam, ssd) {
        this.TipoComputador = tipoComputador;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = memoriaRam;
        this.Ssd = ssd;
    }

    apresentacao() {
        console.log(`qual tipo de computador ? " ${this.TipoComputador}`);
        console.log(`processador ? " ${this.Processador}`);
        console.log(`video ? " ${this.Video}`);
        console.log(`armazenamento " ${this.Armazenamento}`);
        console.log(`memoriaRam ? " ${this.MemoriaRam}`);
        console.log(`SSD ? " ${this.Ssd}`);

    }
}

let meuComputador = new computador("note", "Ryzen 5", "dedicado", 1000, 32, false)
meuComputador.apresentacao();

