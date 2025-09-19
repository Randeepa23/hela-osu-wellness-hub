import { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Products', count: 45 },
    { id: 'arishta', name: 'Arishta', count: 8 },
    { id: 'kwatha', name: 'Kwatha', count: 6 },
    { id: 'watee', name: 'Watee', count: 5 },
    { id: 'gritha', name: 'Gritha', count: 4 },
    { id: 'lepa', name: 'Lepa', count: 3 },
    { id: 'oils', name: 'Oils', count: 7 },
    { id: 'rasayana', name: 'Rasayana', count: 5 },
    { id: 'churna', name: 'Churna', count: 7 },
  ];

  const products = [
    {
      name: "Itura Powder Premium",
      category: "Churna",
      description: "Premium blend of traditional herbs for digestive wellness and immunity boost",
      benefits: ["Digestive Health", "Immunity", "Detox", "Energy"],
      price: "2,500",
      isExclusive: true,
    },
    {
      name: "Belimal Tea Bags",
      category: "Herbal Tea",
      description: "Premium Ceylon Belimal tea with natural antioxidants and healing properties",
      benefits: ["Antioxidants", "Heart Health", "Natural"],
      price: "850",
    },
    {
      name: "Ranawara Tea",
      category: "Herbal Tea",
      description: "Traditional herbal tea known for its cooling and detoxifying properties",
      benefits: ["Cooling", "Detox", "Digestive"],
      price: "750",
    },
    {
      name: "Iramusu Tea",
      category: "Herbal Tea",
      description: "Pure Iramusu herbal tea for blood purification and skin health",
      benefits: ["Blood Purify", "Skin Health", "Cooling"],
      price: "900",
    },
    {
      name: "Ayurvedic Massage Oil",
      category: "Oils",
      description: "Therapeutic massage oil blend for muscle relaxation and skin nourishment",
      benefits: ["Massage", "Relaxation", "Skin Care"],
      price: "1,200",
    },
    {
      name: "Nidhan Wasthu",
      category: "Rasayana",
      description: "Special Ayurvedic preparation for overall wellness and vitality",
      benefits: ["Vitality", "Wellness", "Strength"],
      price: "3,500",
      isExclusive: true,
    },
    {
      name: "Herbal Hair Oil",
      category: "Oils",
      description: "Natural hair oil with traditional herbs for healthy hair growth",
      benefits: ["Hair Growth", "Scalp Health", "Natural"],
      price: "980",
    },
    {
      name: "Digestive Kwatha",
      category: "Kwatha",
      description: "Traditional herbal decoction for digestive disorders and stomach health",
      benefits: ["Digestion", "Stomach Health", "Natural"],
      price: "1,800",
    },
    {
      name: "Immunity Arishta",
      category: "Arishta",
      description: "Fermented herbal medicine for boosting immunity and overall health",
      benefits: ["Immunity", "Health", "Traditional"],
      price: "2,200",
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-ayur-cream via-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Grid className="w-4 h-4 mr-2" />
              Our Products
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Premium Ayurvedic Collection
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover our comprehensive range of authentic Ayurvedic products, carefully crafted 
              using traditional methods and the finest natural ingredients from Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border border-border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex items-center gap-2 mt-4">
            {selectedCategory !== 'all' && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory('all')}>
                {categories.find(c => c.id === selectedCategory)?.name} ×
              </Badge>
            )}
            {searchTerm && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchTerm('')}>
                "{searchTerm}" ×
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-foreground">
              {filteredProducts.length} Products Found
            </h2>
            <div className="text-sm text-muted-foreground">
              Showing all available products
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Product Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of Ayurvedic products, organized into traditional categories 
              for easy discovery of the perfect solution for your wellness needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.slice(1).map((category, index) => (
              <Button
                key={category.id}
                variant="outline"
                className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="text-lg font-semibold">{category.name}</div>
                <Badge variant="secondary" className="text-xs">
                  {category.count} items
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;