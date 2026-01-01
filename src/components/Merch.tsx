"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShoppingCart, 
  X, 
  Check, 
  ClipboardCheck, 
  Truck, 
  Store, 
  Loader2,
  ChevronRight
} from 'lucide-react';

// --- Assets: Logos ---
import AfterHoursImg from '@/assets/shirtImages/AfterHoursImg.jpg';
import CotsCornerImg from '@/assets/shirtImages/CotsCornerImg.jpg';
import FollowingThePackImg from '@/assets/shirtImages/FollowingThePackImg.jpg';
import GameTimeLiveImg from '@/assets/shirtImages/GameTimeLiveImg.jpg';
import RamonsPlaybookImg from '@/assets/shirtImages/RamonsPlaybookImg.jpg';
import TheGameTimeNetworkImg from '@/assets/shirtImages/TheGameTimeNetworkImg.jpg';

// --- Assets: Base Garments ---
import BlackShirtBase from '@/assets/shirtImages/black-shirt.webp';
import BlackHoodieBase from '@/assets/shirtImages/black-hoodie.png';
import BlackSweatshirtBase from '@/assets/shirtImages/black-sweatshirt.webp';

// --- Types ---
type ProductType = 'shirt' | 'hoodie' | 'sweatshirt';
type ProductSize = 'kids-s' | 'kids-m' | 'kids-l' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
type ProductColor = 'white' | 'pink' | 'black';
type ProductLogo = 'Classic' | 'After Hours' | "Cot's Corner" | 'Following The Pack' | "Ramon's Playbook" | 'GameTime Live';

interface Product {
  id: string;
  name: string;
  type: ProductType;
  shippingPrice: number;
  localPrice: number;
  description: string;
  availableSizes: ProductSize[];
  availableColors: ProductColor[];
}

interface CartItem extends Product {
  cartId: string;
  selectedSize: ProductSize;
  selectedColor: ProductColor;
  selectedLogo: ProductLogo;
  quantity: number;
  isLocal: boolean;
}

const logoMap: Record<ProductLogo, any> = {
  'Classic': TheGameTimeNetworkImg,
  'After Hours': AfterHoursImg,
  "Cot's Corner": CotsCornerImg,
  'Following The Pack': FollowingThePackImg,
  "Ramon's Playbook": RamonsPlaybookImg,
  'GameTime Live': GameTimeLiveImg,
};

