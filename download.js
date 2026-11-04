import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'

// We use a curated list of premium URLs to prevent broken downloads, 
// but we map them to 120 distinct filenames for your local assets.
const baseUrls = {
    womenswear: ['1572804013309-59a88b7e92f1', '1515886657613-9f3515b0c78f', '1539109136881-3be0616acf4b', '1566174053879-31528523f8ae', '1583391733956-3750e0ff4e8b', '1581044777550-4cfa60707c03', '1595777457583-95e059d581b8', '1550639525-c97d455acf70'],
    scents: ['1522337360788-8b13dee7a37e', '1520903920243-00d872a2d1c9', '1594035910387-fea47794261f', '1616401784845-180882ba9ba8', '1585362947119-948ff112ceeb', '1592945403244-b3fbafd7f539', '1602928321679-560bb453f190', '1556228578-0d85b1a4d571'],
    glam: ['1535632066927-ab7c9ab60908', '1548036328-c9fa89d128fa', '1509631179647-0177331693ae', '1611591475140-4987c459f0bc', '1508296695146-257a814070b4', '1599643478514-4a42054fbceb', '1586495777744-4413f21062fa', '1594633312681-425c7b97ccd1'],
    menswear: ['1507679799987-c73779587ccf', '1578632767115-351597cf2477', '1550246140-5119ae4790b8', '1617137968427-85924c800a22', '1523275335684-37898b6baf30', '1594938298596-3636b65ee3bf', '1582212590214-e532a24c520a', '1624222247344-550fb60583dc']
}

const images = [
    // Avatars
    { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800', filename: 'amaka-avatar.jpg' },
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', filename: 'tunde-avatar.jpg' },
    { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800', filename: 'chioma-avatar.jpg' },
    { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800', filename: 'ibrahim-avatar.jpg' }
];

// Generate 30 files for each vendor
for (let i = 1; i <= 30; i++) {
    images.push({ url: `https://images.unsplash.com/photo-${baseUrls.womenswear[i % baseUrls.womenswear.length]}?w=800`, filename: `p${i}-amaka-item.jpg` });
    images.push({ url: `https://images.unsplash.com/photo-${baseUrls.scents[i % baseUrls.scents.length]}?w=800`, filename: `t${i}-tunde-item.jpg` });
    images.push({ url: `https://images.unsplash.com/photo-${baseUrls.glam[i % baseUrls.glam.length]}?w=800`, filename: `c${i}-chioma-item.jpg` });
    images.push({ url: `https://images.unsplash.com/photo-${baseUrls.menswear[i % baseUrls.menswear.length]}?w=800`, filename: `i${i}-ibrahim-item.jpg` });
}

const targetDir = path.join(process.cwd(), 'src', 'assets', 'products')
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true })

console.log(`📦 Downloading MEGA ${images.length}-File Inventory...\n`)
let completed = 0;

images.forEach(({ url, filename }) => {
    const filePath = path.join(targetDir, filename)
    const file = fs.createWriteStream(filePath)

    https.get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
            https.get(response.headers.location, (redirectResponse) => {
                redirectResponse.pipe(file)
                file.on('finish', () => { file.close(); completed++; console.log(`✅ [${completed}/${images.length}] Saved: ${filename}`) })
            })
            return
        }
        response.pipe(file)
        file.on('finish', () => { file.close(); completed++; console.log(`✅ [${completed}/${images.length}] Saved: ${filename}`) })
    }).on('error', (err) => {
        fs.unlink(filePath, () => { })
        console.error(`❌ Error:`, err.message)
    })
})