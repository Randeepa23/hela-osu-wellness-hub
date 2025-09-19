import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Info } from 'lucide-react';

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  benefits: string[];
  image?: string;
  rating?: number;
  price?: string;
  isExclusive?: boolean;
}

const ProductCard = ({ 
  name, 
  category, 
  description, 
  benefits, 
  image, 
  rating = 4.8, 
  price,
  isExclusive = false 
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 overflow-hidden">
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-ayur-cream to-secondary/30">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-ayur-sage/20 to-secondary/40 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-primary">{name.charAt(0)}</span>
              </div>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
          </div>
        )}
        
        {isExclusive && (
          <Badge className="absolute top-2 right-2 bg-gradient-to-r from-ayur-gold to-accent text-accent-foreground">
            Exclusive
          </Badge>
        )}
      </div>

      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-ayur-gold text-ayur-gold" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          )}
        </div>
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        <div className="space-y-1">
          <p className="text-xs font-medium text-primary">Key Benefits:</p>
          <div className="flex flex-wrap gap-1">
            {benefits.slice(0, 3).map((benefit, index) => (
              <Badge key={index} variant="outline" className="text-xs py-0">
                {benefit}
              </Badge>
            ))}
            {benefits.length > 3 && (
              <Badge variant="outline" className="text-xs py-0">
                +{benefits.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {price && (
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">Rs. {price}</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2 pt-2">
        <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-ayur-sage hover:shadow-md">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" size="sm">
          <Info className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;