const Merch = () => {
  // --- UI State ---
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // --- Customization State ---
  const [selectedSize, setSelectedSize] = useState<ProductSize>('m');
  const [selectedColor, setSelectedColor] = useState<ProductColor>('black');
  const [selectedLogo, setSelectedLogo] = useState<ProductLogo>('Classic');
  const [isLocal, setIsLocal] = useState(true);
  
  // --- Order State ---
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderStatus, setOrderStatus] = useState<'idle' | 'sending' | 'completed'>('idle');
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '', address: '' });

  const products: Product[] = [
    { id: 'classic-tee', name: 'GameTime T-Shirt', type: 'shirt', shippingPrice: 24, localPrice: 17, description: 'Official GameTime Classic Tee.', availableSizes: ['kids-s', 'kids-m', 'kids-l', 's', 'm', 'l', 'xl', '2xl', '3xl'], availableColors: ['white', 'pink', 'black'] },
    { id: 'premium-hoodie', name: 'GameTime Hoodie', type: 'hoodie', shippingPrice: 42, localPrice: 35, description: 'Heavyweight premium hoodie.', availableSizes: ['s', 'm', 'l', 'xl', '2xl', '3xl'], availableColors: ['white', 'pink', 'black'] },
    { id: 'classic-sweatshirt', name: 'GameTime Sweatshirt', type: 'sweatshirt', shippingPrice: 30, localPrice: 22, description: 'Relaxed fit sweatshirt.', availableSizes: ['s', 'm', 'l', 'xl', '2xl', '3xl'], availableColors: ['white', 'pink', 'black'] }
  ];

  const getBaseImage = (type: ProductType) => {
    if (type === 'shirt') return BlackShirtBase;
    if (type === 'hoodie') return BlackHoodieBase;
    return BlackSweatshirtBase;
  };

  const addToCart = () => {
    if (!selectedProduct) return;
    const newItem: CartItem = {
      ...selectedProduct,
      cartId: Math.random().toString(36).substr(2, 9),
      selectedSize,
      selectedColor,
      selectedLogo,
      quantity: 1,
      isLocal
    };
    setCart([...cart, newItem]);
    setSelectedProduct(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const removeFromCart = (cartId: string) => setCart(cart.filter(item => item.cartId !== cartId));
  const getTotalPrice = () => cart.reduce((total, item) => (item.isLocal ? item.localPrice : item.shippingPrice) * item.quantity + total, 0);

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOrderStatus('sending');
    const payload = {
      customer: customerInfo,
      items: cart,
      total: getTotalPrice(),
      timestamp: new Date().toLocaleString()
    };
    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxmzgbw2xAH0eCk3fsLLa8hg9l8eUPlA43YJWrU5rdH8eUcEYXbf83WPLZJe-tFVsDP4Q/exec';
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setOrderStatus('completed');
      setCart([]); 
      setTimeout(() => { setShowCheckout(false); setOrderStatus('idle'); }, 5000);
    } catch (error) {
      console.error("Order error:", error);
      alert("Submission failed.");
      setOrderStatus('idle');
    }
  };

  return (
    <section id="merch" className="w-full py-24 bg-white font-sans text-slate-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- Unified Header Section (Matching Live.tsx) --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            GameTime <span className="text-[#be4725]">Merch</span>
          </h2>
          <div className="mx-auto w-16 h-1 bg-gradient-to-r from-[#be4725] via-[#a73b24] to-slate-200 rounded-full mb-4"></div>
          <p className="text-lg text-slate-500 font-medium">
            Custom Collection 2026 • Premium Apparel
          </p>
          
          <div className="pt-4">
            <button 
              onClick={() => setShowCart(true)} 
              className="group inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-[#be4725] transition-all duration-300 font-bold text-xs tracking-widest shadow-xl shadow-slate-200"
            >
              <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
              VIEW BAG ({cart.length})
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id} 
              onClick={() => setSelectedProduct(product)} 
              className="group cursor-pointer bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100"
            >
              <div className="aspect-square relative flex items-center justify-center p-10">
                <Image 
                  src={getBaseImage(product.type)} 
                  alt={product.name} 
                  fill 
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </div>
              <div className="p-8 bg-white flex justify-between items-center border-t border-slate-50">
                <div>
                  <h3 className="font-black uppercase text-sm tracking-tight text-slate-900">{product.name}</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Starting at ${product.localPrice}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#be4725] group-hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODALS (Product Customizer, Cart, Checkout, Success Toast) --- */}
      {/* ... (Rest of the modal code remains functionally identical but inherits the cleaner layout styles) ... */}
      
      {/* Product Customizer Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-[100] flex items-center justify-center p-0 md:p-4 overflow-y-auto">
          <div className="bg-white w-full h-full md:h-auto md:max-w-6xl md:rounded-[3rem] relative flex flex-col md:flex-row overflow-hidden shadow-2xl">
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="absolute top-6 right-6 z-[110] p-3 bg-white/80 backdrop-blur shadow-lg rounded-full hover:bg-red-50 hover:text-red-500 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full md:w-3/5 bg-[#f8fafc] relative flex items-center justify-center p-8 md:p-20 min-h-[40vh]">
              <div className="relative w-full h-full max-w-[500px] aspect-square">
                <Image src={getBaseImage(selectedProduct.type)} alt="Garment Preview" fill className="object-contain drop-shadow-2xl" />
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-[30%] mt-[-10%] transition-all duration-500 transform hover:scale-110">
                    <Image src={logoMap[selectedLogo]} alt="Logo Overlay" width={400} height={400} className="w-full h-auto object-contain drop-shadow-xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col bg-white overflow-y-auto">
              <div className="mb-8">
                <span className="text-[#be4725] text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Premium Customization</span>
                <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">{selectedProduct.name}</h2>
                <div className="mt-6 flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                  <button onClick={() => setIsLocal(true)} className={`flex-1 py-3 rounded-xl text-[10px] font-black transition-all flex items-center justify-center gap-2 ${isLocal ? 'bg-white shadow-md text-[#be4725]' : 'text-slate-400'}`}><Store className="w-4 h-4" /> LOCAL</button>
                  <button onClick={() => setIsLocal(false)} className={`flex-1 py-3 rounded-xl text-[10px] font-black transition-all flex items-center justify-center gap-2 ${!isLocal ? 'bg-white shadow-md text-[#be4725]' : 'text-slate-400'}`}><Truck className="w-4 h-4" /> SHIPPING</button>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-400 mb-4 block tracking-widest">01. Choose Graphic</label>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.keys(logoMap).map((logo) => (
                      <button key={logo} onClick={() => setSelectedLogo(logo as ProductLogo)} className={`p-1.5 rounded-2xl border-2 transition-all ${selectedLogo === logo ? 'border-[#be4725] bg-[#be4725]/5' : 'border-slate-100'}`}>
                        <div className="relative aspect-square bg-white rounded-xl mb-1.5 overflow-hidden border border-slate-100 p-2">
                          <Image src={logoMap[logo as ProductLogo]} alt={logo} fill className="object-contain" />
                        </div>
                        <span className="text-[8px] font-black uppercase block truncate text-center px-1">{logo}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 mb-4 block tracking-widest">02. Color</label>
                    <div className="flex gap-3">
                      {(['white', 'pink', 'black'] as ProductColor[]).map(c => (
                        <button key={c} onClick={() => setSelectedColor(c)} className={`w-10 h-10 rounded-full border-2 transition-transform ${selectedColor === c ? 'border-[#be4725] ring-4 ring-[#be4725]/10' : 'border-slate-200'} ${c === 'white' ? 'bg-white' : c === 'pink' ? 'bg-pink-400' : 'bg-black'}`} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase text-slate-400 mb-4 block tracking-widest">03. Size</label>
                    <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value as ProductSize)} className="w-full bg-slate-50 p-3.5 border border-slate-200 rounded-xl text-[11px] font-black uppercase outline-none focus:border-[#be4725]">
                      {selectedProduct.availableSizes.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <button onClick={addToCart} className="w-full bg-[#be4725] text-white py-6 rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-[#be4725]/40 hover:translate-y-[-2px] transition-all">
                  ADD TO BAG — ${isLocal ? selectedProduct.localPrice : selectedProduct.shippingPrice}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer Overlay */}
      {showCart && (
        <div className="fixed inset-0 z-[150] flex justify-end">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowCart(false)} />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
            <div className="p-8 border-b flex justify-between items-center bg-slate-50/50">
              <h2 className="text-2xl font-black uppercase tracking-tighter">Your Bag</h2>
              <button onClick={() => setShowCart(false)} className="p-2 hover:bg-slate-100 rounded-full transition-all"><X /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-300">
                  <ShoppingCart className="w-16 h-16 mb-4 opacity-10" />
                  <p className="font-bold uppercase text-xs tracking-widest">Empty Bag</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartId} className="flex gap-5 p-5 rounded-3xl border border-slate-100 bg-white shadow-sm relative group hover:border-[#be4725]/20 transition-all">
                    <div className="w-24 h-24 bg-slate-50 rounded-2xl border border-slate-100 relative p-3 shrink-0">
                      <Image src={logoMap[item.selectedLogo]} alt="item logo" fill className="object-contain p-2" />
                    </div>
                    <div className="flex-1 py-1">
                      <p className="text-[10px] font-black uppercase text-[#be4725] mb-1">{item.name}</p>
                      <p className="font-black text-sm uppercase leading-tight mb-2">{item.selectedLogo}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[9px] font-black bg-slate-100 px-2 py-1 rounded-md uppercase text-slate-500">{item.selectedSize}</span>
                        <span className="text-[9px] font-black bg-slate-100 px-2 py-1 rounded-md uppercase text-slate-500">{item.selectedColor}</span>
                        <span className="text-[9px] font-black bg-slate-100 px-2 py-1 rounded-md uppercase text-slate-500">{item.isLocal ? 'Pickup' : 'Ship'}</span>
                      </div>
                      <p className="font-black text-lg mt-3 text-slate-900">${item.isLocal ? item.localPrice : item.shippingPrice}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.cartId)} className="absolute top-4 right-4 text-slate-300 hover:text-red-500"><X className="w-4 h-4" /></button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-8 border-t bg-slate-50/50 space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]">Estimated Total</span>
                  <span className="text-4xl font-black text-slate-900">${getTotalPrice()}</span>
                </div>
                <button onClick={() => { setShowCart(false); setShowCheckout(true); }} className="w-full bg-slate-900 text-white py-6 rounded-[1.5rem] font-black uppercase text-xs tracking-[0.3em] hover:bg-[#be4725] transition-all">
                  Go to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-2xl z-[200] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl relative">
            <button onClick={() => setShowCheckout(false)} className="absolute top-8 right-8 p-2 bg-slate-100 rounded-full hover:bg-slate-200"><X /></button>
            <div className="p-10 md:p-16">
              {orderStatus === 'completed' ? (
                <div className="text-center py-12 space-y-8 animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner"><ClipboardCheck className="w-12 h-12" /></div>
                  <div><h3 className="text-4xl font-black uppercase tracking-tighter mb-2">Order Confirmed</h3><p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">We'll reach out via phone/email shortly.</p></div>
                </div>
              ) : (
                <form onSubmit={handleCheckoutSubmit} className="space-y-8">
                  <div><h3 className="text-3xl font-black uppercase italic tracking-tighter">Checkout Details</h3><p className="text-[#be4725] text-[10px] font-black uppercase tracking-widest mt-2">Total amount due: ${getTotalPrice()}</p></div>
                  <div className="space-y-5">
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-4 tracking-widest">Customer Name</label>
                    <input required placeholder="Full Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-sm outline-none focus:border-[#be4725] transition-all" onChange={e => setCustomerInfo({...customerInfo, name: e.target.value})} /></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-4 tracking-widest">Email Address</label>
                      <input required type="email" placeholder="Email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-sm outline-none focus:border-[#be4725]" onChange={e => setCustomerInfo({...customerInfo, email: e.target.value})} /></div>
                      <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-4 tracking-widest">Phone Number</label>
                      <input required type="tel" placeholder="Phone" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-sm outline-none focus:border-[#be4725]" onChange={e => setCustomerInfo({...customerInfo, phone: e.target.value})} /></div>
                    </div>
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-4 tracking-widest">Shipping Details</label>
                    <textarea required placeholder="Full Shipping Address (Or 'Local Pickup')" rows={3} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-sm outline-none focus:border-[#be4725]" onChange={e => setCustomerInfo({...customerInfo, address: e.target.value})} /></div>
                  </div>
                  <button disabled={orderStatus === 'sending'} className="w-full bg-[#be4725] text-white py-6 rounded-[1.5rem] font-black uppercase text-xs tracking-[0.3em] shadow-2xl shadow-[#be4725]/30 disabled:opacity-50 flex items-center justify-center gap-4 hover:translate-y-[-2px] transition-all">
                    {orderStatus === 'sending' ? <><Loader2 className="w-5 h-5 animate-spin" /> SUBMITTING...</> : <>COMPLETE ORDER — ${getTotalPrice()}</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 bg-slate-900 text-white px-10 py-5 rounded-2xl shadow-2xl flex items-center gap-4 z-[300] animate-in slide-in-from-bottom-10 duration-500">
          <div className="bg-[#be4725] rounded-full p-1.5"><Check className="w-4 h-4 text-white" /></div>
          <span className="font-black text-[10px] uppercase tracking-[0.2em]">Item Added to Bag</span>
        </div>
      )}

    </section>
  );
};

export default Merch;