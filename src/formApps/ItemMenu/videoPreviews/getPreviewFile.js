export function getPreviewFile(data) {
    if (data.includes("undefined")) { return; }
    let seqFiles = Sequencer.Database.getEntry(data);
    if (Array.isArray(seqFiles)) {
        seqFiles = seqFiles[0].file;
        if (Array.isArray(seqFiles)) {
            return seqFiles[0].file;
        }
        if (isObject(seqFiles)) {
            if (Array.isArray(seqFiles["15ft"])) {
                seqFiles = seqFiles["15ft"];
                return seqFiles[0];
            }
            seqFiles = seqFiles["15ft"]
            return seqFiles[0];
        }
        return seqFiles;
    }
    if (isObject(seqFiles.file)) {
        if (Array.isArray(seqFiles.file["15ft"])) {
            seqFiles = seqFiles.file["15ft"];
            return seqFiles[0];
        }
        return seqFiles.file["15ft"];
    }
    return seqFiles.file;
    function isObject(test) {
        return typeof test === "object";
    }
}
