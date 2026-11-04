// One hidden canvas reused for every measurement (creating one per call is wasteful).
let canvas: HTMLCanvasElement | null = null;

/**
 * Cuts `text` so it fits inside a box of `maxWidth` px and `maxLines` lines,
 * adding "..." at the end when it had to cut.
 *
 * How it works:
 * 1. A <canvas> can tell us how wide a string is in pixels for a given font
 *    (ctx.measureText) without putting anything on the page.
 * 2. We fake the browser's word-wrapping to count how many lines a string needs.
 * 3. If the full text fits, return it. Otherwise binary-search for the longest
 *    start of the text that still fits once "..." is added.
 */
export function fitText(
    text: string,
    maxWidth: number,
    maxLines: number,
    font?: string
): string {
    if (!canvas) canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return text;

    // Default: 16px in whatever font the page body uses (same as the name <p>).
    ctx.font = font ?? `16px ${getComputedStyle(document.body).fontFamily}`;

    const fitsOnOneLine = (s: string) => ctx.measureText(s).width <= maxWidth;

    // Mimics the browser: keep adding words to a line until the next one doesn't fit.
    const countLines = (s: string) => {
        let lines = 1;
        let current = "";
        for (const word of s.split(" ")) {
            const attempt = current ? `${current} ${word}` : word;
            if (fitsOnOneLine(attempt) || !current) {
                current = attempt;
            } else {
                lines++;
                current = word;
            }
        }
        return lines;
    };

    const clean = text.trim().replace(/\s+/g, " ");
    if (countLines(clean) <= maxLines) return clean;

    // Binary search: biggest `n` where clean.slice(0, n) + "..." still fits.
    let low = 0;
    let high = clean.length;
    while (low < high) {
        const mid = Math.ceil((low + high) / 2);
        const candidate = clean.slice(0, mid).trimEnd() + "...";
        if (countLines(candidate) <= maxLines) low = mid;
        else high = mid - 1;
    }

    return clean.slice(0, low).trimEnd() + "...";
}
