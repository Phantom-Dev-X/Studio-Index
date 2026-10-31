import supabase from './lib/supabase';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Storefront from './pages/Storefront';

import p1Img from './assets/products/p1-ankara-wrap.jpg';
import p2Img from './assets/products/p2-two-piece.jpg';
import p3Img from './assets/products/p3-earrings.jpg';
import p4Img from './assets/products/p4-silk-jumpsuit.jpg';
import p5Img from './assets/products/p5-velvet-gown.jpg';
import p6Img from './assets/products/p6-satin-dress.jpg';
import p7Img from './assets/products/p7-summer-maxi.jpg';
import p8Img from './assets/products/p8-designer-heels.jpg';
import p9Img from './assets/products/p9-leather-tote.jpg';
import p10Img from './assets/products/p10-gold-necklace.jpg';
import p11Img from './assets/products/p11-perfume-oil.jpg';
import p12Img from './assets/products/p12-lip-gloss-set.jpg';

export default function App() {
  const [ProductsArray, setProductsArray] = useState<any[] | null>(null);
  const getProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error || !data || data.length === 0) {
      const AMAKA_PRODUCTS = [
        { id: 'p1', name: 'Silk Ankara Wrap Dress', price: 35000, img: p1Img, image_url: p1Img },
        { id: 'p2', name: 'Two-Piece Luxury Set', price: 48000, img: p2Img, image_url: p2Img },
        { id: 'p3', name: 'Handcrafted Statement Earrings', price: 12000, img: p3Img, image_url: p3Img },
        { id: 'p4', name: 'Emerald Silk Jumpsuit', price: 55000, img: p4Img, image_url: p4Img },
        { id: 'p5', name: 'Royal Velvet Corset Gown', price: 75000, img: p5Img, image_url: p5Img },
        { id: 'p6', name: 'Satin Backless Maxi Dress', price: 42000, img: p6Img, image_url: p6Img },
        { id: 'p7', name: 'Boho Summer Print Dress', price: 28000, img: p7Img, image_url: p7Img },
        { id: 'p8', name: 'Stiletto Designer Heels', price: 65000, img: p8Img, image_url: p8Img },
        { id: 'p9', name: 'Genuine Leather Work Tote', price: 50000, img: p9Img, image_url: p9Img },
        { id: 'p10', name: '18k Gold Layered Necklace', price: 38000, img: p10Img, image_url: p10Img },
        { id: 'p11', name: 'French Vanilla Perfume Oil', price: 22000, img: p11Img, image_url: p11Img },
        { id: 'p12', name: 'Oud Royal Arabian Oil (12ml)', price: 35000, img: p12Img, image_url: p12Img }
      ];
      setProductsArray(AMAKA_PRODUCTS)
    }
    if (data) {
      setProductsArray(data)
      console.log(data)
    }
  }
  useEffect(() => {
    console.log('superbase running')
    getProducts()
  }, [])
  return (
    ProductsArray ?
      (<BrowserRouter>
        < Routes >
          <Route path="/" element={<Navigate to="/amaka_wears" replace />} />

          <Route path="/:username" element={<Storefront ProductsArray={ProductsArray} />} />
        </Routes >
      </BrowserRouter >) : <div className='flex w-screen h-screen text-center justify-center items-center text-amber-50 animate-pulse'>loading StoreFront...</div>

  );
}