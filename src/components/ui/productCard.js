import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useRef } from 'react';

// ── ProductCard receives a `product` object from your backend ─────────────────
// Expected API shape:
// {
//   id: 1,
//   name: 'Product Name',
//   price: 99.99,
//   image: 'https://your-api.com/image.jpg',
//   rating: 4.5,
//   reviews: 128,
// }
//
// ── Hook up your backend in the PARENT component (e.g. HomeScreen) ────────────
// const [products, setProducts] = useState([]);
//
// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('https://your-api.com/products');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Failed to fetch products:', error);
//     }
//   };
//   fetchProducts();
// }, []);
//
// Then render with FlatList:
// <FlatList
//   data={products}
//   keyExtractor={(item) => item.id.toString()}
//   numColumns={2}
//   columnWrapperStyle={{ justifyContent: 'space-between' }}
//   renderItem={({ item }) => <ProductCard product={item} />}
// />
// ─────────────────────────────────────────────────────────────────────────────

export default function ProductCard({ product }) {
  const {
    name = 'Product Name',                     // from backend: product.name
    price = 0.00,                              // from backend: product.price
    image = 'https://via.placeholder.com/400', // from backend: product.image (URL)
    rating = 0,                                // from backend: product.rating
    reviews = 0,                               // from backend: product.reviews
  } = product || {};

  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const badgeAnim = useRef(new Animated.Value(0)).current;

  const pulse = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.93, duration: 80, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 120, useNativeDriver: true }),
    ]).start();
  };

  const handleAddToCart = () => {
    pulse();
    setAdded(true);
    setQuantity(1);
    Animated.spring(badgeAnim, { toValue: 1, useNativeDriver: true, friction: 5 }).start();

    // ── Send add-to-cart to backend ───────────────────────────────────────────
    // await fetch('https://your-api.com/cart', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ productId: product.id, quantity: 1 }),
    // });
    // ─────────────────────────────────────────────────────────────────────────
  };

  const handleIncrease = () => {
    pulse();
    setQuantity(q => q + 1);

    // ── Update quantity in backend ────────────────────────────────────────────
    // await fetch(`https://your-api.com/cart/${product.id}`, {
    //   method: 'PATCH',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ quantity: quantity + 1 }),
    // });
    // ─────────────────────────────────────────────────────────────────────────
  };

  const handleDecrease = () => {
    pulse();
    if (quantity <= 1) {
      setAdded(false);
      setQuantity(0);
      Animated.timing(badgeAnim, { toValue: 0, duration: 150, useNativeDriver: true }).start();

      // ── Remove item from cart ─────────────────────────────────────────────
      // await fetch(`https://your-api.com/cart/${product.id}`, { method: 'DELETE' });
      // ─────────────────────────────────────────────────────────────────────
    } else {
      setQuantity(q => q - 1);

      // ── Update quantity in backend ──────────────────────────────────────────
      // await fetch(`https://your-api.com/cart/${product.id}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ quantity: quantity - 1 }),
      // });
      // ───────────────────────────────────────────────────────────────────────
    }
  };

  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.floor(rating);
    const half = !filled && i < rating;
    return { filled, half };
  });

  return (
    <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
    
      {quantity > 0 && (
        <Animated.View style={[styles.badge, { transform: [{ scale: badgeAnim }] }]}>
          <Text style={styles.badgeText}>{quantity}</Text>
        </Animated.View>
      )}

      {/* Product Image — uri comes from backend */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.productImage} resizeMode="cover" />
        <View style={styles.imageOverlay} />
      </View>

    
      <View style={styles.info}>
        <Text style={styles.productName} numberOfLines={1}>{name}</Text>

        {/* Stars */}
        <View style={styles.ratingRow}>
          <View style={styles.stars}>
            {stars.map((s, i) => (
              <Text key={i} style={[styles.star, s.filled ? styles.starFilled : s.half ? styles.starHalf : styles.starEmpty]}>
                {s.filled ? '★' : s.half ? '⭐' : '☆'}
              </Text>
            ))}
          </View>
          <Text style={styles.reviews}>({reviews})</Text>
        </View>

        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>

    
      <View style={styles.cartRow}>
        {!added ? (
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart} activeOpacity={0.85}>
            <Text style={styles.addButtonText}>＋ Add to Cart</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.quantityControl}>
            <TouchableOpacity style={styles.qtyBtn} onPress={handleDecrease} activeOpacity={0.75}>
              <Text style={styles.qtyBtnText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.qtyValue}>{quantity}</Text>
            <TouchableOpacity style={[styles.qtyBtn, styles.qtyBtnPlus]} onPress={handleIncrease} activeOpacity={0.75}>
              <Text style={[styles.qtyBtnText, styles.qtyBtnPlusText]}>＋</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Animated.View>
  );
}

const ACCENT = '#FF5C35';
const DARK = '#1A1A2E';
const LIGHT_BG = '#F7F8FC';

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: DARK,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },

  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10,
    backgroundColor: ACCENT,
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '800',
  },

  imageContainer: {
    width: '100%',
    height: 130,
    backgroundColor: LIGHT_BG,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.08))',
  },

  // Info
  info: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 4,
  },
  productName: {
    fontSize: 13,
    fontWeight: '700',
    color: DARK,
    marginBottom: 4,
    letterSpacing: 0.1,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  stars: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 10,
  },
  starFilled: {
    color: '#FFB800',
  },
  starHalf: {
    color: '#FFB800',
  },
  starEmpty: {
    color: '#D0D0D0',
  },
  reviews: {
    fontSize: 10,
    color: '#999',
    marginLeft: 3,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: ACCENT,
    letterSpacing: 0.2,
  },

  cartRow: {
    paddingHorizontal: 10,
    paddingBottom: 12,
    paddingTop: 6,
  },
  addButton: {
    backgroundColor: DARK,
    borderRadius: 10,
    paddingVertical: 9,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.3,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: LIGHT_BG,
    borderRadius: 10,
    overflow: 'hidden',
  },
  qtyBtn: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECF3',
  },
  qtyBtnPlus: {
    backgroundColor: DARK,
  },
  qtyBtnText: {
    fontSize: 18,
    color: DARK,
    fontWeight: '700',
    lineHeight: 22,
  },
  qtyBtnPlusText: {
    color: '#fff',
  },
  qtyValue: {
    fontSize: 15,
    fontWeight: '800',
    color: DARK,
    minWidth: 28,
    textAlign: 'center',
  },
});