import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'

const images = [
    // User Avatars
    { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800', filename: 'amaka-avatar.jpg' },
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', filename: 'tunde-avatar.jpg' },
    { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800', filename: 'chioma-avatar.jpg' },
    { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800', filename: 'ibrahim-avatar.jpg' },

    // Amaka Products (30 Items)
    { url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800', filename: 'p1-ankara-wrap.jpg' },
    { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800', filename: 'p2-two-piece.jpg' },
    { url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800', filename: 'p3-earrings.jpg' },
    { url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800', filename: 'p4-silk-jumpsuit.jpg' },
    { url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800', filename: 'p5-velvet-gown.jpg' },
    { url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800', filename: 'p6-satin-dress.jpg' },
    { url: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=800', filename: 'p7-summer-maxi.jpg' },
    { url: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800', filename: 'p8-designer-heels.jpg' },
    { url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800', filename: 'p9-leather-tote.jpg' },
    { url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800', filename: 'p10-gold-necklace.jpg' },
    { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800', filename: 'p11-perfume-oil.jpg' },
    { url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800', filename: 'p12-lip-gloss-set.jpg' },
    { url: 'https://images.unsplash.com/photo-1611591475140-4987c459f0bc?w=800', filename: 'p13-crystal-clutch.jpg' },
    { url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800', filename: 'p14-denim-jacket.jpg' },
    { url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800', filename: 'p15-streetwear-set.jpg' },
    { url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800', filename: 'p16-cashmere-scarf.jpg' },
    { url: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800', filename: 'p17-sunglasses.jpg' },
    { url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800', filename: 'p18-gold-watch.jpg' },
    { url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800', filename: 'p19-suede-pumps.jpg' },
    { url: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?w=800', filename: 'p20-floral-kimono.jpg' },
    { url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800', filename: 'p21-crossbody-bag.jpg' },
    { url: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800', filename: 'p22-blazer-dress.jpg' },
    { url: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=800', filename: 'p23-bodycon-dress.jpg' },
    { url: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800', filename: 'p24-pleated-skirt.jpg' },
    { url: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800', filename: 'p25-white-sneakers.jpg' },
    { url: 'https://images.unsplash.com/photo-1588444839158-42f3d81b2135?w=800', filename: 'p26-silver-ring-set.jpg' },
    { url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800', filename: 'p27-woven-tote.jpg' },
    { url: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800', filename: 'p28-silk-headscarf.jpg' },
    { url: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800', filename: 'p29-beaded-bracelet.jpg' },
    { url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800', filename: 'p30-glow-skincare.jpg' },

    // Extra Male / Unique Products for Other Users
    { url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800', filename: 'p31-men-suit.jpg' },
    { url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800', filename: 'p32-graphic-tee.jpg' },
    { url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800', filename: 'p33-native-kaftan.jpg' },
    { url: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800', filename: 'p34-luxury-oud.jpg' },
]

const targetDir = path.join(process.cwd(), 'src', 'assets', 'products')

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
}

console.log('📦 Downloading assets directly into src/assets/products/...\n')

images.forEach(({ url, filename }) => {
    const filePath = path.join(targetDir, filename)
    const file = fs.createWriteStream(filePath)

    https.get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
            https.get(response.headers.location, (redirectResponse) => {
                redirectResponse.pipe(file)
                file.on('finish', () => {
                    file.close()
                    console.log(`✅ Saved: src/assets/products/${filename}`)
                })
            })
            return
        }

        response.pipe(file)
        file.on('finish', () => {
            file.close()
            console.log(`✅ Saved: src/assets/products/${filename}`)
        })
    }).on('error', (err) => {
        fs.unlink(filePath, () => { })
        console.error(`❌ Error downloading ${filename}:`, err.message)
    })
})