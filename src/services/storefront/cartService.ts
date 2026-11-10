export function addToCart(
    ProductProp: { id: string, image_url: string, name: string, price: number, quantity: number },
    aim = 'add',
    setReload?: ((val: any) => void) | null,
    reload?: any
) {
    const rawCart: any[] = JSON.parse(localStorage.getItem('cart') || '[]') || [];
    if (!rawCart) {
        return;
    } else {
        if (aim === 'add') {
            const existingCartIndex = rawCart.findIndex((item: any) => item.id === ProductProp.id)
            if (existingCartIndex !== -1) {
                rawCart[existingCartIndex].quantity += 1

                localStorage.setItem('cart', JSON.stringify(rawCart))
                if (setReload) { setReload(!reload) }

            } else {
                let newcart = [...rawCart, { ...ProductProp, quantity: 1 }];
                localStorage.setItem('cart', JSON.stringify(newcart))
                if (setReload) { setReload(!reload) }
                console.log('finished')
            }
        } else if (aim === 'subtract') {
            const existingCartIndex = rawCart.findIndex((item: any) => item.id === ProductProp.id)
            if (existingCartIndex !== -1) {
                rawCart[existingCartIndex].quantity > 0 ? rawCart[existingCartIndex].quantity -= 1 : null

                localStorage.setItem('cart', JSON.stringify(rawCart))
                if (setReload) { setReload(!reload) }
            }
        }
        window.dispatchEvent(new Event('cartUpdated'))
    }
}