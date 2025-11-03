import React, { useState } from 'react';
import Image from 'next/image';
import ShirtTemplate from '../assets/shirt.png';

// Define product types and interfaces
type ProductType = 'shirt' | 'hoodie' | 'sweatshirt';
type ProductSize = 'kids-s' | 'kids-m' | 'kids-l' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
type ProductColor = 'white' | 'pink' | 'black';

interface Product {
  id: string;
  name: string;
  type: ProductType;
  basePrice: number;
  originalPrice: number;
  description: string;
  availableSizes: ProductSize[];
  availableColors: ProductColor[];
}

export const Merch = () => {
  // State management
  const [selectedType, setSelectedType] = useState<ProductType | 'all'>('all');
  const [selectedSize, setSelectedSize] = useState<ProductSize | 'all'>('all');
  const [selectedColor, setSelectedColor] = useState<ProductColor | 'all'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Product data
  const products: Product[] = [
    {
      id: 'classic-tee',
      name: 'GameTime T-Shirt',
      type: 'shirt',
      basePrice: 17,
      originalPrice: 24,
      description: 'Rep your favorite Indy sports podcast with our classic comfortable tee. Features the GameTime logo and eastside pride.',
      availableSizes: ['kids-s', 'kids-m', 'kids-l', 's', 'm', 'l', 'xl', '2xl', '3xl'],
      availableColors: ['white', 'pink', 'black']
    },
    {
      id: 'premium-hoodie',
      name: 'GameTime Hoodie',
      type: 'hoodie',
      basePrice: 25,
      originalPrice: 33,
      description: 'Stay warm and stylish with our premium hoodie. Perfect for game day or casual wear.',
      availableSizes: ['s', 'm', 'l', 'xl', '2xl', '3xl'],
      availableColors: ['white', 'pink', 'black']
    },
    {
      id: 'classic-sweatshirt',
      name: 'GameTime Sweatshirt',
      type: 'sweatshirt',
      basePrice: 22,
      originalPrice: 30,
      description: 'Classic comfort meets style with our GameTime sweatshirt. Features a relaxed fit and soft material.',
      availableSizes: ['s', 'm', 'l', 'xl', '2xl', '3xl'],
      availableColors: ['white', 'pink', 'black']
    }
  ];

  // Filter products based on selections
  const filteredProducts = products.filter(product => {
    if (selectedType !== 'all' && product.type !== selectedType) return false;
    if (selectedSize !== 'all' && !product.availableSizes.includes(selectedSize)) return false;
    if (selectedColor !== 'all' && !product.availableColors.includes(selectedColor)) return false;
    return true;
  });

  return (
    <section id="merch" className="w-full py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GameTime <span className="text-[#be4725]">Merch</span>
          </h2>
          <div className="mx-auto w-16 h-1 bg-linear-to-r from-[#be4725] via-[#a73b24] to-[#0d1723] rounded-full mb-4" />
          <p className="text-lg text-muted-foreground">
            Rep the eastside with our official merchandise. Quality gear for real fans.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <select 
            className="px-4 py-2 rounded-md border bg-background"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as ProductType | 'all')}
          >
            <option value="all">All Types</option>
            <option value="shirt">T-Shirts</option>
            <option value="hoodie">Hoodies</option>
            <option value="sweatshirt">Sweatshirts</option>
          </select>

          <select 
            className="px-4 py-2 rounded-md border bg-background"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value as ProductSize | 'all')}
          >
            <option value="all">All Sizes</option>
            <option value="kids-s">Kids Small</option>
            <option value="kids-m">Kids Medium</option>
            <option value="kids-l">Kids Large</option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
            <option value="xl">XL</option>
            <option value="2xl">2XL</option>
            <option value="3xl">3XL</option>
          </select>

          <select 
            className="px-4 py-2 rounded-md border bg-background"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value as ProductColor | 'all')}
          >
            <option value="all">All Colors</option>
            <option value="white">White</option>
            <option value="pink">Pink</option>
            <option value="black">Black</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-card rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
              <div className="relative h-96 p-8">
                <Image
                  src={ShirtTemplate}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{product.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold">${product.basePrice}</span>
                  <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                  <span className="text-primary font-medium text-sm">
                    Save ${product.originalPrice - product.basePrice}
                  </span>
                </div>
                <button 
                  className="cursor-pointer w-full rounded-[9px] py-2 px-4 font-medium bg-[#be4725] text-white hover:bg-[#a73b24] hover:text-white transition-all duration-200"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}