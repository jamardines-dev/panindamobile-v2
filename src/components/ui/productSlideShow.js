    import React, { useState, useRef } from 'react';
    import {
    View, Text, StyleSheet, ScrollView,
    Dimensions, Image, Animated, TouchableOpacity,
    } from 'react-native';

    const { width: screenWidth } = Dimensions.get('window');

    const ACCENT = '#FF5C35';
    const DARK = '#1A1A2E';

    // ── Placeholder best sellers — replace with backend data ─────────────────────
    const PLACEHOLDER_BEST_SELLERS = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 89.99,
        sold: 1240,
        badge: '🔥 #1 Best Seller',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    },
    {
        id: 2,
        name: 'Smart Watch Pro',
        price: 149.99,
        sold: 980,
        badge: '⭐ Top Rated',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    },
    {
        id: 3,
        name: 'Running Sneakers',
        price: 64.99,
        sold: 870,
        badge: '🚀 Trending',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    },
    ];

    // ── Connect to your backend here ─────────────────────────────────────────────
    // useEffect(() => {
    //   const fetchBestSellers = async () => {
    //     try {
    //       const response = await fetch('https://your-api.com/products/best-sellers');
    //       const data = await response.json();
    //       setBestSellers(data);
    //       // Expected: [{ id, name, price, sold, badge, image }, ...]
    //     } catch (error) {
    //       console.error('Failed to fetch best sellers:', error);
    //     }
    //   };
    //   fetchBestSellers();
    // }, []);
    // ─────────────────────────────────────────────────────────────────────────────

    export default function ProductSlideShow() {
    const [bestSellers, setBestSellers] = useState(PLACEHOLDER_BEST_SELLERS);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        {
        useNativeDriver: false,
        listener: (event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
            setActiveIndex(index);
        },
        }
    );

    return (
        <View style={styles.wrapper}>
        <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionTitle}>Best Sellers</Text>
            </View>
        </View>

        
        <Animated.ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            decelerationRate="fast"
            snapToInterval={screenWidth}
            snapToAlignment="start"
            contentContainerStyle={{ flexGrow: 1 }}
        >
            {bestSellers.map((item, index) => (
            <View key={item.id} style={styles.card}>

                <Image source={{ uri: item.image }} style={styles.image} />

                <View style={styles.overlay} />


                <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{item.badge}</Text>
                </View>

    
                <View style={styles.infoOverlay}>
                <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
                <View style={styles.bottomRow}>
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    <Text style={styles.sold}>{item.sold.toLocaleString()} sold</Text>
                </View>
                <TouchableOpacity style={styles.shopBtn} activeOpacity={0.85}>
                    <Text style={styles.shopBtnText}>Shop Now →</Text>
                </TouchableOpacity>
                </View>
            </View>
            ))}
        </Animated.ScrollView>

        <View style={styles.dotsContainer}>
            {bestSellers.map((_, index) => {
            const inputRange = [
                (index - 1) * screenWidth,
                index * screenWidth,
                (index + 1) * screenWidth,
            ];
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [8, 24, 8],
                extrapolate: 'clamp',
            });
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.35, 1, 0.35],
                extrapolate: 'clamp',
            });

            return (
                <Animated.View
                key={index}
                style={[
                    styles.dot,
                    {
                    width: dotWidth,
                    opacity,
                    backgroundColor: index === activeIndex ? ACCENT : '#ccc',
                    },
                ]}
                />
            );
            })}
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 12,
    },


    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    sectionTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    accentBar: {
        width: 4,
        height: 18,
        borderRadius: 2,
        backgroundColor: ACCENT,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: DARK,
        letterSpacing: 0.2,
    },
    seeAll: {
        fontSize: 13,
        color: ACCENT,
        fontWeight: '600',
    },


    card: {
        width: screenWidth,
        height: 220,
        backgroundColor: '#eee',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },


    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(10, 10, 30, 0.40)',
    },

    // Badge top-left
    badgeContainer: {
        position: 'absolute',
        top: 14,
        left: 16,
        backgroundColor: 'rgba(255,255,255,0.18)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.35)',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.3,
    },


    infoOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
    },
    productName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 4,
    },
    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    price: {
        color: ACCENT,
        fontSize: 20,
        fontWeight: '900',
    },
    sold: {
        color: 'rgba(255,255,255,0.75)',
        fontSize: 12,
        fontWeight: '500',
    },
    shopBtn: {
        alignSelf: 'flex-start',
        backgroundColor: ACCENT,
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 20,
    },
    shopBtnText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 0.3,
    },

    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        gap: 6,
    },
    dot: {
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
    },
    });